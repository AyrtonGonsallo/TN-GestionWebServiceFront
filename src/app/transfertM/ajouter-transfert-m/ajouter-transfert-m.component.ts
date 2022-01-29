import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EtatTransfert } from 'src/app/model/enums/EtatTransfert.model';
import { Transfert } from 'src/app/model/Transfert.model';
import { TransfertMultiple } from 'src/app/model/TransfertMultiple.model';
import { ClientServiceService } from 'src/app/services/client-service.service';

@Component({
  selector: 'app-ajouter-transfert-m',
  templateUrl: './ajouter-transfert-m.component.html',
  styleUrls: ['./ajouter-transfert-m.component.css']
})
export class AjouterTransfertMComponent implements OnInit {
  transfertsM:TransfertMultiple=new TransfertMultiple();
  transfertMForm!: FormGroup;
  emetteurs:any;
  beneficiaires:any;
  agents:any;
  pointDeVentes:any;
  idBeneficiaires:Array<number>=[];
  nbrBeneficiaires:number=0;
  constructor(private clientService:ClientServiceService,private formBuilder:FormBuilder,private thoast:ToastrService) {
    
   
   }

  ngOnInit(): void {
    let resp=this.clientService.getEmetteurs();
    resp.subscribe((data)=>{
      console.log(data);
      this.emetteurs=data;
    })
    let resp2=this.clientService.getBeneficiaires();
    resp2.subscribe((data)=>{
      console.log(data);
      this.beneficiaires=data;
    })
    let resp3=this.clientService.getAgents();
    resp3.subscribe((data)=>{
      console.log(data);
      this.agents=data;
    })
    let resp4=this.clientService.getPointDeVentes();
    resp4.subscribe((data)=>{
      console.log(data);
      this.pointDeVentes=data;
    })
    this.initForm();

  }

  initForm(){
    this.transfertMForm=this.formBuilder.group({
      emetteur:['',Validators.required],
      agent:['',Validators.required],
      transferts:this.formBuilder.array([]),
      delai_de_validite:['',Validators.required],
      delai_de_desherence:['',Validators.required],
      date_demission:['',Validators.required],
      motif:['',Validators.required],
      
      lieuDeDemande:['',Validators.required],

    })
  }
  ajouter(){
    const transfertMValue=this.transfertMForm?.value;
    if(this.nbrBeneficiaires>0){
      this.transfertsM.transferts=[];
      const transfertsValue=this.transfertMForm.controls.transferts?.value;
      console.log(transfertsValue);
      for(let i=0;i<transfertsValue.length;i++){
        let index=transfertsValue[i]['idBeneficiaire'];
        const transfert=new Transfert();
        let index2=transfertMValue['agent'];
        transfert.agent=this.agents[index2];
        let index3=transfertMValue['emetteur'];
        transfert.emetteur=this.emetteurs[index3];
        transfert.delai_de_desherence=transfertMValue['delai_de_desherence'];
        transfert.delai_de_validite=transfertMValue['delai_de_validite'];
        transfert.etat=EtatTransfert.à_servir;
        transfert.comission=transfertsValue[i]['montant']*0.05;
        transfert.frais=transfertsValue[i]['montant']*1.15;
        transfert.montant_operation=transfertsValue[i]['montant']*0.10;
        transfert.date_demission=transfertMValue['date_demission'];
        transfert.montant_transfert=transfertsValue[i]['montant'];
        transfert.motif=transfertMValue['motif'];
        transfert.reference=transfertsValue[i]['reference'];
        transfert.codePin=transfertsValue[i]['codePin'];
        let index5=transfertsValue[i]['lieuDeService'];
        transfert.lieuDeService=this.pointDeVentes[index5];
        let index6 =transfertMValue['lieuDeDemande'];
        transfert.lieuDeDemande=this.pointDeVentes[index6];
        let index4=transfertsValue[i]['idBeneficiaire'];
        transfert.beneficiaire=this.beneficiaires[index4];
        console.log(transfert);
        this.transfertsM.transferts.push(transfert);
      }
      
    }
    console.log(this.transfertsM);
    this.clientService.addTransfertM(this.transfertsM).subscribe((d)=>{
      console.log("reponse"+d);
    })
    this.thoast.success("transfert multiple Ajouté","Succes")
  }

  AjouterTransfert(){
    this.nbrBeneficiaires++;
    this.idBeneficiaires.push(this.nbrBeneficiaires);
    const transferts=this.transfertMForm.controls.transferts as FormArray;
    transferts.push(this.formBuilder.group({
      idBeneficiaire:'',
      montant:'',
      reference:['',Validators.required],
      codePin:['',Validators.required],
      type:['',Validators.required],
      lieuDeService:['',Validators.required],
      

    }));
  
  }
}

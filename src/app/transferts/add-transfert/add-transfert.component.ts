import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';


import { ClientServiceService } from 'src/app/services/client-service.service';
import {ToastrService} from 'ngx-toastr'
import { Transfert } from 'src/app/model/Transfert.model';
import { EtatTransfert } from 'src/app/model/enums/EtatTransfert.model';

@Component({
  selector: 'app-add-transfert',
  templateUrl: './add-transfert.component.html',
  styleUrls: ['./add-transfert.component.css']
})
export class AddTransfertComponent implements OnInit {
  Transfert:Transfert=new Transfert();
  TransfertForm!: FormGroup;
  emetteurs:any;
  beneficiaires:any;
  agents:any;
  pointDeVentes:any;
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
    this.TransfertForm=this.formBuilder.group({
      reference:['',Validators.required],
      codePin:['',Validators.required],
      type:['',Validators.required],
      delai_de_validite:['',Validators.required],
      delai_de_desherence:['',Validators.required],
      date_demission:['',Validators.required],
      montant_transfert:['',Validators.required],
      motif:['',Validators.required],
      lieuDeService:['',Validators.required],
      lieuDeDemande:['',Validators.required],
      emetteur:['',Validators.required],
      beneficiaire:['',Validators.required],
      agent:['',Validators.required],


    })
  }

  ajouter(){
      const TransfertValue=this.TransfertForm?.value;
      this.Transfert.reference=TransfertValue['reference'];
      this.Transfert.codePin=TransfertValue['codePin'];
      this.Transfert.date_demission=TransfertValue['date_demission'];
      this.Transfert.delai_de_desherence=TransfertValue['delai_de_desherence'];
      this.Transfert.delai_de_validite=TransfertValue['delai_de_validite'];
      this.Transfert.motif=TransfertValue['motif'];
      this.Transfert.type=TransfertValue['type'];
      this.Transfert.montant_transfert=TransfertValue['montant_transfert'];
      this.Transfert.comission=TransfertValue['montant_transfert']*0.05
      this.Transfert.frais=TransfertValue['montant_transfert']*1.15
      this.Transfert.etat=EtatTransfert.à_servir;
      this.Transfert.montant_operation=TransfertValue['montant_transfert']*0.10;
      if( TransfertValue['agent']>=0){
        console.log("agent saisi")
        let index=TransfertValue['agent'];
        console.log(index);
          this.Transfert.agent=this.agents[index];
      }
      if( TransfertValue['beneficiaire']>=0){
        console.log(" beneficiaire saisi")
        let index=TransfertValue['beneficiaire'];
        console.log(index);
          this.Transfert.beneficiaire=this.beneficiaires[index];
      }
      if( TransfertValue['emetteur']>=0){
        console.log("emetteur saisi")
        let index=TransfertValue['emetteur'];
        console.log(index);
          this.Transfert.emetteur=this.emetteurs[index];
      }
      if( TransfertValue['lieuDeService']>=0){
        console.log("lieuDeService saisi")
        let index=TransfertValue['lieuDeService'];
        console.log(index);
          this.Transfert.lieuDeService=this.pointDeVentes[index];
      }
      if( TransfertValue['lieuDeDemande']>=0){
        console.log("lieuDeDemande saisi")
        let index=TransfertValue['lieuDeDemande'];
        console.log(index);
          this.Transfert.lieuDeDemande=this.pointDeVentes[index];
      }
      console.log(this.Transfert)
      this.clientService.addTransfert(this.Transfert).subscribe((d)=>{
        console.log("reponse"+d);
      })
      this.thoast.success("transfert Ajouté","Succes")
     
  }
}

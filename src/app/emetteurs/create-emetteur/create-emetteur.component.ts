import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';

import { CarteDeCredit } from 'src/app/model/CarteDeCredit.model';
import { Emetteur } from 'src/app/model/Emetteur.model';
import { Compte } from 'src/app/model/Compte.model';
import { Wallet } from 'src/app/model/Wallet.model';
import { ClientServiceService } from 'src/app/services/client-service.service';
import {ToastrService} from 'ngx-toastr'
import { PieceIdentite } from 'src/app/model/PieceIdentite.model';
import { Beneficiaire } from 'src/app/model/Beneficiare.model';
@Component({
  selector: 'app-create-emetteur',
  templateUrl: './create-emetteur.component.html',
  styleUrls: ['./create-emetteur.component.css']
})
export class CreateEmetteurComponent implements OnInit {
  emetteur:Emetteur=new Emetteur();
  emetteurForm!: FormGroup;
  idcomptes:Array<number>=[];
  nbrComptes:number=0;
  idCartes:Array<number>=[];
  nbrCartes:number=0;
  idBeneficiaires:Array<number>=[];
  nbrBeneficiaires:number=0;
  beneficiaires:any;
  constructor(private clientService:ClientServiceService,private formBuilder:FormBuilder,private thoast:ToastrService) {
    
   
   }

  ngOnInit(): void {
    let resp=this.clientService.getBeneficiaires();
    resp.subscribe((data)=>{
      console.log(data);
      this.beneficiaires=data;
    })
    this.initForm();

  }
  initForm(){
    this.emetteurForm=this.formBuilder.group({
      nom:['',[Validators.required,Validators.pattern("^([a-zA-Z]+\\s*[a-zA-Z]*)*$")]],
      prenom:['',[Validators.required,Validators.pattern("^([a-zA-Z]+\\s*[a-zA-Z]*)*$")]],
      telephone:['',[Validators.required]],
      sexe:['',Validators.required],
      profession:['',Validators.pattern("^([a-zA-Z]+\\s*[a-zA-Z]*)*$")],
      pays_d_adresse:['',Validators.pattern("^([a-zA-Z]+\\s*[a-zA-Z]*)*$")],
      adresse_legale:['',[Validators.required,Validators.pattern("^([a-zA-Z0-9]+\\s*[a-zA-Z0-9]*)*$")]],
      email:['',[Validators.required,Validators.email]],
      ville:['',Validators.pattern("^([a-zA-Z]+\\s*[a-zA-Z]*)*$")],
      typeClient:['',Validators.required],
      typePiece:'',
      numero:['',[Validators.maxLength(8),Validators.minLength(6),Validators.pattern("^[A-Z]{2,}[0-9]+$")]],
      date_de_naissance:'',
      pays:'',
      date_d_expiration:'',
      comptes:this.formBuilder.array([]),
      cartes:this.formBuilder.array([]),
      beneficiaires:this.formBuilder.array([]),

    })
  }

  ajouter(){
      const EmetteurValue=this.emetteurForm?.value;
      this.emetteur.nom=EmetteurValue['nom'];
      this.emetteur.prenom=EmetteurValue['prenom'];
      this.emetteur.telephone=EmetteurValue['telephone'];
      this.emetteur.sexe=EmetteurValue['sexe'];
      this.emetteur.profession=EmetteurValue['profession'];
      this.emetteur.pays_d_adresse=EmetteurValue['pays_d_adresse'];
      this.emetteur.adresselegale=EmetteurValue['adresse_legale'];
      this.emetteur.email=EmetteurValue['email'];
      this.emetteur.ville=EmetteurValue['ville'];
      this.emetteur.type=EmetteurValue['typeClient'];
      if( EmetteurValue['numero'].length>1){
        console.log("piece saisie")
        var p=new PieceIdentite();
        this.emetteur.piece_identite=p;
        this.emetteur.piece_identite.numero=EmetteurValue['numero'];
        this.emetteur.piece_identite.date_d_expiration=EmetteurValue['date_d_expiration'];
        this.emetteur.piece_identite.date_de_naissance=EmetteurValue['date_de_naissance'];
        this.emetteur.piece_identite.pays=EmetteurValue['pays'];
        this.emetteur.piece_identite.type_piece_identite=EmetteurValue['typePiece'];
      }
      if(this.nbrComptes>0){
        console.log("compte saisi")
        this.emetteur.comptes=[];
        const compteValue=this.emetteurForm.controls.comptes?.value;
        for(let compte of compteValue){
          var nvCompte =new Compte();
          nvCompte.montant=compte['montant'];
          nvCompte.date_ouverture=compte['date_ouverture'];
          nvCompte.type=compte['typeCompte'];
          this.emetteur.comptes.push(nvCompte);
        }
      }
      if(this.nbrCartes>0){
        console.log("wallet saisi")
        var w=new Wallet();
        this.emetteur.wallet=w;
        this.emetteur.wallet.cartes=[];
        const carteValue=this.emetteurForm.controls.cartes?.value;
        for(let carte of carteValue){
          var nvCarte =new CarteDeCredit();
          nvCarte.montant=carte['montant_carte'];
          nvCarte.date_expiration=carte['date_d_expiration_carte'];
          this.emetteur.wallet.cartes.push(nvCarte);
        }
      }
      if(this.nbrBeneficiaires>0){
        this.emetteur.beneficiaires=[];
        const beneficiaireValue=this.emetteurForm.controls.beneficiaires?.value;
        console.log(beneficiaireValue);
        for(let i=0;i<beneficiaireValue.length;i++){
          let index=beneficiaireValue[i]['idBeneficiaire'];
          console.log(index);
          this.emetteur.beneficiaires.push(this.beneficiaires[index]);
        }
        
      }
      console.log(this.emetteur);
      
      this.clientService.addEmetteur(this.emetteur).subscribe((d)=>{
        console.log("reponse"+d);
      })
      this.thoast.success("Emetteur Ajouté","Succes")
  }
  getComptes(){
    return this.emetteurForm.get('comptes') as FormArray
  }
  getCartes(){
    return this.emetteurForm.get('cartes') as FormArray
  }
  getBeneficiaires(){
    return this.emetteurForm.get('beneficiaires') as FormArray
  }
  AjouterCarte(){
    this.nbrCartes++;
    this.idCartes.push(this.nbrCartes);
    const cartes=this.emetteurForm.controls.cartes as FormArray;
    cartes.push(this.formBuilder.group({
      montant_carte:'',
      date_d_expiration_carte:'',

    }));
  
  }
  AjouterBeneficiaire(){
    this.nbrBeneficiaires++;
    this.idBeneficiaires.push(this.nbrBeneficiaires);
    const beneficiaires=this.emetteurForm.controls.beneficiaires as FormArray;
    beneficiaires.push(this.formBuilder.group({
      idBeneficiaire:'',
      

    }));
  
  }
  AjouterCompte(){
    this.nbrComptes++;
    this.idcomptes.push(this.nbrComptes);
    const comptes=this.emetteurForm.controls.comptes as FormArray;
    comptes.push(this.formBuilder.group({
      montant:'',
      date_ouverture:'',
      typeCompte:'',

    }));
  }
}


import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';

import { CarteDeCredit } from 'src/app/model/CarteDeCredit.model';
import { Agent } from 'src/app/model/Agent.model';
import { Compte } from 'src/app/model/Compte.model';
import { Wallet } from 'src/app/model/Wallet.model';
import { ClientServiceService } from 'src/app/services/client-service.service';
import {ToastrService} from 'ngx-toastr'
import { PieceIdentite } from 'src/app/model/PieceIdentite.model';
import { PointDeVente } from 'src/app/model/PointDeVente.model';
@Component({
  selector: 'app-create-agents',
  templateUrl: './create-agents.component.html',
  styleUrls: ['./create-agents.component.css']
})
export class CreateAgentsComponent implements OnInit {
  agent:Agent=new Agent();
  agentForm!: FormGroup;
  idcomptes:Array<number>=[];
  nbrComptes:number=0;
  idCartes:Array<number>=[];
  nbrCartes:number=0;
  
  constructor(private clientService:ClientServiceService,private formBuilder:FormBuilder,private thoast:ToastrService) {
    
    
   }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(){
    this.agentForm=this.formBuilder.group({
      nom:['',[Validators.required,Validators.pattern("^([a-zA-Z]+\\s*[a-zA-Z]*)*$")]],
      prenom:['',[Validators.required,Validators.pattern("^([a-zA-Z]+\\s*[a-zA-Z]*)*$")]],
      telephone:['',[Validators.required]],
      sexe:['',Validators.required],
      salary:[''],
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
      villePDV:'',
      numeroPDV:'',
      paysPDV:'',
      montantMaxPDV:'',
    })
  }

  ajouter(){
      const agentValue=this.agentForm?.value;
      this.agent.nom=agentValue['nom'];
      this.agent.prenom=agentValue['prenom'];
      this.agent.telephone=agentValue['telephone'];
      this.agent.sexe=agentValue['sexe'];
      this.agent.profession="Agent";
      this.agent.pays_d_adresse=agentValue['pays_d_adresse'];
      this.agent.adresselegale=agentValue['adresse_legale'];
      this.agent.email=agentValue['email'];
      this.agent.ville=agentValue['ville'];
      this.agent.type=agentValue['typeClient'];
      if(agentValue['numero'].length>1){
        console.log("piece saisie")
        var p=new PieceIdentite();
        this.agent.piece_identite=p;
        this.agent.piece_identite.numero=agentValue['numero'];
        this.agent.piece_identite.date_d_expiration=agentValue['date_d_expiration'];
        this.agent.piece_identite.date_de_naissance=agentValue['date_de_naissance'];
        this.agent.piece_identite.pays=agentValue['pays'];
        this.agent.piece_identite.type_piece_identite=agentValue['typePiece'];
      }
      if(this.nbrComptes>0){
        console.log("compte ajoute")
        this.agent.comptes=[];
        const compteValue=this.agentForm.controls.comptes?.value;
        for(let compte of compteValue){
          var nvCompte =new Compte();
          nvCompte.montant=compte['montant'];
          nvCompte.date_ouverture=compte['date_ouverture'];
          nvCompte.type=compte['typeCompte'];
          this.agent.comptes.push(nvCompte);
        }
      }
      if(this.nbrCartes>0){
        console.log("wallet ajoute")
        var w=new Wallet();
        this.agent.wallet=w;
        this.agent.wallet.cartes=[];
        const carteValue=this.agentForm.controls.cartes?.value;
        for(let carte of carteValue){
          var nvCarte =new CarteDeCredit();
          nvCarte.montant=carte['montant_carte'];
          nvCarte.date_expiration=carte['date_d_expiration_carte'];
          this.agent.wallet.cartes.push(nvCarte);
        }
      }
      if(agentValue['numeroPDV']>1){
        console.log("pdv saisi")
        var pdv=new PointDeVente();
        this.agent.pointdevente=pdv;
        this.agent.pointdevente.montant_maximal=agentValue['montantPDV'];
        this.agent.pointdevente.pays=agentValue['paysPDV'];
        this.agent.pointdevente.ville=agentValue['villePDV'];
        this.agent.pointdevente.numero_de_ville=agentValue['numeroPDV'];

        
      }
      console.log(this.agent);
      this.clientService.addAgent(this.agent).subscribe((d)=>{
        console.log("rerponse"+d);
      })
      this.thoast.success("agent Ajouté","Succes")
  }
  getComptes(){
    return this.agentForm.get('comptes') as FormArray
  }
  getCartes(){
    return this.agentForm.get('cartes') as FormArray
  }
  AjouterCarte(){
    this.nbrCartes++;
    this.idCartes.push(this.nbrCartes);
    const cartes=this.agentForm.controls.cartes as FormArray;
    cartes.push(this.formBuilder.group({
      montant_carte:'',
      date_d_expiration_carte:'',

    }));
  
  }
  AjouterCompte(){
    this.nbrComptes++;
    this.idcomptes.push(this.nbrComptes);
    const comptes=this.agentForm.controls.comptes as FormArray;
    comptes.push(this.formBuilder.group({
      montant:'',
      date_ouverture:'',
      typeCompte:'',

    }));
  }
}

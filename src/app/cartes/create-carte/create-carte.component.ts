import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';

import { CarteDeCredit } from 'src/app/model/CarteDeCredit.model';
import { Compte } from 'src/app/model/Compte.model';
import { Wallet } from 'src/app/model/Wallet.model';
import { ClientServiceService } from 'src/app/services/client-service.service';
import {ToastrService} from 'ngx-toastr'
import { PieceIdentite } from 'src/app/model/PieceIdentite.model';
import { Beneficiaire } from 'src/app/model/Beneficiare.model';
@Component({
  selector: 'app-create-carte',
  templateUrl: './create-carte.component.html',
  styleUrls: ['./create-carte.component.css']
})
export class CreateCarteComponent implements OnInit {
  carteDeCredit:CarteDeCredit=new CarteDeCredit();
  carteDeCreditForm!: FormGroup;
  wallets:any;
  constructor(private clientService:ClientServiceService,private formBuilder:FormBuilder,private thoast:ToastrService) {
    
   
   }

  ngOnInit(): void {
    let resp=this.clientService.getWallets();
    resp.subscribe((data)=>{
      console.log(data);
      this.wallets=data;
    })
    this.initForm();

  }
  initForm(){
    this.carteDeCreditForm=this.formBuilder.group({
      montant:['',Validators.required],
      date_expiration:['',Validators.required],
      wallet:'',

    })
  }

  ajouter(){
      const CarteDeCreditValue=this.carteDeCreditForm?.value;
      this.carteDeCredit.montant=CarteDeCreditValue['montant'];
      this.carteDeCredit.date_expiration=CarteDeCreditValue['date_expiration'];
      if( CarteDeCreditValue['wallet']>0){
        console.log("wallet saisi")
        let index=CarteDeCreditValue['wallet'];
        console.log(index);
          this.carteDeCredit.wallet=this.wallets[index];
      }
      console.log(this.carteDeCredit);
      this.clientService.addCarte(this.carteDeCredit).subscribe((d)=>{
        console.log("reponse"+d);
      })
      this.thoast.success("carte Ajoutée","Succes")
     
  }
}


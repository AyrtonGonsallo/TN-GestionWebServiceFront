import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';


import { ClientServiceService } from 'src/app/services/client-service.service';
import {ToastrService} from 'ngx-toastr'
import { GichetABillet } from 'src/app/model/GichetABillet.model';
@Component({
  selector: 'app-create-gichet',
  templateUrl: './create-gichet.component.html',
  styleUrls: ['./create-gichet.component.css']
})
export class CreateGichetComponent implements OnInit {

  gichetABillet:GichetABillet=new GichetABillet();
  gichetABilletForm!: FormGroup;
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
    this.gichetABilletForm=this.formBuilder.group({
      montant_disponible:['',Validators.required],
      ville:['',Validators.required],
      pays:'',
      numero_de_ville:'',

    })
  }

  ajouter(){
      const GichetABilletValue=this.gichetABilletForm?.value;
      this.gichetABillet.montant_disponible=GichetABilletValue['montant_disponible'];
      this.gichetABillet.pays=GichetABilletValue['pays'];
      this.gichetABillet.numero_de_ville=GichetABilletValue['numero_de_ville'];
      this.gichetABillet.ville=GichetABilletValue['ville'];
      console.log(this.gichetABillet);
      this.clientService.addGichet(this.gichetABillet).subscribe((d)=>{
        console.log("reponse"+d);
      })
      this.thoast.success("gichet Ajoutée","Succes")
     
  }
}


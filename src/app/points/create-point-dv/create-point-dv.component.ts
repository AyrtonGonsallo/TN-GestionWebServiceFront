import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';


import { ClientServiceService } from 'src/app/services/client-service.service';
import {ToastrService} from 'ngx-toastr'
import { PointDeVente } from 'src/app/model/PointDeVente.model';
@Component({
  selector: 'app-create-point-dv',
  templateUrl: './create-point-dv.component.html',
  styleUrls: ['./create-point-dv.component.css']
})
export class CreatePointDVComponent implements OnInit {
  pointDeVente:PointDeVente=new PointDeVente();
  pointDeVenteForm!: FormGroup;
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
    this.pointDeVenteForm=this.formBuilder.group({
      montant_maximal:['',Validators.required],
      ville:['',Validators.required],
      pays:'',
      numero_de_ville:'',

    })
  }

  ajouter(){
      const PointDeVenteValue=this.pointDeVenteForm?.value;
      this.pointDeVente.montant_maximal=PointDeVenteValue['montant_maximal'];
      this.pointDeVente.pays=PointDeVenteValue['pays'];
      this.pointDeVente.numero_de_ville=PointDeVenteValue['numero_de_ville'];
      this.pointDeVente.ville=PointDeVenteValue['ville'];
      console.log(this.pointDeVente);
      this.clientService.addPoint(this.pointDeVente).subscribe((d)=>{
        console.log("reponse"+d);
      })
      this.thoast.success("point de vente Ajouté","Succes")
     
  }
}


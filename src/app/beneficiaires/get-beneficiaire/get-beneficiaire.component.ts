import { Component, OnInit } from '@angular/core';
import { ClientServiceService } from 'src/app/services/client-service.service';

@Component({
  selector: 'app-get-beneficiaire',
  templateUrl: './get-beneficiaire.component.html',
  styleUrls: ['./get-beneficiaire.component.css']
})
export class GetBeneficiaireComponent implements OnInit {

  beneficiaires:any;

  constructor(private clientService:ClientServiceService) { }

  ngOnInit(): void {
    let resp=this.clientService.getBeneficiaires();
    resp.subscribe((data)=>{
      console.log(data);
      this.beneficiaires=data;
    })
  }

}

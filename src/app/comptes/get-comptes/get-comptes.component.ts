import { Component, OnInit } from '@angular/core';
import { ClientServiceService } from 'src/app/services/client-service.service';

@Component({
  selector: 'app-get-comptes',
  templateUrl: './get-comptes.component.html',
  styleUrls: ['./get-comptes.component.css']
})
export class GetComptesComponent implements OnInit {

  comptes:any;

  constructor(private clientService:ClientServiceService) { }

  ngOnInit(): void {
    let resp=this.clientService.getComptes();
    resp.subscribe((data)=>{
      console.log(data);
      this.comptes=data;
    })
  }

}


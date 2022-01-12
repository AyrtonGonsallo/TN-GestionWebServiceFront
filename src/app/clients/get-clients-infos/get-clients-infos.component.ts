import { Component, OnInit } from '@angular/core';
import { ClientServiceService } from 'src/app/services/client-service.service';


@Component({
  selector: 'app-get-clients-infos',
  templateUrl: './get-clients-infos.component.html',
  styleUrls: ['./get-clients-infos.component.css']
})
export class GetClientsInfosComponent implements OnInit {
  clients:any;

  constructor(private clientService:ClientServiceService) { }

  ngOnInit(): void {
    let resp=this.clientService.getClients();
    resp.subscribe((data)=>{
      console.log(data);
      this.clients=data;
    })
  }
  
}
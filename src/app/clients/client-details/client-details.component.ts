import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/model/Client.model';
import { ClientServiceService } from 'src/app/services/client-service.service';
@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
  client:any;
  id:number=0;
  constructor(private clientService:ClientServiceService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=Number(this.route.snapshot.paramMap.get('id'));
    let resp=this.clientService.getClient(this.id);
    resp.subscribe((data)=>{
      console.log(data);
      this.client=data;
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { ClientServiceService } from 'src/app/services/client-service.service';

@Component({
  selector: 'app-get-agents',
  templateUrl: './get-agents.component.html',
  styleUrls: ['./get-agents.component.css']
})
export class GetAgentsComponent implements OnInit {

  agents:any;

  constructor(private clientService:ClientServiceService) { }

  ngOnInit(): void {
    let resp=this.clientService.getAgents();
    resp.subscribe((data)=>{
      console.log(data);
      this.agents=data;
    })
  }

}
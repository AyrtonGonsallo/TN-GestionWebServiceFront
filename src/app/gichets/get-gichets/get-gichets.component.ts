import { Component, OnInit } from '@angular/core';
import { ClientServiceService } from 'src/app/services/client-service.service';

@Component({
  selector: 'app-get-gichets',
  templateUrl: './get-gichets.component.html',
  styleUrls: ['./get-gichets.component.css']
})
export class GetGichetsComponent implements OnInit {

  gichets:any;

  constructor(private clientService:ClientServiceService) { }

  ngOnInit(): void {
    let resp=this.clientService.getGichetsABillets();
    resp.subscribe((data)=>{
      console.log(data);
      this.gichets=data;
    })
  }

}


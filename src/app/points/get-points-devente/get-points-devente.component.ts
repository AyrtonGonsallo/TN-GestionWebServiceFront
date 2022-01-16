import { Component, OnInit } from '@angular/core';
import { ClientServiceService } from 'src/app/services/client-service.service';

@Component({
  selector: 'app-get-points-devente',
  templateUrl: './get-points-devente.component.html',
  styleUrls: ['./get-points-devente.component.css']
})
export class GetPointsDeventeComponent implements OnInit {

  points:any;

  constructor(private clientService:ClientServiceService) { }

  ngOnInit(): void {
    let resp=this.clientService.getPointDeVentes();
    resp.subscribe((data)=>{
      console.log(data);
      this.points=data;
    })
  }

}

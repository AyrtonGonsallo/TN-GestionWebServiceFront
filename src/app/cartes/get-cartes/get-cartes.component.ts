import { Component, OnInit } from '@angular/core';
import { ClientServiceService } from 'src/app/services/client-service.service';

@Component({
  selector: 'app-get-cartes',
  templateUrl: './get-cartes.component.html',
  styleUrls: ['./get-cartes.component.css']
})
export class GetCartesComponent implements OnInit {
  cartes:any;

  constructor(private clientService:ClientServiceService) { }

  ngOnInit(): void {
    let resp=this.clientService.getCartes();
    resp.subscribe((data)=>{
      console.log(data);
      this.cartes=data;
    })
  }

}

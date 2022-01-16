import { Component, OnInit } from '@angular/core';
import { ClientServiceService } from 'src/app/services/client-service.service';

@Component({
  selector: 'app-get-pieces-identites',
  templateUrl: './get-pieces-identites.component.html',
  styleUrls: ['./get-pieces-identites.component.css']
})
export class GetPiecesIdentitesComponent implements OnInit {

  pieces:any;

  constructor(private clientService:ClientServiceService) { }

  ngOnInit(): void {
    let resp=this.clientService.getPiecesIdentite();
    resp.subscribe((data)=>{
      console.log(data);
      this.pieces=data;
    })
  }

}
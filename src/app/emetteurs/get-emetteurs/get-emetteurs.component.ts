import { Component, OnInit } from '@angular/core';
import { ClientServiceService } from 'src/app/services/client-service.service';

@Component({
  selector: 'app-get-emetteurs',
  templateUrl: './get-emetteurs.component.html',
  styleUrls: ['./get-emetteurs.component.css']
})
export class GetEmetteursComponent implements OnInit {

  emetteurs:any;

  constructor(private clientService:ClientServiceService) { }

  ngOnInit(): void {
    let resp=this.clientService.getEmetteurs();
    resp.subscribe((data)=>{
      console.log(data);
      this.emetteurs=data;
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { ClientServiceService } from 'src/app/services/client-service.service';

@Component({
  selector: 'app-get-transferts',
  templateUrl: './get-transferts.component.html',
  styleUrls: ['./get-transferts.component.css']
})
export class GetTransfertsComponent implements OnInit {
  transferts:any;

  constructor(private clientService:ClientServiceService) { }

  ngOnInit(): void {
    let resp=this.clientService.getTransferts();
    resp.subscribe((data)=>{
      console.log(data);
      this.transferts=data;
    })
  }

}

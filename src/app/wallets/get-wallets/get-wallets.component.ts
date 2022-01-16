import { Component, OnInit } from '@angular/core';
import { ClientServiceService } from 'src/app/services/client-service.service';

@Component({
  selector: 'app-get-wallets',
  templateUrl: './get-wallets.component.html',
  styleUrls: ['./get-wallets.component.css']
})
export class GetWalletsComponent implements OnInit {

  wallets:any;

  constructor(private clientService:ClientServiceService) { }

  ngOnInit(): void {
    let resp=this.clientService.getWallets();
    resp.subscribe((data)=>{
      console.log(data);
      this.wallets=data;
    })
  }

}

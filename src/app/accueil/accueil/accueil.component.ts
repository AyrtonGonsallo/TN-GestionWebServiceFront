import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
 
  id:number=1;
  page:string|null="Client";
  constructor(private route:ActivatedRoute) { }
  
  ngOnInit(): void {
    

  }
  go(newpage:string|null ){
    this.page=this.route.snapshot.paramMap.get('page');
    if( this.page==null){
        this.page="Client";
    }
    this.page=newpage;
  }
}

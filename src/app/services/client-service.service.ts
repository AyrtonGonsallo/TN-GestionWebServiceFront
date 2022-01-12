import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '../model/Api.response';


@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  constructor(private http:HttpClient) { }

  public getClients(){
    return this.http.get("http://localhost:1945/get_clients");
  }
  public getClient(id:number){
    return this.http.get("http://localhost:1945/get_client/"+id);
  }

}

import { Client } from "./Client.model";
import { Transfert } from "./Transfert.model";

export class Beneficiaire extends Client{
    nbr_transfert_recus:number=0;
    transfert:Transfert=new Transfert;

}
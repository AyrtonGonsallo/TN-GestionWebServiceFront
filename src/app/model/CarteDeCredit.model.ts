import { Wallet } from "./Wallet.model";

export class CarteDeCredit{
    id:number=0;
    wallet:Wallet=new Wallet;
    montant:number=0;
    date_expiration:Date=new Date;
}
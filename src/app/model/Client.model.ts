import {PieceIdentite} from "./PieceIdentite.model";
import{Compte} from "./Compte.model";
import{TypeClient} from "./enums/TypeClient.model"
import{Sexe} from "./enums/Sexe.model"
import { Wallet } from "./Wallet.model";
export class Client{
    //idClient:number=null;
    nom:String="";
    prenom:String="";
    telephone:String="";
    piece_identite:PieceIdentite=new PieceIdentite;
    comptes: Array<Compte>=[];
    type:TypeClient=TypeClient.partenaire;
    sexe:Sexe=Sexe.Mme;
    profession:String="";
    pays_d_adresse:String="";
    adresselegale:String="";
    email:String="";
    wallet:Wallet=new Wallet;
    ville:String="";
    

}


/*
@Id @GeneratedValue
	//@JsonProperty(access=Access.READ_ONLY)
	private long idClient;
	private String nom;
	private String ;
	private String ;
	@OneToOne
    @JoinColumn(name = "piece_id", referencedColumnName = "id")
	@JsonIgnoreProperties({"client"})
	private PieceIdentite piece_identite;
	@OneToMany( targetEntity=Compte.class, mappedBy="client")
	@JsonIgnoreProperties({"client"})
	private List<Compte> comptes;
	@Enumerated(EnumType.STRING)
	private TypeClient type;
	@Enumerated(EnumType.STRING)
	private Sexe sexe;
	private String profession;
	private String pays_d_adresse;
	private String adresselegale;
	private String email;
	@OneToOne
	@JoinColumn(name = "wallet_id", referencedColumnName = "id")
	@JsonIgnoreProperties({"client"})
	private Wallet wallet;
	private String ville;

*/
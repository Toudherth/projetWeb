import { Component, OnInit } from '@angular/core';
import { CovoiturageService } from '../covoiturages.service';
import { ActivatedRoute, Params } from '@angular/router';
import { AuthentificationService } from '../service/authentification.service';
import { TransportService } from '../service/transport.service ';
import { FormsModule } from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-covoiturages',
  templateUrl: './covoiturages.component.html',
  styleUrls: ['./covoiturages.component.css']
})
export class CovoituragesComponent  implements OnInit{

  villedepart: string="";
  villearrivee: string = "";
  datejour: string = "";
  prixmax: number = 0;

  // recuperation de user
  
  public user: Observable<string>;


  public covoiturages : any[] = new Array();

  constructor(private authService: AuthentificationService, private route: ActivatedRoute, private covoituragesService : CovoiturageService,
     private transportService: TransportService){
    this.user = this.authService.getUser();
  }

  ngOnInit(){ 
    
    console.log("je suis user  :"+this.user );
    // ce que je dois faire quand le composant est initialise 
           // pour recuperer tout les produits 
          this.covoituragesService.getCovoiturages().subscribe(covoiturages=> this.covoiturages=
            covoiturages);
  }

  
public rechercherCovoiturageParvilleArrivee(villedepart : string,villearrivee: string, datejour: string, prixmax: number): void {
    console.log("Invocation du composant produits avec "+villedepart);
    if ( villedepart !== undefined || villearrivee !== undefined || datejour !== undefined || prixmax !==undefined) {
        console.log("/covoiturage/"+ villedepart);
        this.covoituragesService.rechercher(villedepart, villearrivee, datejour, prixmax).subscribe(covoiturages => {
            this.covoiturages = covoiturages;
  });                     
    }
    else {
            // pour recuperer tout les produits 
      this.covoituragesService.getCovoiturages().subscribe(covoiturages=> this.covoiturages=
        covoiturages);
 
}

}
 
public addTransport(numeroImmatriculation: string) {
 
  const transport = {
    numeroImmatriculation: numeroImmatriculation,
    email: this.user
  };

  this.transportService.addTransport(transport)
    .subscribe(
      (response) => {
        console.log('Transport ajouté avec succès', response);
      },
      (error) => {
        console.error('Erreur lors de l\'ajout du transport', error);
      }
    );
}





}



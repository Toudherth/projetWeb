import { Component } from '@angular/core';
import { AddcovoiturageService } from '../service/addcovoiturage.service';
import { AuthentificationService } from '../service/authentification.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-addcovoiturages',
  templateUrl: './addcovoiturages.component.html',
  styleUrls: ['./addcovoiturages.component.css']
})
export class AddcovoituragesComponent {

  covoiturage: any ={};

  message: string | null = null;


  public user: Observable<string>;

  constructor(private addcovoiturageservice: AddcovoiturageService, private authService :AuthentificationService){
    this.user = this.authService.getUser(); 
    this.user.subscribe((user) => {
      const email = user ; //.email; // Récupération de l'email de l'utilisateur
      this.covoiturage.email = email; // Ajout de l'email à l'objet covoiturage
    //console.log("je suis dans la console ****************************"+email);
    });
  }


  

  createInternaute(){
    this.addcovoiturageservice.createcovoiturage(this.covoiturage).subscribe(
    (response) =>{
      console.log('Covoiturage crée avec succés'+this.user, response);
    },
    (error) =>{
      console.error('Erreur lors d\'ajout d\'un  covoiturage',error);
    }
    );
  }  


}

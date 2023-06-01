import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../service/authentification.service';



@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {

  public utilisateur = {"email":"", "password":""};
  public message: string = "";


  constructor(private authService: AuthentificationService, private router: Router) { }

  onSubmit() {
    this.authService.verificationconnexion(this.utilisateur).subscribe(Response =>{
      this.message= Response['message'];
      if(Response['resultat']){
        this.authService.connect(this.utilisateur.email);
        this.router.navigate(['/covoiturages']);
      } else {
        console.log("Authentification échouée : " + this.message);
      }
     // setTimeout(() => { this.router.navigate(['covoiturages']);}, 1000);
       // Authentification échouée : afficher un message d'erreur
      // 
    });
  }


}

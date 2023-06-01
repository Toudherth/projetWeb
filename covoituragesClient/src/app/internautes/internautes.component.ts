import { Component } from '@angular/core';
import { UserService } from '../service/user.service';


@Component({
  selector: 'app-internautes',
  templateUrl: './internautes.component.html',
  styleUrls: ['./internautes.component.css']
})
export class InternautesComponent {

  internaute: any ={};

  constructor(private userservice: UserService){}


  

  createUser(){
    this.userservice.createUser(this.internaute).subscribe(
    (response) =>{
      console.log('Utilisateur crée avec succés', response);
    },
    (error) =>{
      console.error('Erreur lors de  la creation de l\'utilisateur',error);
    }
    );
  }  

}

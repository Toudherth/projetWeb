import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../service/authentification.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{


  public user: Observable<string>;
  constructor(private authService: AuthentificationService,
    private router: Router) {
this.user = this.authService.getUser(); }

ngOnInit() {
  this.router.navigate(['/covoiturages']);
  console.log("je suis user  :"+this.user );
}

deconnexion() {
  this.authService.disconnect();
  this.router.navigate(['/covoiturages']);
}

}

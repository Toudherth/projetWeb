import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';



@Injectable({
    providedIn: 'root'
})

export class CovoiturageService{

    private urlBase: string= 'http://localhost:8888/';

    constructor(private http: HttpClient) {}

    getCovoiturages(): Observable<any> {
      console.log('je suis dans le covoiturage');
        return this.http.get('http://localhost:8888/covoiturages');  // cette methode elle renvoie un observable 
    }

    // Recherche  par nom 
    getCovoituragesParVilledepart(villedepart:any) : Observable<any>{
        return this.http.get('http://localhost:8888/covoiturage/'+villedepart);
    }


    rechercher(villedepart: string, villearrivee: string, datejour: string, prixmax: number): Observable<any> {
     
        return this.http.get('http://localhost:8888/covoiturage/'+villedepart+'/'+villearrivee+'/'+datejour+'/'+prixmax);
      }
}

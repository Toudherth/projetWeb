import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, BehaviorSubject, retry } from 'rxjs';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    "Access-Control-Allow-Methods": "GET,POST",	  
    "Access-Control-Allow-Headers": "Content-type",  
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  public user:Subject<string> = new BehaviorSubject<string>("");  // pour emettre des observateur et des variables pour recevoir des valeur
  public baseURL: string = "http://localhost:8888/";
  
  

  constructor(private http: HttpClient) { }

  getUser(){
    return this.user;
  }

  connect(data : string){
    return this.user.next(data);
  }

  disconnect(){
    return this.user.next("");
  }

  verificationconnexion(identifiants:any): Observable<any>{
    return this.http.post("http://localhost:8888/internaute/connexion", JSON.stringify(identifiants), httpOptions);
  }


}

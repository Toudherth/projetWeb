import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AddcovoiturageService {
  

    public baseURL: string = "http://localhost:8888/";

    constructor(private http: HttpClient){}

    createcovoiturage(covoiturage :any){
        return this.http.post(this.baseURL+"covoiturages/add", covoiturage);
    }

}
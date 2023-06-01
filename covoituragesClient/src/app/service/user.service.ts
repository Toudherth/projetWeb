import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';





@Injectable({
  providedIn: 'root'
})
export class UserService {

    public baseURL: string = "http://localhost:8888/";

    constructor(private http: HttpClient){}

    createUser(user :any){
        return this.http.post(this.baseURL+"internautes/add", user);
    }

}
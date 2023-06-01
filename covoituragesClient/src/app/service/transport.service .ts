import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransportService {
  private apiUrl = "http://localhost:8888/";

  constructor(private http: HttpClient) { }

  addTransport(transport: any) {
    return this.http.post(`${this.apiUrl}/covoiturages/addtrasport`, transport);
  }
  
}

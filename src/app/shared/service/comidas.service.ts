import { Comidas } from './../model/comidas.model';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComidasService {

  apiUrl = 'http://localhost:5000/menu';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  };

  constructor(
    private httpClient : HttpClient
  ) { }

  public getComidas() : Observable<Comidas>{
    return  this.httpClient.get<Comidas>(this.apiUrl);
  }

  public getComida(id:string){
    return this.httpClient.get<Comidas>(this.apiUrl + '/' + id)
  }

}

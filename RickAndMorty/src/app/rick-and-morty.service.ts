import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  private apiUrl ='https://rickandmortyapi.com/api';


  constructor(private http: HttpClient) { }

  getCharacter():Observable<any>{
    return this.http.get(`${this.apiUrl}/character`)

  }

  getCharacterByid(id :number):Observable<any>{
    return this.http.get(`${this.apiUrl}/character/${id}`)

  }
}


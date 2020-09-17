import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getPokemonsByName(name: string){
      return this.http.get<any>(`${this.baseUrl}/pokemon/${name}`);
  }
}

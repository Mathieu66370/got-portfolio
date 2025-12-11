import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Continents } from '../models/ContinentModel';

@Injectable({
  providedIn: 'root',
})
export class ContinentService {
  private continentsUrl: string ='https://thronesapi.com/api/v2/Continents';
  private HttpClient = inject(HttpClient);

  getContinents() : Observable<Continents[]>{
    return this.HttpClient.get<Continents[]>(this.continentsUrl); 
}
}

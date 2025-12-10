import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Characters } from '../models/characters.model';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private charactersUrl: string ='https://thronesapi.com/api/v2/Characters';
  private HttpClient = inject(HttpClient);

  getCharacters() : Observable<Characters[]>{
    return this.HttpClient.get<Characters[]>(this.charactersUrl); 
}
}


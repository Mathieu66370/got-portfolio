import {ChangeDetectorRef,Component, inject,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {CharactersList} from './components/characters-list/characters-list';
import {ContinentList} from './components/continent-list/continents-list';
import { CharacterService } from './shared/services/character';
import { ContinentService } from './shared/services/continent';
import { Characters } from './shared/models/characters.model';
import { Continents } from './shared/models/ContinentModel';
 
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CharactersList, ContinentList, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit{

    private charactersService = inject(CharacterService);
    private continentsService = inject(ContinentService);
    private cdr = inject(ChangeDetectorRef);

    protected charactersToGiveToChild!: Characters[];
    protected continentsToGiveToChild!: Continents[];
    protected searchText: string = '';
    protected filteredCharacters: Characters[] = [];
    protected filteredContinents: Continents[] = [];

    ngOnInit(): void {
      this.charactersService.getCharacters().subscribe((charactersFromApi: Characters[]) => {
        this.charactersToGiveToChild = charactersFromApi;
        this.filteredCharacters = charactersFromApi;
        this.cdr.detectChanges();
      });
      
      this.continentsService.getContinents().subscribe((continentsFromApi: Continents[]) => {
        this.continentsToGiveToChild = continentsFromApi;
        this.filteredContinents = continentsFromApi;
        this.cdr.detectChanges();
      });
    }

    protected filterResults(): void {
      const search = this.searchText.toLowerCase();
      this.filteredCharacters = this.charactersToGiveToChild.filter(char => 
        char.fullName?.toLowerCase().includes(search) ||
        char.firstName.toLowerCase().includes(search) ||
        char.lastName.toLowerCase().includes(search)
      );
      this.filteredContinents = this.continentsToGiveToChild.filter(cont => 
        cont.name?.toLowerCase().includes(search)
      );
    }
}
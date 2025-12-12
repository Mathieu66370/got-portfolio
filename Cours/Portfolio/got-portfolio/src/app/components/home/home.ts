import {ChangeDetectorRef, Component, inject, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {NgClass} from '@angular/common';
import {CharactersList} from '../characters-list/characters-list';
import {ContinentList} from '../continent-list/continents-list';
import {CharacterService} from '../../shared/services/character';
import {ContinentService} from '../../shared/services/continent';
import {Characters} from '../../shared/models/characters.model';
import {Continents} from '../../shared/models/ContinentModel';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, CharactersList, ContinentList, FormsModule, NgClass],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  standalone: true
})
export class Home implements OnInit {


  private charactersService = inject(CharacterService);
  private continentsService = inject(ContinentService);
  private cdr = inject(ChangeDetectorRef);

  protected charactersToGiveToChild!: Characters[];
  protected continentsToGiveToChild!: Continents[];
  protected searchText: string = '';
  protected filteredCharacters: Characters[] = [];
  protected filteredContinents: Continents[] = [];

  protected isSelected: boolean = false;
  protected isHighlighted: boolean = false;
  protected isBold: boolean = false;
  protected isWarning: boolean = true;
  protected isPremium: boolean = false;
  protected isActive: boolean = false;
  protected isSpecial: boolean = false;
  protected isPanelOpen: boolean = false;

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

  protected toggleSelection(): void { this.isSelected = !this.isSelected; }
  protected toggleHighlight(): void { this.isHighlighted = !this.isHighlighted; }
  protected toggleBold(): void { this.isBold = !this.isBold; }
  protected toggleWarning(): void { this.isWarning = !this.isWarning; }
  protected togglePremium(): void { this.isPremium = !this.isPremium; }
  protected toggleActive(): void { this.isActive = !this.isActive; }
  protected toggleSpecial(): void { this.isSpecial = !this.isSpecial; }
  protected togglePanel(): void { this.isPanelOpen = !this.isPanelOpen; }
}
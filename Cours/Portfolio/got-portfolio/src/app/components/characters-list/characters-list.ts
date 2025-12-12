import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Characters} from '../../shared/models/characters.model';
import { FamilyEmojiPipe } from '../../pipes/family-emoji.pipe'; 

@Component({
  selector: 'app-characters-list',
  imports: [CommonModule, FamilyEmojiPipe], 
  templateUrl: './characters-list.html',
  styleUrl: './characters-list.scss',
})
export class CharactersList {
  @Input() public charactersFromParent!: Characters[];
}
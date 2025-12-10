import { Component } from '@angular/core';
import {Characters} from '../../shared/models/characters.model';


@Component({
  selector: 'app-characters-list',
  imports: [],
  templateUrl: './characters-list.html',
  styleUrl: './characters-list.scss',
})
export class CharactersList {
  protected newCharacter: Characters = {
    id: 1,
    firstName: 'Mathieu',
    lastName: 'TB',
    fullName: 'Mathieu TB',
    title: 'Roi',
    family: '',
    image: '',
    imageUrl: ''
  };


protected charactersFromApi: Characters[] = [
  {
    id: 1,
    firstName: 'Mathieu',
    lastName: 'TB',
    fullName: 'Mathieu TB',
    title: 'Roi',
    family: '',
    image: '',
    imageUrl: ''
  },
    {
    id: 2,
    firstName: 'Mathieu',
    lastName: 'TB',
    fullName: 'Mathieu TB',
    title: 'Roi',
    family: '',
    image: '',
    imageUrl: ''
  },
    {
    id: 3,
    firstName: 'Mathieu',
    lastName: 'TB',
    fullName: 'Mathieu TB',
    title: 'Roi',
    family: '',
    image: '',
    imageUrl: ''
  }];
}
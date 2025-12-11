import { Component, Input } from '@angular/core';
import {Continents} from '../../shared/models/ContinentModel';


@Component({
  selector: 'app-continents-list',
  imports: [],
  templateUrl: './continents-list.html',
  styleUrl: './continents-list.scss',
})
export class ContinentList {
  @Input() public continentsFromParent!: Continents[];
}
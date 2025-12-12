import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'familyEmoji',
  standalone: true
})
export class FamilyEmojiPipe implements PipeTransform {

  transform(family: string | undefined): string {
    if (!family) {
      return '⚔️';
    }

    const familyLower = family.toLowerCase();

    // Mapping des familles avec leurs emojis
    if (familyLower.includes('stark')) {
      return '🐺'; // Loup pour les Stark
    } else if (familyLower.includes('lannister')) {
      return '🦁'; // Lion pour les Lannister
    } else if (familyLower.includes('targaryen')) {
      return '🐉'; // Dragon pour les Targaryen
    } else if (familyLower.includes('baratheon')) {
      return '🦌'; // Cerf pour les Baratheon
    } else if (familyLower.includes('greyjoy')) {
      return '🐙'; // Poulpe pour les Greyjoy
    } else if (familyLower.includes('tyrell')) {
      return '🌹'; // Rose pour les Tyrell
    } else if (familyLower.includes('martell')) {
      return '☀️'; // Soleil pour les Martell
    } else if (familyLower.includes('tully')) {
      return '🐟'; // Poisson pour les Tully
    } else if (familyLower.includes('arryn')) {
      return '🦅'; // Aigle pour les Arryn
    } else {
      return '⚔️'; // Par défaut
    }
  }

}
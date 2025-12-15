import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './countries.html',
  styleUrl: './countries.scss'
})
export class Countries implements OnInit {
  showCountryChips = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Vérifier l'URL au chargement
    this.checkUrl(this.router.url);

    // Écouter les changements de route
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.checkUrl(event.urlAfterRedirects);
    });
  }

  private checkUrl(url: string): void {
    // Afficher les chips seulement si on est exactement sur /countries
    this.showCountryChips = url === '/countries';
  }
}
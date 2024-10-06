import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'regras',
    loadComponent: () => import('./pages/rules/rules.component').then(m => m.RulesComponent)
  },
  {
    path: 'adote',
    loadComponent: () => import('./pages/adopt/adopt.component').then(m => m.AdoptComponent)
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

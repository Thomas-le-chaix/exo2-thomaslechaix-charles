import { Routes } from '@angular/router';
import { Accueil } from './pages/accueil/accueil';
import { Liste } from './pages/liste/liste';
import { Gestion } from './pages/gestion/gestion';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { path: 'accueil', component: Accueil },
  { path: 'liste', component: Liste },
  { path: 'gestion', component: Gestion },
  { path: 'contact', component: Contact },

  // URL vide -> accueil
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },

  // Toute autre URL -> accueil (à laisser en dernier, sinon elle prend le pas sur les autres routes)
  { path: '**', redirectTo: 'accueil' }
];
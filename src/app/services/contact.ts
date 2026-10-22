import { Injectable } from '@angular/core';

export interface ContactData {
  prenom: string;
  nom: string;
  age?: number;
  email?: string;
  commentaire: string;
}

// providedIn: 'root' -> une seule instance du service pour toute l'application.
// C'est ce qui permet à Contact d'écrire et à Gestion de relire la même donnée.
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  // Un seul contact stocké : chaque nouvel envoi remplace le précédent
  private dernierContact: ContactData | null = null;

  enregistrerContact(data: ContactData): void {
    this.dernierContact = { ...data };
  }

  getDernierContact(): ContactData | null {
    return this.dernierContact;
  }
}
import { Injectable } from '@angular/core';

export interface ContactData {
  prenom: string;
  nom: string;
  age?: number;
  email?: string;
  commentaire: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private dernierContact: ContactData | null = null;

  enregistrerContact(data: ContactData): void {
    this.dernierContact = { ...data };
  }

  getDernierContact(): ContactData | null {
    return this.dernierContact;
  }
}
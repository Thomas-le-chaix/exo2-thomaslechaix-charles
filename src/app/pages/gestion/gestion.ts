import { Component, OnInit } from '@angular/core';
import { ContactService, ContactData } from '../../services/contact';

@Component({
  selector: 'app-gestion',
  imports: [],
  templateUrl: './gestion.html',
  styleUrl: './gestion.css'
})
export class Gestion implements OnInit {
  dernierContact: ContactData | null = null;

  constructor(private contactService: ContactService) {}

  // À l'ouverture de la page, on récupère le dernier formulaire envoyé
  ngOnInit(): void {
    this.dernierContact = this.contactService.getDernierContact();
  }
}
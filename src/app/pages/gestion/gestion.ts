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

  ngOnInit(): void {
    this.dernierContact = this.contactService.getDernierContact();
  }
}
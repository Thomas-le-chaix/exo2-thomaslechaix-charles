import { Component, OnInit } from '@angular/core';
import { ContactService, ContactData } from '../../services/contactservice';
import { NotFound } from '../../components/not-found/not-found';

@Component({
  selector: 'app-gestion',
  imports: [NotFound], 
  templateUrl: './gestion.html',
  styleUrl: './gestion.css'
})
export class Gestion implements OnInit {
  public dernierContact: ContactData | null = null;

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.dernierContact = this.contactService.getDernierContact();
  }
}
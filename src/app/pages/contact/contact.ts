import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../../services/contact';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact implements OnInit {
  contactForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      age: [null],
      hideEmail: [false],
      email: ['', [Validators.required, Validators.pattern(/.*@.*/)]],
      commentaire: ['', Validators.required]
    });

    this.contactForm.get('hideEmail')?.valueChanges.subscribe((cache: boolean) => {
      const emailCtrl = this.contactForm.get('email');
      if (cache) {
        emailCtrl?.clearValidators();
        emailCtrl?.reset();
      } else {
        emailCtrl?.setValidators([Validators.required, Validators.pattern(/.*@.*/)]);
      }
      emailCtrl?.updateValueAndValidity();
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.contactService.enregistrerContact(this.contactForm.value);
      alert('Le formulaire est valide');
      this.router.navigate(['/accueil']);
    }
  }
}
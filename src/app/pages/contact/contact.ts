import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../../services/contactservice';

const EMAIL_AVEC_AROBASE = /.*@.*/;

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact implements OnInit {
  private contactForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      age: [null, [Validators.min(0), Validators.max(120)]],
      hideEmail: [false],
      email: ['', [Validators.required, Validators.pattern(EMAIL_AVEC_AROBASE)]],
      commentaire: ['', Validators.required]
    });

    const email = this.contactForm.controls['email'];

    // Case "Hide" cochée : l'email n'est plus requis et on le vide
    // Décochée : on remet ses règles de validation
    this.contactForm.controls['hideEmail'].valueChanges.subscribe((cache: boolean) => {
      if (cache) {
        email.clearValidators();
        email.reset();
      } else {
        email.setValidators([Validators.required, Validators.pattern(EMAIL_AVEC_AROBASE)]);
      }
      email.updateValueAndValidity();
    });
  }

  // Un input type="number" accepte e, +, - : on les bloque
  bloquerTouches(event: KeyboardEvent): void {
    if (['e', 'E', '+', '-', '.', ','].includes(event.key)) {
      event.preventDefault();
    }
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      // On garde le formulaire dans le service pour que la page Gestion puisse l'afficher
      this.contactService.enregistrerContact(this.contactForm.value);
      alert('Le formulaire est valide');
      this.router.navigate(['/accueil']);
    }
  }
}
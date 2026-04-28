// app.component.ts
import { Component, OnInit } from '@angular/core';
import { FormulaireContactComponent } from './formulaire-contact/formulaire-contact.component';
import { ListeContactsComponent } from './liste-contacts/liste-contacts.component';
import { Contact } from './contact.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormulaireContactComponent, ListeContactsComponent],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  mesContacts: Contact[] = [];

  // constructor : injection uniquement (vide ici)
  constructor() {}

  // ngOnInit : initialisation des données
  ngOnInit(): void {
    // Pré-remplir avec 2 contacts démo
    this.mesContacts = [
      { nom: 'Ali Benali', email: 'ali@example.com', telephone: '0600000001' },
      { nom: 'Sara Alami', email: 'sara@example.com', telephone: '0600000002' },
    ];
    console.log('AppComponent initialisé avec', this.mesContacts.length, 'contacts');
  }

  // Ajouter un contact émis par le formulaire
  ajouterContact(contact: Contact): void {
    // Nouvelle référence pour déclencher ngOnChanges
    this.mesContacts = [...this.mesContacts, contact];
    console.log('Contact ajouté :', contact);
  }

  // Supprimer un contact par index
  supprimerContact(index: number): void {
    this.mesContacts = this.mesContacts.filter((_, i) => i !== index);
    console.log(`Contact ${index} supprimé. Reste : ${this.mesContacts.length}`);
  }

  // Propriété calculée : nombre de contacts
  get nombreContacts(): number {
    return this.mesContacts.length;
  }

  // Propriété calculée : message de statut
  get messageStatut(): string {
    if (this.mesContacts.length === 0) return 'Carnet vide';
    if (this.mesContacts.length === 1) return '1 contact';
    return `${this.mesContacts.length} contacts`;
  }
}

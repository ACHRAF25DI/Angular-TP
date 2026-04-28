// liste-contacts.component.ts
import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Contact } from '../contact.interface';

@Component({
  selector: 'app-liste-contacts',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './liste-contacts.component.html',
  styleUrl: './liste-contacts.component.css',
})
export class ListeContactsComponent implements OnInit, OnChanges, OnDestroy {
  // ── Exercice 3 : @Input ──
  @Input() contacts: Contact[] = [];

  // ── Exercice 5A : @Output suppression ──
  @Output() contactSupprime = new EventEmitter<number>();

  // ── Exercice 4 : Lifecycle ──
  dateChargement: string = '';
  nombreAjouts: number = 0;

  // ── Exercice 5B : Recherche ──
  recherche: string = '';

  // ── constructor : UNIQUEMENT pour l'injection de services ──
  constructor() {
    console.log('[1] constructor() appelé');
    // NE PAS accéder aux @Input() ici - ils ne sont pas encore remplis !
  }

  // ── ngOnInit : tout le reste de l'initialisation ──
  ngOnInit(): void {
    console.log('[2] ngOnInit() appelé');
    console.log(`   Contacts reçus : ${this.contacts.length}`);
    this.dateChargement = new Date().toLocaleTimeString('fr-FR');
  }

  // ── ngOnChanges : détecter les changements d'@Input ──
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['contacts']) {
      const avant = changes['contacts'].previousValue;
      const apres = changes['contacts'].currentValue;
      const premier = changes['contacts'].firstChange;

      console.log('ngOnChanges() appelé');
      console.log('  Premier appel ?', premier);
      console.log('  Avant :', avant?.length ?? 0, 'contact(s)');
      console.log('  Après :', apres?.length ?? 0, 'contact(s)');

      if (!premier) this.nombreAjouts++;
    }
  }

  // ── ngOnDestroy : libérer les ressources ──
  ngOnDestroy(): void {
    console.log('[3] ngOnDestroy() appelé — nettoyage');
  }

  // ── Exercice 5A : Supprimer un contact ──
  supprimer(index: number): void {
    if (confirm('Confirmer la suppression ?')) {
      this.contactSupprime.emit(index);
    }
  }

  // ── Exercice 5B : Propriété calculée pour la recherche ──
  get contactsFiltres(): Contact[] {
    if (!this.recherche.trim()) return this.contacts;
    const terme = this.recherche.toLowerCase();
    return this.contacts.filter(
      (c) =>
        c.nom.toLowerCase().includes(terme) ||
        c.email.toLowerCase().includes(terme)
    );
  }
}

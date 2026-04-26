# Gestion Contacts — TP2 Angular 20

> TP 2 : Data Binding, Signals & Lifecycle Hooks  
> Module : Développement Full Stack Moderne — ILISI1 2025/2026

## 🚀 Lancer le projet

```bash
npm install
ng serve
```
Puis ouvrir [http://localhost:4200](http://localhost:4200)

## 📁 Structure

```
src/app/
├── app.component.ts          ← Composant racine (parent)
├── app.component.html
├── contact.interface.ts      ← Interface Contact partagée
├── formulaire-contact/
│   ├── formulaire-contact.component.ts   ← @Output, Data Binding
│   └── formulaire-contact.component.html
└── liste-contacts/
    ├── liste-contacts.component.ts       ← @Input, Lifecycle Hooks
    └── liste-contacts.component.html
```

## ✅ Concepts couverts

| Exercice | Concept |
|----------|---------|
| 1 | Composants Standalone (`standalone: true`) |
| 2 | Les 4 types de Data Binding : `{{ }}`, `[ ]`, `( )`, `[( )]` |
| 3 | Communication `@Input()` / `@Output()` parent ↔ enfant |
| 4 | Lifecycle Hooks : `ngOnInit`, `ngOnChanges`, `ngOnDestroy` |
| 5 | Suppression, recherche en temps réel, getters |
| 6 | Application complète avec CSS Angular-style |

## 🧩 Fonctionnalités

- ➕ Ajouter un contact (nom + email obligatoires)
- 👁️ Aperçu en temps réel pendant la saisie (Two-Way Binding)
- ❌ Supprimer un contact avec confirmation
- 🔍 Recherche filtrante en temps réel (nom ou email)
- 📊 Compteur de contacts et statistiques lifecycle
- 🕐 Horodatage du chargement de la liste
"# Angular-TP" 

# Trouve ton artisan — Frontend

Interface web de la plateforme **Trouve ton artisan** de la région Auvergne-Rhône-Alpes. Elle permet aux particuliers de trouver un artisan par catégorie ou par recherche, puis de le contacter via un formulaire.

Ce frontend consomme l'API du projet : [api-trouve-ton-artisan](https://github.com/AshDrift85/api-trouve-ton-artisan)

## Technologies

- [React](https://react.dev/) (via [Vite](https://vitejs.dev/))
- [React Router](https://reactrouter.com/) pour la navigation
- [Bootstrap](https://getbootstrap.com/) + [Sass](https://sass-lang.com/) pour le style
- ESLint pour la qualité du code

## Prérequis

- [Node.js](https://nodejs.org/) version 18 ou supérieure
- npm
- L'**API** installée et lancée (voir son README)

## Installation

```bash
# 1. Cloner le dépôt
git clone https://github.com/AshDrift85/frontend-trouve-ton-artisan.git
cd frontend-trouve-ton-artisan

# 2. Installer les dépendances
npm install
```

## Configuration

Créer un fichier `.env` à la racine du projet :

```env
VITE_API_URL=http://localhost:3000/api
```

> Adapter l'URL au port utilisé par l'API. L'origine du frontend (ex. `http://localhost:5173`) doit être autorisée dans la variable `ALLOWED_ORIGIN` de l'API (CORS).

## Lancement

```bash
# Mode développement
npm run dev
```

Le site est alors accessible sur [http://localhost:5173](http://localhost:5173).

```bash
# Build de production
npm run build

# Prévisualiser le build
npm run preview
```

## Pages

| Route | Page | Description |
|---|---|---|
| `/` | Accueil | Étapes « Comment trouver mon artisan ? » et les 3 artisans du mois |
| `/artisans` | Liste des artisans | Filtre par catégorie (`?categorie=`) ou par recherche |
| `/artisans/:id` | Fiche artisan | Détails et formulaire de contact |
| `*` | Page 404 | Toute URL inconnue |

Le header (logo, menu des catégories chargé depuis l'API, barre de recherche) et le footer sont communs à toutes les pages.

## Structure

```
src/
├── components/   # Header, Footer
├── pages/        # Accueil, ListeArtisans, FicheArtisan, PageNonTrouvee
├── styles/       # Fichiers Sass (variables de couleurs, police Graphik)
├── App.jsx       # Déclaration des routes
└── main.jsx      # Point d'entrée (Bootstrap JS importé ici)
```

## Auteur

Baptiste — [AshDrift85](https://github.com/AshDrift85)
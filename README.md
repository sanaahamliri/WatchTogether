# VOD Shared Experience Platform

## Description

La **VOD Shared Experience Platform** est une application interactive qui permet aux utilisateurs de créer et de partager des playlists de vidéos dans des "ROOMs". Les utilisateurs peuvent collaborer en temps réel, regarder des vidéos synchronisées et interagir avec d'autres participants.

## Fonctionnalités

- **Gestion des playlists** :
  - Créer, lire, mettre à jour et supprimer des playlists de vidéos.
  - Partager des playlists dans des ROOMs pour une période définie.

- **Gestion des ROOMs** :
  - Créer, lire, mettre à jour et supprimer des ROOMs.
  - Inviter des participants par email.
  - Accepter ou refuser les participants.

- **Diffusion et synchronisation des vidéos** :
  - Diffuser des vidéos en direct et synchroniser la lecture pour tous les participants.
  - Interagir avec les autres membres présents dans la ROOM.

- **Push-to-Talk** :
  - Fonctionnalité permettant aux utilisateurs de s’exprimer ou de commenter pendant la session.

- **Notifications** :
  - Notifications par email avant le début de la session.
  - Messages d'erreur si un participant tente de rejoindre une ROOM avant l'heure prévue.
  - Messages informant que la session est terminée une fois la diffusion terminée.

## Technologies Utilisées

- **Front-end** :
  - React.js (TypeScript)
  - Tailwind CSS
  - Axios
  - React-Player
  - Redux
  - Socket.IO

- **Back-end** :
  - NestJS
  - Socket.IO
  - Nodemailer
  - class-validator
  - MongoDB (mongoose)

## Prérequis

- Node.js
- npm ou yarn
- MongoDB

## Installation

1. **Cloner le dépôt** :
   ```sh
   git clone https://github.com/sanaahamliri/WatchTogether.git
   cd vod-platform

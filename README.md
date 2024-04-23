# API VENTE PRODUITS

## Installation des dépendances

Pour installer les dépendaces, tapez la commande ci-dessous

* npm install

## Configuration

- Dans le dossier config, créer un fichier config.json en se basant du modèle config.example.json tout en renseignant les informations de votre base de donnée. 
- créer un fichier .env à la racine en se basant du modèle .env.example tout en renseignant les informations de votre base de donnée.

## Migrations

Executer les migrations avec la commande suivante :
* npx sequelize-cli db:migrate
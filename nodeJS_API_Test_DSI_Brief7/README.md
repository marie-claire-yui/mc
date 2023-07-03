# Brief 7

essai API REST

projet github: https://github.com/ProjetDsi/Dsi-Back.git

Dossier, fichier point entrée de l'application = App.js.

npm init => Pour démarrer un projet Node.js ou js, il est nécessaire de mettre en place un fichier **package.json** (rapide description du projet, et liste des dépendances de l'appli, et des dépendances des dépendances. On peut égelment y mettre en place des scripts pour  simplifier et automatiser des tâches).
=> soit à la main, soit avec une commande npm = **npm init**.
Dans le fichier, remplacer test par start dans scripts, et enlever echo => node app.js.
Puis npm run start => script appelle node app.js et démarre projet.

Ajout des dépendances:

-**Express. js = framework pour créer des API REST avec Node.js.**
=> installation:
npm install express --save

    const express = require('express');
    //  Récupération du paquet express dans code avec require => récup dépendance dans node modules
    const app = express();
    // serveur web sur lequel fonctionnera notre API REST
    const port = 3000 ;
    // port sur lequel nous allons démarrer notre API REST par la suite

- Pour éviter de couper et relancer npm run start => paquet Node.js, **nodemon**.
Il s'occupe d'exécuter le projet Node.js en tâche de fond, à chaque modification, il relance automatiquement l'API REST en prenant compte les dernières modifications.
npm install nodemon --save -dev
Il faut mettre à jour le script de démarrage: nodemon app.js.

- npm install sequelize --save
Il faut installer un **driver** => Sequelize crée une couche d'abstraction par rapport à la base de données utilisée. Cependant il y a bien un moment où l'on se connecte à la bdd, d'où le driver.
Chaque bdd SQL a son propre driver afin de permettre à l'ORM d'intéragir avec elle.
npm install --save mysql2

- Bodyparser pour récupèrer au format json
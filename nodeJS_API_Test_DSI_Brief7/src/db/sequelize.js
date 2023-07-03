// Ce fichier gère la configuration de la base de données et l'initialisation du modèle User.
const { Sequelize, DataTypes} = require('sequelize');
// récupération des prorpiétés de sequelize sequelize et dataypes
const UserModel = require('../models/users');
// Importation du modèle d'utilisateur (users.js)  

const sequelize = new Sequelize('dsi_sensibilisation', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Etc/GMT-2',
  },
  logging: false
})
// Création d'une instance Sequelize avec les informations de connexion à la base de données


const User = UserModel(sequelize, DataTypes);
// Création du modèle User en utilisant le modèle UserModel et les paramètres sequelize et DataTypes



sequelize
  .query('SELECT 1')
  .then(([result]) => {
    console.log('Connexion à la base de données réussie !');
  })
  .catch(error => {
    console.error('Erreur de connexion à la base de données :', error);
  });
// Cette requête sélectionne  la valeur 1 pour vérifier si la connexion à la base de données est réussie.


module.exports = { 
    User
 }
// Exportation du modèle User pour pouvoir l'utiliser ailleurs dans le code.




// sequelize.sync({force: true})
// .then(_ => {
//     console.log('synchro ok');
//     User.create({
//         role :"admin",
//         password: "fhkuzehfk"
//     })
// })
  
// const initDb = () => {
//   return sequelize.sync({force: true}).then(_ => {
//     users.map(user => {
//       User.create({
//         role: user.role_user,
//         password: user.password,
//       }).then(user => console.log(user.toJSON()))
//     })
//     console.log('La base de donnée a bien été initialisée !')
//   })
// }
// initialisation du models
  

const express = require('express');
//  Récupération du paquet express dans code avec require => récup dépendance dans node modules
const bodyParser = require('body-parser');
// pour récupèrer données au format json
const sequelize = require('./src/db/sequelize');
// récupération sequelize pour connexion action bdd dans API
const app = express();
// serveur web sur lequel fonctionnera notre API REST
const port = 3000 ;
// port sur lequel nous allons démarrer notre API REST par la suite

app.use(bodyParser.json());

// sequelize.initDb();
// appel initialisation du model

require('./src/routes/findAll')(app);
require('./src/routes/findUser')(app);
require('./src/routes/createUser')(app);
require('./src/routes/updateUser')(app);
require('./src/routes/deleteUser')(app);


app.listen(port, () => console.log(`Notre appli Node est démarrée sur : http://localhost: ${port}`));
// démarre API REST sur port 3000
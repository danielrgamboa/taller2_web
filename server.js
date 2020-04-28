//Importar el programa Mlongodb a VStudio 
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

//Importar path para hacer la página absoluta
const path = require('path');

//Importar express-handlebars
const exphbs = require('express-handlebars');

//Importar la información de la Route.js
const configureRoutes =require('./routes');

//Importar la libreria express
const express = require('express');
//Instanciar servidor express
const app = express();

//Registrar motor de render para handlebars
app.engine('handlebars', exphbs());
//Use el motor de render handlebars
app.set('view engine', 'handlebars');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name›
const dbName = 'DDWigs';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function (err) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    configureRoutes(app, db);
});


//Hacer estática la carpeta Public para que se muestren los styles.
app.use(express.static('public'));


//El puerto en donde aparece la página.
app.listen(3000, function () {
    console.log('servidor iniciado en puerto 3000');
});

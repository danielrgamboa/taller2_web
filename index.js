//Importar path para hacer la página absoluta
const path =require('path');

//Importar la libreria express
const express = require ('express');
//Instanciar servidor express
const app = express();

//Hacer estática la carpeta Public para que se muestren los styles.
app.use(express.static('public'));

//Abrir la homepage de la página.
app.get('/', function (req, res) {
    console.log('hola en la consola');
    //res.send('hola en chrome')
    //response con un file html
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

//Abrir la shop de la página.
app.get('/shop', function(req, res){
    console.log('hola en shop');
    //response con texto normal
    res.send('pagina de shop');
});

//Abrir la página de checkout de la página.
app.get('/checkout', function(req, res){
    console.log('hola en checkout');
    res.send('pagina de checkout');
});

//El puerto en donde aparece la página.
app.listen (3000, function (){
    console.log('servidor iniciado en puerto 3000');
});
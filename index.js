//Importar la libreria express
const express = require ('express');
const app = express();

//Abrir la homepage de la página.
app.get('/', function (req, res) {
    console.log('hola en la consola');
    res.send('hola en chrome')
});

//Abrir la shop de la página.
app.get('/shop', function(req, res){
    console.log('hola en shop');
    res.send('pagina de shop');
});

//El puerto en donde aparece la página.
app.listen (3000, function (){
    console.log('servidor iniciado en puerto 3000');
});
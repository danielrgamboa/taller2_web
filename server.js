//Importar path para hacer la página absoluta
const path =require('path');

//Importar express-handlebars
const exphbs = require('express-handlebars');

//Importar la libreria express
const express = require ('express');
//Instanciar servidor express
const app = express();

//Registrar motor de render para handlebars
app.engine('handlebars', exphbs());
//Use el motor de render handlebars
app.set('view engine', 'handlebars');

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
    //res.send('pagina de shop');

    //objeto contexto
    var context = {
        title: 'El titulo cambiado',
    }
    //response con un handlebar-debe ser renderizado para que siempre se actualice.
    res.render('store', context);
}); 

//Abrir la página del detalle del producto de la página.
app.get('/product/:name', function(req, res){
    console.log('hola en product');

    //objeto contexto 
    var context ={};

    if(req.params.name === 'arcoiris'){
        context ={
            title: 'Peluca arcoiris',
            img: '/img/wig1.jpg',
            description: 'Una peluca unicornio',
            options: ['larga', 'corta', 'ondulada'],
            variations: [
                {
                    name: 'Simple',
                },
                {
                    name: 'Con glitter',
                    price: 200,
                },
                {
                    name: 'Buzzcut',
                    price: 300,
                }
            ],
            price: 125,
            freeShipping: true,
        }
    }

    if(req.params.name === 'diva'){
        context ={
            title: 'Peluca diva',
            img: '/img/wig2.jpg',
            description: 'Una peluca dorada',
            options: [],
            price: 50,
            freeShipping: false, 
        }
    }



    console.log(req.params.name);

    //res.send('pagina de checkout');
    res.render('product', context);
});

//Abrir la página de checkout de la página.
app.get('/checkout', function(req, res){
    console.log('hola en checkout');
    //res.send('pagina de checkout');

    //objeto contexto 
    var context ={};
    res.render('checkout', context);
});

//El puerto en donde aparece la página.
app.listen (3000, function (){
    console.log('servidor iniciado en puerto 3000');
});
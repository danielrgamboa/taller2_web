//Importar path para hacer la página absoluta
const path = require('path');

//Importar express-handlebars
const exphbs = require('express-handlebars');

//Importar modulo de products (20 prods)
const products = require('./products');
console.log(products);

//Datos importantes dentro de los productos
//Recorrer productos para agregar freeShipping (>$150)
products.forEach(function (elem) {
    if (elem.price >= 150) {
        elem.freeShipping = true;
    } else {
        elem.freeShipping = false;
    }
});

//Recorrer productos para agregar kardashianAproved (>$100)
products.forEach(function (elem) {
    if (elem.price >= 100) {
        elem.kardashianAproved = true;
    } else {
        elem.kardashianAproved = false;
    }
});

//Recorrer productos para agregar topSeller (>3.5)
products.forEach(function (elem) {
    if (elem.rating >= 4.3) {
        elem.topSeller = true;
    } else {
        elem.topSeller = false;
    }
});

//Importar la libreria express
const express = require('express');
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
app.get('/shop', function (req, res) {
    console.log('hola en shop');
    console.log(req.query);
    //response con texto normal
    //res.send('pagina de shop');

    // variable filtrada
    var filtered = products;

    //Buscar productos filtrados por precio 
    if (req.query.price_lt) {
        //crear copia del arreglo filtrado 
        filtered = products.filter(function (elem) {
            // precio menor al que el usuario preguntó
            if (elem.price < req.query.price_lt) {
                return true;
            }
        });
    }

    //Buscar productos filtrados por estilo
    if (req.query.search) {
        filtered = products.filter(function (elem) {
            // si el nombre del producto incluye lo que el usuario buscó
            if (elem.style.includes(req.query.search)) {
                return true;
            }
        });
    }

    //objeto contexto
    var context = {
        //products: products,
        products: filtered,
    }
    //response con un handlebar-debe ser renderizado para que siempre se actualice.
    res.render('store', context);
});

//Abrir la página del detalle del producto de la página.
app.get('/product/:name/:id', function (req, res) {
    var id= parseInt(req.params.id);
    var produ= products[id];
    console.log('hola en product');

    //objeto contexto 
    var context = {};

    //Buscar en la base de datos el elemento correspondiente
    var foundElement = products.find(function (elem) {
        if (elem.id == req.params.id) {
            return true;
        }
    });
    //Pasar las variables de ese elemento al contexto 
    context = foundElement;

    /*if(req.params.name === 'arcoiris'){
        context ={};
    }

    if(req.params.name === 'diva'){
        context = {}; 
    }*/

    console.log(req.params.name);

    //res.send('pagina de checkout');
    res.render('product', produ);
});

//Abrir la página de checkout de la página.
app.get('/checkout', function (req, res) {
    console.log('hola en checkout');
    //res.send('pagina de checkout');

    //objeto contexto 
    var context = {};
    res.render('checkout', context);
});



//El puerto en donde aparece la página.
app.listen(3000, function () {
    console.log('servidor iniciado en puerto 3000');
});
const assert = require('assert');

function configureRoutes(app, db) {

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

        /*/Datos importantes dentro de los productos
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
        });*/

        var filters = {
            $and: []
        };

        //Buscar productos filtrados por precio-menor
        if (req.query.price_lt) {
            filters.$and.push({
                //crear  arreglo filtrado
                price: {
                    $lte: parseInt(req.query.price_lt)
                }

            });
        }

        //Buscar productos filtrados por precio-mayor
        if (req.query.price_gt) {
            filters.$and.push({
                //crear  arreglo filtrado
                price: {
                    $gte: parseInt(req.query.price_gt)
                }

            });
        }

        //Buscar productos filtrados por estilo
        if (req.query.search) {
            filters.$and.push({
                //crear  arreglo filtrado
                name: {
                    $regex: new RegExp(req.query.search, 'i'),
                }

            });

        }

        //Ordenamientos ascendente y descendente
        var sortings ={};
        if(req.query.sort == 'price_desc'){
            sortings.price = -1;
        }
        if(req.query.sort == 'price_asce'){
            sortings.price = 1;
        }


        // Get the documents collection
        const collection = db.collection('products');
        // Find some documents
        collection.find({ filters }).sort(sortings).toArray(function (err, docs) {
            assert.equal(err, null);


            //objeto contexto
            var context = {
                //products: products,
                products: docs,
            }

            //response con un handlebar-debe ser renderizado para que siempre se actualice.
            res.render('store', context);
        });

    });

    // GET - Traer o leer información del servidor
    // POST - Agregar nueva información al servidor 
    // PUT - Actualizar información ya existente en el servidor
    // DELETE - Borrar información del servidor  


    //Abrir la página del detalle del producto de la página.
    app.get('/product/:name/:id', function (req, res) {
        var id = parseInt(req.params.id);
        var produ = products[id];
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
}

module.exports = configureRoutes;
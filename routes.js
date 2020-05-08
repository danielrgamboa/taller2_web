const assert = require('assert');
const ObjectId = require('mongodb').ObjectId;

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

        var filters = {
            $and: []
        };

        //Buscar productos filtrados por estilo
        if (req.query.style) {
            //crear  arreglo filtrado
            filters.style = {
                $eq: req.query.style
            }
        }

        //Buscar productos filtrados por rating mayor
        if (req.query.rating_gte) {
            filters.$and.push({
                //crear  arreglo filtrado
                rating: {
                    $gte: parseInt(req.query.rating_gte)
                }

            });
        }

        //Buscar productos filtrados por rating menor
        if (req.query.rating_lte) {
            filters.$and.push({
                //crear  arreglo filtrado
                rating: {
                    $lte: parseInt(req.query.rating_lte)
                }

            });
        }

        //Buscar productos filtrados por KardashianApproved
        if (req.query.priceKardashian) {
            //crear  arreglo filtrado
            filters.price = {
                $gte: parseInt(req.query.priceKardashian)
            }
        }

        //Buscar productos filtrados por Opciones
        if (req.query. optionsDivergent) {
            //crear  arreglo filtrado
            filters.options = {
                $in: [req.query.optionsDivergent,'Long,', 'Short,', 'Wavy']
            }
        }

        //Buscar productos filtrados por busqueda
        if (req.query.search) {
            filters.$and.push({
                title: {
                    $regex: new RegExp(req.query.search, 'i'),
                },
            });
        }

        //Eliminar los filtros apenas entre a la página de shop--(Error de $and)
        if (filters.$and.length === 0) {
            delete filters.$and;
        }

        //Ordenamientos ascendente y descendente de precio 
        var sortings = {};
        if (req.query.sort == 'price_desc') {
            sortings.price = -1;
        }
        if (req.query.sort == 'price_asce') {
            sortings.price = 1;
        }
        if (req.query.sort == 'name_asce') {
            sortings.title = 1;
        }
        if (req.query.sort == 'name_desc') {
            sortings.title = -1;
        }


        // Get the documents collection
        const collection = db.collection('products');
        // Find some documents
        collection.find(filters).sort(sortings).toArray(function (err, docs) {
            assert.equal(err, null);

            //Datos importantes dentro de los productos
            //Recorrer productos para agregar freeShipping (>$150)
            docs.forEach(function (elem) {
                if (elem.price >= 150) {
                    elem.freeShipping = true;
                    console.log(elem);
                } else {
                    elem.freeShipping = false;
                }

                if (elem.price >= 100) {
                    elem.kardashianAproved = true;
                } else {
                    elem.kardashianAproved = false;
                }

                if (elem.rating >= 4.3) {
                    elem.topSeller = true;
                } else {
                    elem.topSeller = false;
                }
            });

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
        if (req.params.id.length != 24) {
            res.redirect('/404');
            return;
        }

        const filter = {

            _id: {
                $eq: new ObjectId(req.params.id)
            }
        };

        // Get the documents collection
        const collection = db.collection('products');
        // Find some documents
        collection.find(filter).toArray(function (err, docs) {
            assert.equal(err, null);


            //Datos importantes dentro de los productos
            //Recorrer productos para agregar freeShipping (>$150)
            docs.forEach(function (elem) {
                if (elem.price >= 150) {
                    elem.freeShipping = true;
                    console.log(elem);
                } else {
                    elem.freeShipping = false;
                }

                if (elem.price >= 100) {
                    elem.kardashianAproved = true;
                } else {
                    elem.kardashianAproved = false;
                }

                if (elem.rating >= 4.3) {
                    elem.topSeller = true;
                } else {
                    elem.topSeller = false;
                }
            });

            //Redireccionar al usuario a página de 404 cuando el producto no se encuentra
            if (docs.length == 0) {
                res.redirect('/404');
                return;
            }


            //objeto contexto
            var context = docs[0];
            console.log(docs);

            //response con un handlebar-debe ser renderizado para que siempre se actualice.
            res.render('product', context);
        });


    });

    //Abrir la página de checkout de la página-tipo GET
    app.get('/checkout', function (req, res) {

        //Error cuando sucede algo que impide mandar info al servidor
        console.log(req.query.error);
        console.log('hola en checkout');
        //res.send('pagina de checkout');

        //objeto contexto 
        var context = {
            showError: req.query.error,
        };
        res.render('checkout', context);
    });

    //Recibir información de la página de checkout-tipo POST
    app.post('/checkout', function (req, res) {
        console.log(req.body);

        var { fname, lname, country, address, city, state, zip, cardnum, expire, security, cardclass } = req.body;

        req.body.creation_date = new Date();

        if (!fname || !lname || !country || !address || !city || !state || !zip || !cardnum
            || !expire || !security || !cardclass) {

            //res.send('error');
            res.redirect('/checkout?error=true');
            return;
        }

        const collection = db.collection('orders');
        collection.insertOne(req.body);
        //res.send('test');
        res.redirect('/confirmation');
    });

    //Abrir página de error 404 (element not found)
    app.get('/404', function (req, res) {
        console.log('hola en 404');

        //objeto contexto 
        var context = {};
        res.render('404', context);
    });

    //Abrir página de confirmacion de compra final
    app.get('/confirmation', function (req, res) {
        console.log('hola en confirmacion');

        //objeto contexto 
        var context = {};
        res.render('confirmation', context);
    });


}

module.exports = configureRoutes;
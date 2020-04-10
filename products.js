const products =[
    {
        id: 0,
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
    
    },{
        id: 1,
        title: 'Peluca diva',
        img: '/img/wig2.jpg',
        description: 'Una peluca dorada',
        options: [],
        price: 50,
         
    }


];

//Exportar modulo de productos (20 prods) para que lo lea el Server.js
module.exports = products;
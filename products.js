const products =[
    {
        id: 1,
        title: 'Blair- Aqua',
        img: '/img/prods/prod1.JPG',
        description: '-',
        options: ['long', 'short', 'wavy'],
        variations: [
            {
                name: 'Simple',
            },
            {
                name: 'With a glittery root',
                price: 200,
            },
            {
                name: 'Braided',
                price: 300,
            }
        ],
        price: 125,
    },{
        id: 2,
        title: 'Blair- Phoenix',
        img: '/img/prods/prod2.JPG',
        description: '-',
        options: ['long', 'short', 'wavy'],
        price: 100,
         
    },{
        id: 3,
        title: 'Blair- Dragon Fruit',
        img: '/img/prods/prod3.JPG',
        description: '-',
        options: ['long', 'short', 'wavy'],
        price: 100,
    },{
        id: 4,
        title: 'Blair- Sour Grape',
        img: '/img/prods/prod4.JPG',
        description: '-',
        options: ['long', 'short', 'wavy'],
        price: 150,
    },{
        id: 5,
        title: 'Kameron- Sour Peach',
        img: '/img/prods/prod5.JPG',
        description: '-',
        options: [],
        price: 90,
    },{
        id: 6,
        title: 'Kameron- Iced Teal',
        img: '/img/prods/prod6.JPG',
        description: '-',
        options: [],
        variations: [
            {
                name: 'Simple',
            },
            {
                name: 'With a glittery root',
                price: 300,
            },
            {
                name: 'Braided',
                price: 420,
            }
        ],
        price: 125,
    },{
        id: 7,
        title: 'Kameron- Moss Green',
        img: '/img/prods/prod7.JPG',
        description: '-',
        options: [],
        price: 90,
    },{
        id: 8,
        title: 'Kameron- Burnt Pumpkin',
        img: '/img/prods/prod8.JPG',
        description: '-',
        options: [],
        price: 90,
    },{
        id: 9,
        title: 'Florence- Cherry Swirl',
        img: '/img/prods/prod9.JPG',
        description: '-',
        options: ['long', 'short', 'wavy'],
        price: 190,
    },{
        id: 10,
        title: 'Florence- Auburn Blend',
        img: '/img/prods/prod10.JPG',
        description: '-',
        options: ['long', 'short', 'wavy'],
        price: 190,
    },{
        id: 11,
        title: 'Florence- Berry Blast',
        img: '/img/prods/prod11.JPG',
        description: '-',
        options: ['long', 'short', 'wavy'],
        price: 90,
    },{
        id: 12,
        title: 'Florence- Frosted Peach',
        img: '/img/prods/prod12.JPG',
        description: '-',
        options: ['long', 'short', 'wavy'],
        price: 80,
    },{
        id: 13,
        title: 'Isla- Candy Crush',
        img: '/img/prods/prod13.JPG',
        description: '-',
        options: ['long', 'short', 'wavy'],
        variations: [
            {
                name: 'Simple',
            },
            {
                name: 'With a glittery root',
                price: 200,
            },
            {
                name: 'Braided',
                price: 300,
            }
        ],
        price: 125,
    },{
        id: 14,
        title: 'Isla- Jewel Blue',
        img: '/img/prods/prod14.JPG',
        description: '-',
        options: [],
        price: 180,
    },{
        id: 15,
        title: 'Isla- Frosted Baby Pink',
        img: '/img/prods/prod15.JPG',
        description: '-',
        options: [],
        price: 180,
    },{
        id: 16,
        title: 'Isla- Lavender Ice',
        img: '/img/prods/prod16.JPG',
        description: '-',
        options: [],
        price: 180,
    },{
        id: 17,
        title: 'Elle- Galaxy',
        img: '/img/prods/prod17.JPG',
        description: '-',
        options: ['long', 'short', 'wavy'],
        price: 75,
    },{
        id: 18,
        title: 'Elle- Raspberry Swirl',
        img: '/img/prods/prod18.JPG',
        description: '-',
        options: ['long', 'short', 'wavy'],
        variations: [
            {
                name: 'Simple',
            },
            {
                name: 'With a glittery root',
                price: 200,
            },
            {
                name: 'Braided',
                price: 300,
            }
        ],
        price: 185,
    },{
        id: 19,
        title: 'Elle- Pastel Dream',
        img: '/img/prods/prod19.JPG',
        description: '-',
        options: ['long', 'short', 'wavy'],
        price: 90,
    },{
        id: 20,
        title: 'Elle- Prism',
        img: '/img/prods/prod20.JPG',
        description: '-',
        options: ['long', 'short', 'wavy'],
        price: 90,
    }



];

//Exportar modulo de productos (20 prods) para que lo lea el Server.js
module.exports = products;
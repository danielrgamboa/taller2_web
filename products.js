const products =[
    {
        id: 1,
        title: 'Blair- Aqua',
        img: '/img/prods/prod1.JPG',
        minidescription: 'Deep Blue Blend With A Pale Blue Front Streak & Tips ',
        description: `The colour is - A Deep Blue Blend With A Pale Blue Front Streak & Tips. 

        The style is- Loose Wand Curls With Straight Tips. 
        
        The length is 26 inches when pulled straight.
        
        She is made from a high quality heat safe synthetic fibre meaning you can use heat tools up to 170c degrees to curl or straighten her.
        
        She also has about 3 inches of parting space across the entire lace front, giving you a free choice of parting, on a soft invisible Swiss lace front.
        
        She has a density of about 150% meaning she has lots of hair and is very full!
        
        She has a natural contoured hairline with a small widows peak.
        
        She has 3 combs inside sewn in for a more secure fit.
        
        Includes a free wig cap & Care and restyling guide!`,
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
        rating: 4.5,
        style: 'Loose Curls',
    },{
        id: 2,
        title: 'Blair- Phoenix',
        img: '/img/prods/prod2.JPG',
        minidescription: 'Blonde Rooted Orange & Red Ombré ',
        description: ``,
        options: ['long', 'short', 'wavy'],
        price: 100,
        rating: 4.2,
        style: 'Loose Curls',
         
    },{
        id: 3,
        title: 'Blair- Dragon Fruit',
        img: '/img/prods/prod3.JPG',
        minidescription: 'Rooted Purple, Pink & Fuchsia Ombré',
        description: ``,
        options: ['long', 'short', 'wavy'],
        price: 100,
        rating: 4.0,
        style: 'Loose Curls',
    },{
        id: 4,
        title: 'Blair- Sour Grape',
        img: '/img/prods/prod4.JPG',
        minidescription: 'A Blonde Rooted Lilac & Purple Ombre ',
        description: ``,
        options: ['long', 'short', 'wavy'],
        price: 150,
        rating: 3.4,
        style: 'Loose Curls',
    },{
        id: 5,
        title: 'Kameron- Sour Peach',
        img: '/img/prods/prod5.JPG',
        minidescription: 'A Slime Green Rooted Peachy Pink ',
        description: ``,
        options: [],
        price: 90,
        rating: 2.9,
        style: 'Loose Waves',
    },{
        id: 6,
        title: 'Kameron- Iced Teal',
        img: '/img/prods/prod6.JPG',
        minidescription: 'A Light Teal Blue/Green Blend ',
        description: ``,
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
        rating: 4.7,
        style: 'Loose Waves',
    },{
        id: 7,
        title: 'Kameron- Moss Green',
        img: '/img/prods/prod7.JPG',
        minidescription: ' A Moss Green Blend ',
        description: ``,
        options: [],
        price: 90,
        rating: 4.0,
        style: 'Loose Waves',
    },{
        id: 8,
        title: 'Kameron- Burnt Pumpkin',
        img: '/img/prods/prod8.JPG',
        minidescription: 'A Light Ginger/Orange Blend',
        description: ``,
        options: [],
        price: 90,
        rating: 3.5,
        style: 'Loose Waves',
    },{
        id: 9,
        title: 'Florence- Cherry Swirl',
        img: '/img/prods/prod9.JPG',
        minidescription: 'A Rooted Pink & Red Blend ',
        description: ``,
        options: ['long', 'short', 'wavy'],
        price: 75,
        rating: 2.5,
        style: 'Loose Waves',
    },{
        id: 10,
        title: 'Florence- Auburn Blend',
        img: '/img/prods/prod10.JPG',
        minidescription: 'A Mixed Auburn Blend',
        description: ``,
        options: ['long', 'short', 'wavy'],
        price: 100,
        rating: 5,
        style: 'Loose Waves',
    },{
        id: 11,
        title: 'Florence- Berry Blast',
        img: '/img/prods/prod11.JPG',
        minidescription: 'Rooted Vibrant Purple & Bright Pink Ombré ',
        description: ``,
        options: ['long', 'short', 'wavy'],
        price: 150,
        rating: 3.0,
        style: 'Loose Waves',
    },{
        id: 12,
        title: 'Florence- Frosted Peach',
        img: '/img/prods/prod12.JPG',
        minidescription: 'A Peach Toned Blonde',
        description: ``,
        options: ['long', 'short', 'wavy'],
        price: 80,
        rating: 4.2,
        style: 'Loose Waves',
    },{
        id: 13,
        title: 'Isla- Candy Crush',
        img: '/img/prods/prod13.JPG',
        description: ``,
        minidescription: 'A Pink, Purple, Blue, Green & Yellow Ombre',
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
        rating: 5,
        style: 'Bouncy Curls',
    },{
        id: 14,
        title: 'Isla- Jewel Blue',
        img: '/img/prods/prod14.JPG',
        minidescription: 'A Deep Blue Blend Of 5 Different Blues & Turquoises ',
        description: ``,
        options: [],
        price: 180,
        rating: 4.7,
        style: 'Bouncy Curls',
    },{
        id: 15,
        title: 'Isla- Frosted Baby Pink',
        img: '/img/prods/prod15.JPG',
        minidescription: 'Baby Pink with White Tips',
        description: ``,
        options: [],
        price: 180,
        rating: 3.5,
        style: 'Bouncy Curls',
    },{
        id: 16,
        title: 'Isla- Lavender Ice',
        img: '/img/prods/prod16.JPG',
        minidescription: 'A Metallic Lavender ',
        description: ``,
        options: [],
        price: 180,
        rating: 3.4,
        style: 'Bouncy Curls',
    },{
        id: 17,
        title: 'Elle- Galaxy',
        img: '/img/prods/prod17.JPG',
        minidescription: 'A Chunked Blend Of Deep Blue, Sky Blue & Lavender',
        description: ``,
        options: ['long', 'short', 'wavy'],
        price: 75,
        rating: 5,
        style: 'Loose Waves',
    },{
        id: 18,
        title: 'Elle- Raspberry Swirl',
        img: '/img/prods/prod18.JPG',
        description: ``,
        minidescription: 'Bright Pink With Darker Pink Lowlights ',
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
        rating: 4.8,
        style: 'Loose Waves',
    },{
        id: 19,
        title: 'Elle- Pastel Dream',
        img: '/img/prods/prod19.JPG',
        minidescription: 'A Pastel Blend Of Mint, Lavender, Pink, Baby Blue & Yellow',
        description: ``,
        options: ['long', 'short', 'wavy'],
        price: 90,
        rating: 5,
        style: 'Loose Waves',
    },{
        id: 20,
        title: 'Elle- Prism',
        img: '/img/prods/prod20.JPG',
        minidescription: 'A Rooted Rainbow Of Blue, Pink, Purple, Lime & Peach',
        description: ``,
        options: ['long', 'short', 'wavy'],
        price: 90,
        rating: 4.5,
        style: 'Loose Waves',
    }



];

//Exportar modulo de productos (20 prods) para que lo lea el Server.js
module.exports = products;
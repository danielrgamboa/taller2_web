var buttonsadd = document.querySelectorAll('.prod-btn');

var cartBtn = document.querySelector('.cart__btn');

var cartList = [];

// se actualiza el numero del carrito cuando se inicia la pagina
if (localStorage.getItem('cartList')) {
    console.log(localStorage.getItem('cartList'));
    cartList = JSON.parse(localStorage.getItem('cartList'));
}

console.log(cartList.length);
cartBtn.innerText = cartList.length;

function renderCart() {
    var cartContainer = document.querySelector('.cart__list');
    cartContainer.innerHTML = '';
    cartList.forEach(function (obj) {
        var newItem = document.createElement('div');
        newItem.innerHTML = ` `;
        cartContainer.appendChild(newItem);
    });
    console.log(cartList);
}
cartBtn.addEventListener('click', renderCart);
//renderCart();

// agregar event listener para poner nuevos productos en el carrito 
buttonsadd.forEach(function (elem) {
    console.log(elem);
    elem.addEventListener('click', function () {
        //var name = elem.parentElement.parentElement.querySelector('.product__price').innerText;
        var name = elem.getAttribute('data-name');
        var price = elem.getAttribute('data-price');
        var id = elem.getAttribute('data-id');
        var img = elem.getAttribute('data-img');
        console.log(name, price, id, img);


        cartList.push({
            id: id,
            img: img,
            name: name,
            price: price,
        });
        
        cartBtn.innerText = cartList.length;

        localStorage.setItem('cartList', JSON.stringify(cartList));
    });

});
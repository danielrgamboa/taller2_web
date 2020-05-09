function onLoad() {

    var buttonsadd = document.querySelectorAll('.prod-btn');

    var cartBtn = document.querySelector('.cart__btn');

    var renderShop = document.querySelector('.search__cart');

    var cartList = [];

    // se actualiza el numero del carrito cuando se inicia la pagina
    if (localStorage.getItem('cartList')) {
        console.log(localStorage.getItem('cartList'));
        cartList = JSON.parse(localStorage.getItem('cartList'));
    }

    console.log(cartList.length);
    cartBtn.innerText = cartList.length;


    function renderCart() {

        var total = 0;

        console.log('hey');
        var cartContainer = document.querySelector('.cart__list');
        cartContainer.innerHTML = '';
        cartList.forEach(function (obj, index) {
            var newItem = document.createElement('div');
            newItem.classList.add('cart__item');
            newItem.innerHTML = `
        <div class ="cartinfo">
        <span class ="cartinfoname">
        <span class ="cartinfostart">
        <p class="name__cart">` + obj.name + `</p>
        <p>$</p><p class="price__cart">${ obj.price}</p>
        </span>
        <button class="btn__cart"><i class="fas fa-trash-alt"></i></button>
        </span>
        <img class="img__cart" src="${obj.img}" />
        </div>
      `;
            var btntrash = newItem.querySelector('.btn__cart');
            btntrash.addEventListener('click', function () {
                cartList.splice(index, 1); // elimina en el elemento en la lista (memoria)
                cartBtn.innerText = cartList.length; //actualiza el numero del carrito
                localStorage.setItem('cartList', JSON.stringify(cartList)); //actualiza la lista en localStorage
                renderCart(); // se vuelve a renderizar la lista
            });
            cartContainer.appendChild(newItem);
            total += parseInt(obj.price);
        });


        var totalElem = document.querySelector('.cart__total');
        totalElem.innerText = total;
    }


    cartBtn.addEventListener('click', renderCart);
    //renderizar los productos en la ruta /cart
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
            var mini = elem.getAttribute('data-minidescription');
            console.log(name, price, id, img, mini);


            cartList.push({
                id: id,
                img: img,
                name: name,
                price: parseInt(price),
                mini: minidescription,
            });

            cartBtn.innerText = cartList.length;

            localStorage.setItem('cartList', JSON.stringify(cartList));
            //actualizar la lista en vivo
            renderCart();
        });

    });
    renderShop.onClick = renderCart();
    //renderShop.onClick=cartContainer();
}

window.addEventListener('load', onLoad);
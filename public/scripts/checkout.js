function onLoad() {
    
    var form = document.querySelector('.checkoutform');
    form.addEventListener('submit', function() {
        var input = document.querySelector('.checkoutform__products');
        input.value = localStorage.getItem('cartList');
        localStorage.removeItem('cartList');
    });
}
window.addEventListener('load', onLoad);
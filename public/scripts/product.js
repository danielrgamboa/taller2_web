//Galeria de productos (Taller2)

var main2 = document.querySelector('.product__gallerymain');
var thumbs2 = document.querySelectorAll('.product__gallerythumb');                   
console.log(main2);
function handleImageClick2 (elem2) {
    console.log(elem2)
    // leer atributo src de la imagen pequeña
    var src2 = elem2.getAttribute('src');
    // setear atributo src a la imagen grande
    main2.setAttribute('src', src2);
    thumbs2.forEach(function(innerElem2){
        innerElem2.classList.remove('productgallery__thumb--active');
    });
    // agregar clase active
    elem2.classList.add('productgallery__thumb--active');
}
function iterateThumbs2 (elem2, index) {
    elem2.addEventListener('click', function () {
        handleImageClick2(elem2);
    });
}
thumbs2.forEach(iterateThumbs2);
handleImageClick2(thumbs2[0]);


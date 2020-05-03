//Buscar en la busqueda principal 
var url= location.pathname;

var button = document.querySelector('.search__button');
console.log(button);
button.addEventListener('click', function() {
    var input = document.querySelector('.search__input');
    console.log(input);
    var search = input.value;
    url = url + '?search=' + search;
    location.href = url;
});

//Ordenamientos de la página shop 
var select = document.querySelector('.select-css');
select.addEventListener('change', function(ev){
    url = url + '?sort=' + select.value;
    location.href = url;
});

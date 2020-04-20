/* Se selecciona el elemento select Precio
var select = document.querySelector('select');
//Se agrega el listener del cambio 
select.addEventListener('change', function (ev) {
    //Se crea una nueva ruta url partiendo del lugar en el que está (shop). 
    var url = location.pathname;
    //Se le agrega el filtro escogido 
    url = url + '?price_lt=' + select.value;
    //Se navega la nueva url con el filtro aplicado
    location.href = url;
    console.log(url);
});

// Se selecciona el elemento select Estilo
var selecc = document.querySelector('selecc');
//Se agrega el listener del cambio 
selecc.addEventListener('change', function (ev) {
    //Se crea una nueva ruta url partiendo del lugar en el que está (shop). 
    var locate = location.pathname;
    //Se le agrega el filtro escogido 
    locate = url + '?search=' + selecc.value;
    //Se navega la nueva url con el filtro aplicado
    location.href = locate;
    console.log(url);
});*/
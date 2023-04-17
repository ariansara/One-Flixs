const fila = document.querySelector('.contenedor-carrusel')
const animes = document.querySelectorAll('.animes, .lista')



var i = 0;
var img = [];
img[0] = "img/1.png";
img[1] = "img/2.png";
img[2] = "img/3.png";
img[3] = "img/4.png";
img[4] = "img/5.png";
img[5] = "img/6.png";

function flechaIzquierda(){
    i--
    if(i == 0){
        i = 5;
    }
    document.getElementById("ani").src = img[i];
}

function flechaDerecha(){
    i++
    if(i == 6){
        i = 0;
    }
    document.getElementById("ani").src = img[i];
}




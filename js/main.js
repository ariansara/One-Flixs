const fila = document.querySelector('.contenedor-carrusel')
const animes = document.querySelectorAll('.animes, .lista')



var i = 0;
var img = [];
img[0] = "img/carrusel/ANIME.png";
img[1] = "img/carrusel/MANGA.png";
img[2] = "img/carrusel/OVAS.png";
img[3] = "img/carrusel/PELICULA.png";


function flechaIzquierda(){
    i--
    if(i == 0){
        i = 3;
    }
    document.getElementById("ani").src = img[i];
}

function flechaDerecha(){
    i++
    if(i == 4){
        i = 0;
    }
    document.getElementById("ani").src = img[i];
}




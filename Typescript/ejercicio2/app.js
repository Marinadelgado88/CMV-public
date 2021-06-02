// En este caso, a través de una función pondría los valores del tipo "pelicula"
function Pelicula(titulo, genero, anyo, estrenada) {
    this.titulo = titulo;
    this.genero = genero;
    this.anyo = anyo;
    this.estrenada = estrenada;
}
// Aquí creo nuevos datos tipo "pelicula" y los pongo en un array con la función creada antes
var peliculas = [
    new Pelicula('Aladdin', 1, 2019, false),
    new Pelicula('Vengadores: Endgame', 3, 2019, true),
    new Pelicula('Los mercenarios', 3, 2015, true),
];
function verTit(peliculas, filtro) {
    return peliculas.filter(function (p) { return p.titulo == filtro; });
}
function verTitD() {
    var tit = document.getElementById("tit").value;
    var pelis = verTit(peliculas, tit);
    if (pelis.length != 0) {
        for (var i = 0; i < pelis.length; i++) {
            alert(pelis[i].titulo + " " + pelis[i].genero + " " + pelis[i].anyo + " " + pelis[i].estrenada + "\n");
        }
    }
    else {
        alert("NO hay ninguna película con ese Título");
    }
}
function verGen(peliculas, filtro) {
    return peliculas.filter(function (p) { return p.genero == filtro; });
}
function verGenD() {
    var gen = document.getElementById("gen").value;
    var gen2 = (parseInt(gen));
    var pelis = verGen(peliculas, gen2);
    if (pelis.length != 0) {
        for (var i = 0; i < pelis.length; i++) {
            alert(pelis[i].titulo + " " + pelis[i].genero + " " + pelis[i].anyo + " " + pelis[i].estrenada + "\n");
        }
    }
    else {
        alert("NO hay ninguna película de ese Género");
    }
}
function verEstr(peliculas, filtro) {
    return peliculas.filter(function (p) { return p.estrenada == filtro; });
}
function verEstrD() {
    var estr = document.getElementById("estr").value;
    if (estr == "true") {
        var estr2 = true;
        var pelis = verEstr(peliculas, estr2);
    }
    else if (estr == "false") {
        var estr2 = false;
        var pelis = verEstr(peliculas, estr2);
    }
    else {
        alert("ERROR, NO hay ninguna película con ese criterio");
    }
    if (pelis.length != 0) {
        for (var i = 0; i < pelis.length; i++) {
            alert(pelis[i].titulo + " " + pelis[i].genero + " " + pelis[i].anyo + " " + pelis[i].estrenada + "\n");
        }
    }
}
function verAn(peliculas, filtro) {
    return peliculas.filter(function (p) { return p.anyo > filtro; });
}
function verAnD() {
    var an = document.getElementById("an").value;
    var an2 = (parseInt(an));
    var pelis = verAn(peliculas, an2);
    if (pelis.length != 0) {
        for (var i = 0; i < pelis.length; i++) {
            alert(pelis[i].titulo + " " + pelis[i].genero + " " + pelis[i].anyo + " " + pelis[i].estrenada + "\n");
        }
    }
    else {
        alert("NO hay ninguna película de ese año mínimo");
    }
}

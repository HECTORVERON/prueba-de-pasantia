function mostrarvertical() {
    document.getElementById('vertical').style.display = 'block';
    document.getElementById('horizontal').style.display = 'none';
    document.getElementById('colapsado').style.display = 'none';
    document.getElementById('contenido').style.margin='-245px 0px 0px 20%';
}
/*esta funcion lo que realiza es mostrar un navegador que esta oculto que es el vertical y a la ves oculta el navegador horizontal y vertical*/
function mostrarhorizontal() {
    document.getElementById('vertical').style.display = 'none';
    document.getElementById('horizontal').style.display = 'block';
    document.getElementById('colapsado').style.display = 'none';
    document.getElementById('contenido').style.margin = '0';
}
/*es funcion lo que realiza es mostrar un navegador que esta oculto que es el horizontal y a la ves oculta el navegador vertical y colapsado */
function mostrarcolapsado() {
    document.getElementById('vertical').style.display = 'none';
    document.getElementById('horizontal').style.display = 'none';
    document.getElementById('colapsado').style.display = 'block';
    document.getElementById('contenido').style.margin = '-310px 0px 0px 20%';
}

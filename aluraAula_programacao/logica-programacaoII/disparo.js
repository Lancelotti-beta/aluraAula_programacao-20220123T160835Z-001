

var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

pincel.fillStyle = 'white';
pincel.fillRect(0, 0, 600, 400);

var raio = 10;

function desenhaCirculo(x, y, raio, cor) {

    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();
}

desenhaCirculo(300, 200, raio + 20, 'red'); // maior círculo
desenhaCirculo(300, 200, raio + 10, 'white');
desenhaCirculo(300, 200, raio, 'red'); // menor circulo

function dispara(evento) {

    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;

    if(x > 300 - raio && x < 300 + raio && y > 200 - raio && y < 200 + raio){
        alert('Click')
    } else {
        alert('Erro')
    }

    // lógica de acerto - 1 Tentativa 
    // if(x >= 290 && x <= 310){
    //     alert('click')
    // } else if ( y >= 290 && y <= 310) {
    //     alert('click')
    // } else {
    //     alert('erro')
    // }

    // Minha resolução a cima, com bugs
    // Resolução da aula, calculando oo rubtraindo o raio
    // if (x > 300 - raio 
    //     && x < 300 + raio
    //         && y > 200 - raio 
    //             && y < 200 + raio) {

    //     alert('Acertou');
    // }


}

tela.onclick = dispara;


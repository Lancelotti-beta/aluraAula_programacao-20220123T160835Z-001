var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');
pincel.fillStyle = 'lightgray';
pincel.fillRect(0, 0, 600, 400);

var x = 20;
var y = 20;

// códigos do teclado

var setaEsquerda = 37;
var setaCima = 38;
var setaDireita = 39;
var setaBaixo = 40;

var move = 10;

function desenhaCirculo(x, y, raio) {

    pincel.fillStyle = 'blue';
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();
}

function limpaTela() {

    pincel.clearRect(0, 0, 600, 400);
}

function atualizaTela() {

    limpaTela();
    desenhaCirculo(x, y, 10);
}

setInterval(atualizaTela, 20);

function leDoTeclado(evento) {
    if(evento.keyCode == setaEsquerda){
        x = x - move;
    }
    else if(evento.keyCode == setaCima){
        y = y - move;
    }
    else if(evento.keyCode == setaDireita){
        x = x + move;
    }
    else if(evento.keyCode == setaBaixo){
        y = y + move;
    }
}

document.onkeydown = leDoTeclado;

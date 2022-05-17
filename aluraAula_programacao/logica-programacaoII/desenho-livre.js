function desenhaQuadrado(x, y, tamanho, cor) {
    pincel.fillStyle = cor;
    pincel.fillRect(x, y, tamanho, tamanho)
    pincel.fill();
}

function desenhaCirculo(x, y, raio, cor) {
    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * 3.14);
    pincel.fill();

}

function desenhaPaletaDeCores() {
    desenhaQuadrado(xVermelho, yQuadrados, tamanhoQuadrados, 'red');
    desenhaQuadrado(xVerde, yQuadrados, tamanhoQuadrados, 'green');
    desenhaQuadrado(xAzul, yQuadrados, tamanhoQuadrados, 'blue');
}

function lidaComMovimentoDoMouse(evento) {
    x = evento.pageX - tela.offsetLeft;
    y = evento.pageY - tela.offsetTop;

    //Resolução do professor
    if (desenha && podeDesenharNaArea(x, y)) {
        /*
        >>>> Minha função para o exercício. Bruta, Rústica. (Com falha)

        if((x > xVermelho - tamanhoQuadrados+15)&&(x < xVermelho + tamanhoQuadrados+15)
            &&(y > yQuadrados - tamanhoQuadrados+15)&&(y < yQuadrados + tamanhoQuadrados+15)){
                desenha = desabilitaDesenhar();
                corAtual = 'red'
        } else if ((x > xVerde - tamanhoQuadrados+15)&&(x < xVerde + tamanhoQuadrados+15)
            &&(y > yQuadrados - tamanhoQuadrados+15)&&(y < yQuadrados + tamanhoQuadrados+15)){
                desenha = desabilitaDesenhar();
                corAtual = 'green'
        } else if ((x > xAzul - tamanhoQuadrados+15)&&(x < xAzul + tamanhoQuadrados+15)
            &&(y > yQuadrados - tamanhoQuadrados+15)&&(y < yQuadrados + tamanhoQuadrados+15)){
                desenha = desabilitaDesenhar();
                corAtual = 'blue'
        }
        */

        desenhaCirculo(x, y, 5, corAtual);
    }

}



function habilitaDesenhar() {
    desenha = true;
}

function desabilitaDesenhar() {
    desenha = false;
}

function podeDesenharNaArea(x, y) {

    //adicionei '+10' a comparação para aumentar a zona de colisão
    if (x >= 0 && x < 3 * tamanhoQuadrados + 10 && y >= 0 && y < tamanhoQuadrados + 10) {
        return false;
    } else {
        return true;
    }

}

function selecionaCor(evento) {

    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;

    // agora que sei onde o usuário clicou, posso verificar em qual cor da paleta ele esta clicando!

    // começamos pela condição do y que é igual em todos os casos
    if (y > yQuadrados && y < yQuadrados + tamanhoQuadrados) {

        if (x > xVermelho && x < xVermelho + tamanhoQuadrados) {

            corAtual = 'red';

        } else if (x > xVerde && x < xVerde + tamanhoQuadrados) {

            corAtual = 'green';

        } else if (x > xAzul && x < xAzul + tamanhoQuadrados) {

            corAtual = 'blue';
        }
    }
}

var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

pincel.fillStyle = 'lightgray';
pincel.fillRect(0, 0, 600, 400);

var x;
var y;

var desenha = false;
var corAtual = 'blue';

var xVermelho = 0;
var xVerde = 50;
var xAzul = 100;
var yQuadrados = 0;
var tamanhoQuadrados = 50;

desenhaPaletaDeCores(); // mostra os quadrados de seleção de cores

tela.onmousemove = lidaComMovimentoDoMouse;

tela.onmousedown = habilitaDesenhar;

tela.onmouseup = desabilitaDesenhar;

tela.onclick = selecionaCor;
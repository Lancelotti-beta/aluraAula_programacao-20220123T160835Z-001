var tela = document.querySelector('canvas');
var pinccel = tela.getContext('2d');

pinccel.fillStyle = 'grey';
pinccel.fillRect(0, 0, 600, 400);


function desenhaCirculo(x, y) {

    pinccel.fillStyle = 'red';
    pinccel.beginPath();
    pinccel.arc(x, y, 10, 0, 2 * 3.12);
    pinccel.fill();

}

var desenha = false;

//ERRO01: Rever, pois da este reconhecedo o click mas não esta fazendo os circulos
function interageComTela(evento) {

    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;

    if (desenha) {
        pinccel.fillStyle = 'red';
        pinccel.beginPath();
        pinccel.arc(x, y, 10, 0, 2 * 3.12);
        pinccel.fill();
    }

}

/*
    Correção do ERRO01:
    o erro estava na chamada da função, pois quando chamava a 
    'funtion interageComTela' eu usava o comando 'onmousedown'
    por isso não estáva desenhando. O comando é o 'tela.onmousemove',
    enquanto o cursor estiver se movendo na 'tela', faça a 'funtion interageComTela'
    funcionar. 
*/
tela.onmousemove = interageComTela;


function habilita() {
    desenha = true;
    console.log(desenha);
}

function desabilita() {
    desenha = false;

}

tela.onmousedown = habilita;
tela.onmouseup = desabilita;


var tela = document.querySelector('canvas');
var pinccel = tela.getContext('2d');



pinccel.fillStyle = 'grey';
pinccel.fillRect(0, 0, 600, 400);

//colors para escolha

function desenhaCirculo(x, y, color) {

    pinccel.fillStyle = color;
    pinccel.beginPath();
    pinccel.arc(x, y, 10, 0, 2 * 3.12);
    pinccel.fill();

}

var desenha = false;

//ERRO01: Rever, pois esta reconhecedo o click mas não esta fazendo os circulos
function interageComTela(evento) {

    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;

    //Eu estava colocando a var fora da function e por isso não estava pegando o valor atual
    //somente com o 'color.value' dentro da function, pois só assim tinha o "reload". 
    var color = document.querySelector('input').value;

    if (desenha) {
        desenhaCirculo(x, y, color)
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

/* FUNÇÃO EM ANÔNIMO:

    // atribuindo diretamente a função anônima
    tela.onmousemove = function(evento) {

        if(desenha) {
            var x = evento.pageX - tela.offsetLeft;
            var y = evento.pageY - tela.offsetTop;

            var color = document.querySelector('input').value;

            pinccel.fillStyle = color;
            pinccel.fillRect(x, y, 15, 15);
        }
        console.log(x + ',' + y);
    }

    tela.onmousedown = function() {

        desenha = true;
    }

     tela.onmouseup = function() {

        desenha = false;
    }


*/

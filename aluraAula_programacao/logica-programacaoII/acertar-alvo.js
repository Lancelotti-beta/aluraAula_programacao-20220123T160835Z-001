var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

pincel.fillStyle = 'lightgray';
pincel.fillRect(0, 0, 600, 400);

var raio = 10;

var x;
var y;

function desenhaCirculo(x, y, raio, color) {
    pincel.fillStyle = color;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();
}

function limpaTela() {
    pincel.clearRect(0, 0, 600, 400);
}

function numeroAleatorio(number){
    return Math.floor(Math.random()* number);
}

function desenhaAlvo() {
    x = numeroAleatorio(600);
    y = numeroAleatorio(400);

    desenhaCirculo(x, y, raio + 20, 'red')
    desenhaCirculo(x, y, raio + 10, 'white')
    desenhaCirculo(x, y, raio, 'red')
}

function atualizaTela() {
    limpaTela();
    desenhaAlvo();
}

setInterval(atualizaTela, 1000);

tela.onclick = triroNoAlvo;

function triroNoAlvo (event) {
    var eixoX = event.pageX - tela.offsetLeft;
    var eixoY = event.pageY - tela.offsetTop;

    //meu erro foi colocar um valor fixo e não a variavel 'x' e 'y'
    if((eixoX > x - raio) && 
        (eixoX < x + raio) && 
        (eixoY > y - raio) && 
        (eixoY < y + raio)){
            
        alert('No alvo!');
    }
}



/*

>>>> Primeira tentativa para reconhecer o click no alvo. tinha um `else{ alert('Errou')}` antes.

function palyGame(evento) {
    setInterval(atualizaTela, 500);

    var eixoX = evento.pageX - tela.offsetLeft;
    var eixoY = evento.pageY - tela.offsetTop;

    //meu erro foi colocar um valor fixo e não a variavel 'x' e 'y'
    if((eixoX > 300 - raio) && ( eixoX < 300 + raio) && (eixoY > 200 - raio) && ( eixoY < 200 + raio)){
        alert('Click');
    }
}

tela.onclick = palyGame;
*/

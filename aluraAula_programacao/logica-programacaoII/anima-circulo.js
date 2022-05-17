// import { desenhaCirculo } from "./desenha";

var tela = document.querySelector('canvas');
var pinccel = tela.getContext('2d');

pinccel.fillStyle = 'grey';
pinccel.fillRect(0, 0, 600, 400);
pinccel.strokeStyle = 'black';
pinccel.strokeRect(1, 1, 600, 400);

function desenhaCirculo(x, y, raio, color) {

    pinccel.fillStyle = color;
    pinccel.beginPath();
    pinccel.arc(x, y, raio, 0, 2 * Math.PI);
    pinccel.fill();

}

function clearTela() {
    pinccel.clearRect(0, 0, 600, 400);
}

/*
//Uma tentava de fazer iniciar a animação através do 'onclick'
var x = (evento) => {
    return evento.pageX - tela.offsetLeft
};
tela.onclick = setInterval(fazUmCirculo, 10);  

// Teste 4 
function printConsole() {
    setInterval(fazUmCirculo, 10)
}

tela.addEventListener('click', printConsole)
*/


//Agora minha lógica fez sentido :)
/* Fazer o valor ser armazenado em uma variavel Global. Simples, mas demore 
para raciocinar */

var x = 0;
// var sentido = 1;

var raio = 0;
// var tamanho = 20;

var y = 0;

function fazUmCirculo(evento) {
    x = evento.pageX - tela.offsetLeft;
    y = evento.pageY - tela.offsetTop;

    raio = 12;

    setInterval(()=>{
        clearTela();
        desenhaCirculo(x, y, raio, 'black');
        x++;

        /*
        >>>>coloca a bola no 'inicio'
        >>Minha resolução
        if(x > 600){
            x = 0;
        }
        >>>> recochetea a bola de um lado para o outro com 'sentido'
        >>Resolução do professor
        if( x > 600){
            sentido = -1;
        } else if (x < 0) {
            sentido = 1;
        }
        x = x + sentido

        >>>> Faz a bola aumentra e diminuir de tamanho
        >>Minha resolução
        if( raio > 30){
            tamanho = -1;
        } else if (raio < 20) {
            tamanho = 1;
        }
        raio = raio + tamanho;
        */ 

    }, 10)
}

tela.onclick = fazUmCirculo;

/*
var x = 20;
function fazUmCirculo() {
    clearTela();
    desenhaCirculo(x, 20, 'black');
    x++;
}

setInterval(fazUmCirculo, 10);

function mostraNaTela(evento) {
    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;

    //Neste ponto o Codigo Buga e as bolinhas ficam piscando
    setInterval(() => {
        fazUmCirculo(x, y);
    }, 10);  
}
tela.onclick = mostraNaTela;
*/

/*
 Eu estava fazendo com 'setTimeout' no inicio,por isso estava dando erro.
 ao inves de atualizar depos de um certo intervalo o codigo parava, pois eu estava 
 utilizando a função errada.

    var x = 20;
    setInterval(() => {
        pinccel.clearRect(0, 0, 600, 400);
        desenhaCirculo(x, 20, 'black');
        x++;
    }, 10);
*/
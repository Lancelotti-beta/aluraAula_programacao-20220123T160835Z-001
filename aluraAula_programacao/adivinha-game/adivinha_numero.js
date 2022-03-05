

//
// function pulaLinha(vezes){
//   cont = 1;
//   while (cont <= vezes) {
//     document.write("<br>");
//     //document.write("<hr>");
//     cont++;
//   }
//
// }
//
// function mostraTexto(frase){
//   document.write("<big>" + frase + "</big>");
//   pulaLinha(1);
//
// }


var numeroDaSorte = sorte(10);

var campoDeBusca = document.querySelector("input");
var botao = document.querySelector("button");

// var texto = document.querySelector("p");
//
// function maiorMenorDica(){
//   if(campoDeBusca.value > numeroDaSorte){
//     texto.value = "O numero mágico era menor que " + campoDeBusca.value;
//   } else if(campoDeBusca.value< numeroDaSorte) {
//     texto.value = "O número mágico era maior que " + campoDeBusca.value;
//   } else {
//     texto.value = "Parabéns, você acertou o nomero Mágico!";
//   }
// }
// Tentando testar uma mensagem na tela. ainda não esta dendo certo.

function sorte(n){
  return Math.round(Math.random()*n);
}

function comparaNumeroDaSorte(){
  if(campoDeBusca.value == numeroDaSorte){
    alert(" Você Acerou! :) ");
  } else {
    alert(" Você Errou. :/  ");
  }

  campoDeBusca.value = "";
  campoDeBusca.focus();

}

botao.onclick = comparaNumeroDaSorte;

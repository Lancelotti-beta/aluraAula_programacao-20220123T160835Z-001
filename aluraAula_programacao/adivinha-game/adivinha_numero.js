

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

var numeroDaSorte = [2, 8, 10, 6]

var campoDeBusca = document.querySelector("input");
var botao = document.querySelector("button");

function sorte(n){
  return Math.round(Math.random()*n);
}

function errou(valorBoolean){
  if(valorBoolean == false){
    alert(" Você Errou. :/ ")
  }
}

function comparaNumeroDaSorte(){
  var numeroSorteado = false;

  for (var i = 0; i < numeroDaSorte.length; i++) {
    if(campoDeBusca.value == numeroDaSorte[i]){
      alert(" Você Acerou! :) ");
      numeroSorteado = true;
      break;
    }
  }

  errou(numeroSorteado);

  campoDeBusca.value = "";
  campoDeBusca.focus();

}

botao.onclick = comparaNumeroDaSorte;

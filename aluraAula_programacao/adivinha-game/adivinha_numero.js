
var campoDeBusca = document.querySelector("input");
var botao = document.querySelector("button");

var numeroDaSorte = nAleatorio(3);
console.log(numeroDaSorte);

//n significa número, p ssignifica Posição
function sorte(n){
  return Math.round(Math.random()*n);
}

function nAleatorio(valorArray){
  var nDaSorte = [];
  var n = 1;

  while(n <= valorArray){

    var nDoLoopAtual = sorte(10);
    var nEncontrado = false;

    // if(nDaSorte != 0){
    // Caso eu deseje excluir o zero "0" da litsa, é só comolar nessa repetição
    // }
    for (var p = 0; p < nDaSorte.length; p++) {
      if(nDaSorte[p] == nDoLoopAtual){
        nEncontrado = true;
        break;
      }
    }

    if (nEncontrado == false) {
      nDaSorte.push(nDoLoopAtual);
      n++;

    }

  }

  return nDaSorte;
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

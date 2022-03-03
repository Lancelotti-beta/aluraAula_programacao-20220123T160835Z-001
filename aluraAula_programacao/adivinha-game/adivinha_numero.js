var numeroDaSorte = 5;

var campoDeBusca = document.querySelector("input");

var botao = document.querySelector("button");

function comparaNumeroDaSorte(){
  if(campoDeBusca.value == numeroDaSorte){
    alert(" Você Acerou! :) ");
  } else {
    alert(" Você Errou. :/  ");
  }

}

botao.onclick = comparaNumeroDaSorte;

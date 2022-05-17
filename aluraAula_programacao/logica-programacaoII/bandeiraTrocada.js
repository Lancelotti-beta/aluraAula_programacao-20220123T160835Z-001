var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

var brasilBandeira = true;
// var alemanhaBandeira = false;

function desenhaBandeiraBrasil() {


    pincel.fillStyle="green";
    pincel.fillRect(0, 0, 600, 400);

    pincel.fillStyle="yellow";
    pincel.beginPath();
    pincel.moveTo(300, 50);
    pincel.lineTo(50, 200);
    pincel.lineTo(550, 200);
    pincel.fill();

    pincel.beginPath();
    pincel.moveTo(50, 200);
    pincel.lineTo(300, 350);
    pincel.lineTo(550, 200);
    pincel.fill();

    pincel.fillStyle="darkblue";
    pincel.beginPath();

    pincel.arc(300, 200, 100, 0, 2* 3.14);
    pincel.fill();
}


function desenhaBandeiraAlemanha() {
    // var tela = document.querySelector('canvas');
    // var pincel = tela.getContext('2d');

    pincel.fillStyle = 'black';
    pincel.fillRect(0, 0, 600, 133);

    pincel.fillStyle = 'red';
    pincel.fillRect(0, 133, 600, 133);

    pincel.fillStyle = 'yellow';
    pincel.fillRect(0, 266, 600, 133);
}


function troca(){

    /*
    >>>>Minha Resolução 
    if(brasilBandeira) {
        console.log(brasilBandeira)
        desenhaBandeiraBrasil();
        brasilBandeira = false;
        alemanhaBandeira = true;
        console.log(alemanhaBandeira + ', ' + brasilBandeira);

    } else if (alemanhaBandeira){
        console.log(alemanhaBandeira);
        desenhaBandeiraAlemanha();
        alemanhaBandeira = false;
        brasilBandeira = true;
        console.log(alemanhaBandeira + ', ' + brasilBandeira);

    }
    */

    if(brasilBandeira) {
        desenhaBandeiraBrasil();

    } else {
        desenhaBandeiraAlemanha();

    }

    brasilBandeira = !brasilBandeira;

}

setInterval(troca, 3000);
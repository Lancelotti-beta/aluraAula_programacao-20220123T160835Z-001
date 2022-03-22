
var quadro = document.querySelector('canvas');
var pincel = quadro.getContext('2d');

function pintaQuadro(color, x, y, largura, altura){
  pincel.fillStyle = color;
  pincel.fillRect(x, y, largura, altura);
}

function corPincel(color){
  pincel.fillStyle = color;
}

/*  cor Quadro */
pintaQuadro("white", 0, 0, 705, 305);

/* trabalhando com cores */
pintaQuadro("green", 0, 0, 200, 305);

pintaQuadro("red", 505, 0, 200, 305);

/* Criando formas */
corPincel("yellow");
pincel.beginPath();
pincel.moveTo(0, 152.5);
pincel.lineTo(200,0);
pincel.lineTo(200, 305);
pincel.fill();

corPincel("blue");
pincel.beginPath();
pincel.arg(300, 152.5, 75, 0, 2 * 3.14);
pincel.fill();

var tela = document.querySelector('canvas')
var pinccel = tela.getContext('2d')

pinccel.fillStyle = 'grey'
pinccel.fillRect(0, 0, 705, 400)


function bolinhaDesenhada(x, y, raio, color) {
    pinccel.fillStyle = color
    pinccel.beginPath()
    pinccel.arc(x, y, raio, 0, 2 * Math.PI)
    pinccel.fill()

}

function limpaTela() {
    pinccel.clearRect(0, 0, 705, 400)
}


let retur = true
function fazUmCirculo(evento) {
    x = evento.pageX - tela.offsetLeft
    y = evento.pageY - tela.offsetTop

    let raio = 12
    
    
    setInterval(()=>{
        limpaTela()
        bolinhaDesenhada(x, y, raio, 'black')
        
        if (retur) x++
            if(x > 705) retur = false

        if(retur === false) x--
            if (x < 0) retur = true
        
    }, 05)
}

tela.onclick = fazUmCirculo



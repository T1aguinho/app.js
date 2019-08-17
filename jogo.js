var altura = 0
var largura = 0
var vida = 1
var tempo = 15
var nivel = window.location.search
nivel = nivel.replace('?', '')
var mosquitoTempo = 1500

if (nivel === 'normal') {
	mosquitoTempo = 1500
} else if (nivel === 'dificil') {
	mosquitoTempo = 1000
} else if (nivel === 'chuckNorris') {
	mosquitoTempo = 750
}

function ajustaPalco(){
	altura = window.innerHeight
	largura = window.innerWidth
	console.log(largura, altura)
}

ajustaPalco()

var cronometro = setInterval(function() {
	tempo -= 1

	if (tempo < 0) {
		clearInterval(cronometro)
		clearInterval(criaMosquito)
		window.location.href = "vitoria.html"
	} else {
	document.getElementById('tempo').innerHTML = tempo
	}
},1000)
function posicaoRandomica(){

	if (document.getElementById('mosquito')) {
		document.getElementById('mosquito').remove()

	if (vida > 3) {
		window.location.href = "fim_jogo.html"
	}	else {
		document.getElementById('v' + vida).src = "imagens/coracao_vazio.png"

		vida++
		}
	}

	var posicaoX = Math.floor(Math.random() * largura - 90)
	var posicaoY = Math.floor(Math.random() *	altura - 90)

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	console.log(posicaoX, posicaoY)

	var mosquito = document.createElement('img')
	mosquito.src = 'imagens/mosca.png'
	mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito'
	mosquito.onclick = function(){
		this.remove()
	}

	document.body.appendChild(mosquito)
}

function tamanhoAleatorio(){
	var classe = Math.floor(Math.random() * 3)

	switch(classe){
		case 0: 
			return 'mosquito1'
			
		case 1:
			return 'mosquito2'
			
		case 2:
			return 'mosquito3'
			
	}
}

function ladoAleatorio(){
	var classe = Math.floor(Math.random() * 2)

	switch(classe){
		case 0:
			return 'ladoA'
		case 1:
			return 'ladoB'
	}
}

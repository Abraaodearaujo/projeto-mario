const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
var ponto = document.querySelector('#pontuacao')
pontos = 0
ponto.innerHTML = pontos;
ponto_antigo = 0



const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    },600)
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPisition = +window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(pipe)


    if(pipePosition <= 44 && pipePosition > 0  && marioPisition < 65) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPisition }px`

        mario.src = 'imagens/game-over.png'
        mario.style.marginLeft = '-5px'

    }
    
    if(pipePosition <= 0){
        pontos = pontos + 1
        if(pontos != ponto_antigo + 1){
            pontos = ponto_antigo + 1
            ponto_antigo = pontos
            ponto.innerHTML = pontos
        }
    }

    
}, 30);

document.addEventListener('keydown', jump);

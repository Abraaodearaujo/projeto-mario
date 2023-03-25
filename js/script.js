const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    },600)
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPisition = +window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(marioPisition)
    if(pipePosition <= 44 && pipePosition > 0  && marioPisition < 65) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPisition }px`

        mario.src = 'imagens/game-over.png'
        mario.style.marginLeft = '-5px'

    }
}, 10);

document.addEventListener('keydown', jump);

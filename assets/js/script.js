const rock = document.querySelector('#cartao__rock');
const scissors = document.querySelector('#cartao__scissors');
const paper = document.querySelector('#cartao__paper');
const rockAI = document.querySelector('#cartao__rock--AI');
const scissorsAI = document.querySelector('#cartao__scissors--AI');
const paperAI = document.querySelector('#cartao__paper--AI');
const bang = document.querySelector('.bang');
const player = document.querySelector('#cartao__player');
const AI = document.querySelector('#cartao__AI');
let you = null;
let pc = null;
let toggle = true;
let i = 0;
let j = 0;
let time = 1500;

function gray(op) {
    op.setAttribute('style', 'filter: grayscale(100%)')
}

function ungray(op) {
    op.setAttribute('style', 'filter: initial')
}

function won() {
    bang.textContent = "You Won!"
    bang.setAttribute('style', 'color: #92d793')
    i += 1;
}

function lost() {
    bang.textContent = "You Lost!"
    bang.setAttribute('style', 'color: #ff2727')
    j += 1;
}

function tie() {
    bang.textContent = "Tie!"
    bang.setAttribute('style', 'color: #fcf260')
}

function grayAI() {
    switch (pc) {
        case 0 :
            gray(scissorsAI)
            gray(paperAI)
            break
        case 1 :
            gray(rockAI)
            gray(paperAI)
            break
        case 2 :
            gray(rockAI)
            gray(scissorsAI)
            break
    }
}

function game() {
    setTimeout(() => {
        bang.textContent = "Bang It Again!";
        bang.setAttribute('style', 'color: #fff')
        ungray(rock)
        ungray(scissors)
        ungray(paper)
        ungray(rockAI)
        ungray(scissorsAI)
        ungray(paperAI)
        toggle = true;
        if (i === 3 || j === 3) {
            location.reload();
        }
    }, time);
    grayAI()
    if (pc === you) {
        tie()
    } else {
        switch (you) {
            case 0 :
                if (pc === 1) {
                    won()
                    break
                } else if (pc === 2) {
                    lost()
                    break
                }
            case 1 :
                if (pc === 2) {
                    won()
                    break
                } else if (pc === 0) {
                    lost()
                    break
                }
            case 2 :
                if (pc === 0) {
                    won()
                    break
                } else if (pc === 1) {
                    lost()
                    break
                }
        }
    }
    switch (i) {
        case 1 :
            player.textContent = "Player ★☆☆";
            break
        case 2 :
            player.textContent = "Player ★★☆";
            break
        case 3 :
            player.textContent = "Player ★★★";
            bang.textContent = "You're the Winner!";
            break
    }
    switch (j) {
        case 1 :
            AI.textContent = "Computer ★☆☆";
            break
        case 2 :
            AI.textContent = "Computer ★★☆";
            break
        case 3 :
            AI.textContent = "Computer ★★★";
            bang.textContent = "PC's the Winner!";
            break
    }
}

function gameEvent(gray1, gray2, u, normal) {
    if (toggle) {
    gray(gray1)
    gray(gray2)
    you = u
    pc = Math.floor(Math.random() * 3);
    game(normal);
    toggle = false;
    }
}

rock.addEventListener("click", () => {gameEvent(scissors, paper, 0, rock); }, );
scissors.addEventListener("click", () => {gameEvent(rock, paper, 1, scissors); }, );
paper.addEventListener("click", () => {gameEvent(rock, scissors, 2, paper); }, );

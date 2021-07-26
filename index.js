const player1Soore = document.getElementById('player1Score')
const player2Soore = document.getElementById('player2Score')

let wingSoreDisply = document.querySelector('p spna')

const inputScore = document.getElementById('inputScore')

const p1btn = document.getElementById('playerone')
const p2btn = document.getElementById('playertwo')
const resetbtn = document.getElementById('reset')

let p1Sosre = 0
let p2Sosre = 0

let wingScore = 5
let gameOver = false

p1btn.addEventListener('click', () => {
    if(!gameOver) {
        p1Sosre++
        winner(p1Sosre, wingScore)
    player1Soore.textContent = p1Sosre
    }
})

p2btn.addEventListener('click', () => {
    if(!gameOver) {
        p2Sosre++
        winner(p2Sosre, wingScore)
    player2Soore.textContent = p2Sosre
    }
})

function winner(oldScore, wingScore) {
    if(oldScore === wingScore) {
        if(player1Soore === wingScore) {
            player1Soore.classList.add('winner')
        } else {
            player2Soore.classList.add('winner')
        }
        gameOver = true
        p1btn.setAttribute('disabled', 'disabled')
        p2btn.setAttribute('disabled', 'disabled')
    }
}

inputScore.addEventListener('change', () => {
    console.log(typeof inputScore.value)
    wingScore = Number(inputScore.value)
    wingScore.textContent = inputScore.value
    inputScore.value = ''
    reset()
})

function reset() {
    p1Sosre = 0
    p2Sosre = 0
    gameOver = false
    player1Soore.textContent = 0
    player2Soore.textContent = 0
    player1Soore.classList.remove('winner')
    player2Soore.classList.remove('winner')
    p1btn.removeAttribute('disabled')
    p2btn.removeAttribute('disabled')
}

resetbtn.addEventListener('click',reset) 


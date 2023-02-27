const appEl = document.querySelector('.app')
const resultTextEl = document.querySelector('.result-text')
const restartBtn = document.querySelector('.restart-btn')

const cellList = document.querySelectorAll('.cell')

let game = [[null,null,null], [null,null,null], [null,null,null]]

let playerTurn = 'X'

let win = false


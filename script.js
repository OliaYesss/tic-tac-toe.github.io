const appEl = document.querySelector('.app')
const resultTextEl = document.querySelector('.result-text')
const restartBtn = document.querySelector('.restart-btn')

const cellList = document.querySelectorAll('.cell')

let game = [[null,null,null], [null,null,null], [null,null,null]]

let playerTurn = 'X'

let win = false

const checkDraw = () => {
  for (let i = 0; i < game.length; i++) {
    for (let j = 0; j < game[i].length; j++) {
      if (game[i][j] === null) {
        return false
      }
    }
  } 
  return true
}

const onCellClick = (event) => {
  const cell = event.target
  const dataset = event.target.dataset

  if (win) {
    return
  }

  if (cell.innerHTML === 'X' || cell.innerHTML === '0') {
    return
  }

  console.log(dataset.i, dataset.j, game)
}


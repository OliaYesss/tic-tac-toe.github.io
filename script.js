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

  game[dataset.i][dataset.j] = playerTurn

  cell.innerHTML = playerTurn

  cell.classList.add('cell-' + playerTurn)

  const winOne = playerTurn === game[0][0] && playerTurn === game[1][1] && playerTurn === game[2][2]
  const winTwo = playerTurn === game[2][0] && playerTurn === game[1][1] && playerTurn === game[0][2]
  const winThree = playerTurn === game[0][0] && playerTurn === game[1][0] && playerTurn === game[2][0]
  const winFour = playerTurn === game[0][1] && playerTurn === game[1][1] && playerTurn === game[2][1]
  const winFive = playerTurn === game[0][2] && playerTurn === game[1][2] && playerTurn === game[2][2]
  const winSix = playerTurn === game[0][0] && playerTurn === game[0][1] && playerTurn === game[0][2]
  const winSeven = playerTurn === game[1][0] && playerTurn === game[1][1] && playerTurn === game[1][2]
  const winEight = playerTurn === game[2][0] && playerTurn === game[2][1] && playerTurn === game[2][2]

  if (winOne || winTwo || winThree || winFour || winFive || winSix || winSeven || winEight) {
    win = true
    
    resultTextEl.innerHTML = `<span class="cell-${playerTurn}">${playerTurn}</span> WINNER!`

    restartBtn.classList.remove('restart-btn-hide')
  }

  if (!win && checkDraw()) {
    resultTextEl.innerHTML = '<span class="cell-X">X</span><span class="cell-0">0</span> DRAW!'

    restartBtn.classList.remove('restart-btn-hide')
  } 

  if (cell.innerHTML === 'X') {
    playerTurn = '0'
  } else {
    playerTurn = 'X'
  }

  console.log(dataset.i, dataset.j, game)
}


const onRestartBtnHide = () => {
  restartBtn.classList.add('restart-btn-hide')
  win = false
  resultTextEl.innerHTML = 'Let\'s play!'

  Array.from(cellList).forEach(cell => {
    cell.innerHTML = ''
    cell.classList.remove('cell-X')
    cell.classList.remove('cell-0')
  })

  game = [[null,null,null], [null,null,null], [null,null,null]]
}





let findCells = document.getElementsByClassName("cell")
let newGamestart = document.getElementById("five")
let findPlayer = document.getElementById("firstplayer")
let screen = document.getElementById("win-screen")

for (const element of findCells) {
  element.addEventListener("click", makeMove)
}

let gameField = ["", "", "", "", "", "", "", "", ""]
let stopGame = false
let counter = 1
let currentPlayer = "X"

function makeMove(event) {
  if (stopGame === true) {
    return
  }

  if (event.target.textContent !== "") {
    return;
  }

  if (counter % 2 === 1) {
    event.target.textContent = "X";
    let index = event.target.id
    gameField[index] = "X"
    findPlayer.textContent = "Ход игрока 0"
    currentPlayer = "X"
  }
  else {
    event.target.textContent = "O"
    let index = event.target.id
    gameField[index] = "O"
    findPlayer.textContent = "Ход игрока X"
    currentPlayer = "O"
  }

  checkWin()

  if (counter === 9) {
    newGamestart.textContent = "Начинаем новую игру"
    findPlayer.textContent = ""
  }

  counter++
}

function checkWin() {
  if (gameField[0] !== "" && gameField[0] === gameField[1] && gameField[0] === gameField[2]) {
    screen.textContent = "Winner is:" + currentPlayer
    stopGame = true;
   confetti({
  particleCount: 1000, // Number of confetti pieces
  spread: 120, // How wide the confetti spreads
  origin: { y: 0.6 } // Where the confetti originates on the y-axis
});

  }

  if (gameField[3] !== "" && gameField[3] === gameField[4] && gameField[4] === gameField[5]) {
    screen.textContent = "Winner is:" + currentPlayer
    stopGame = true;
    confetti();

  }

  if (gameField[6] !== "" && gameField[6] === gameField[7] && gameField[7] === gameField[8]) {
    screen.textContent = "Winner is:" + currentPlayer
    stopGame = true;
    confetti();

  }

  if (gameField[0] !== "" && gameField[0] === gameField[3] && gameField[3] === gameField[6]) {
    screen.textContent = "Winner is:" + currentPlayer
    stopGame = true;
    confetti();

  }

  if (gameField[1] !== "" && gameField[1] === gameField[4] && gameField[4] === gameField[7]) {
    screen.textContent = "Winner is:" + currentPlayer
    stopGame = true;
    confetti();

  }

  if (gameField[2] !== "" && gameField[2] === gameField[5] && gameField[5] === gameField[8]) {
    screen.textContent = "Winner is:" + currentPlayer
    stopGame = true;
    confetti();

  }

  if (gameField[0] !== "" && gameField[0] === gameField[4] && gameField[4] === gameField[8]) {
    screen.textContent = "Winner is:" + currentPlayer
    stopGame = true;
    confetti();

  }

  if (gameField[2] !== "" && gameField[2] === gameField[4] && gameField[4] === gameField[6]) {
    screen.textContent = "Winner is:" + currentPlayer
    stopGame = true;
    confetti();

  }
}

let pressButton = document.getElementById("new-game")
pressButton.addEventListener("click", startNewgame)

function startNewgame(event) {
  gameField = ["", "", "", "", "", "", "", "", ""]
  stopGame = false
  currentPlayer = "X"

  for (const element of findCells) {
    element.textContent = ""
  }

  counter === 1;
  screen.textContent = "";
  newGamestart.textContent = "";
}


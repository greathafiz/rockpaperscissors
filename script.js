/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/

let totalScore = {playerScore: 0, computerScore: 0}


// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
function getComputerChoice() {
  const rps = ['Rock', 'Paper', 'Scissors']

  const computerChoice = Math.floor(Math.random() * 3)

  return rps[computerChoice]
}


// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  let pScore, cScore
  // return the result of score based on if you won, drew, or lost

  // All situations where human draws, set `score` to 0
  if (playerChoice == computerChoice) {
    pScore = 0
    cScore = 0
  }

  // All situations where human wins, set `score` to 1
  // make sure to use else ifs here
  // Otherwise human loses (aka set score to -1)

  if (playerChoice != computerChoice) {
    if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
      pScore = 1
      cScore = -1
    } else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
      pScore = 1
      cScore = -1
    } else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
      pScore = 1
      cScore = -1
    } else {
      pScore = -1
      cScore = 1
    }
  }
  
  // return score
  return {pScore, cScore}
  
}



// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!

  let scoreDiv = document.getElementById('player-score')
  let handsDiv = document.getElementById('hands')
  let resultDiv = document.getElementById('result')


  if (score.pScore == 1) {
    resultDiv.innerText = `You Win!`
  } else if (score.pScore == 0) {
    resultDiv.innerText = `It's a draw!`
  } else if (score.pScore == -1) {
    resultDiv.innerText = `You Lose!`
  }

  handsDiv.innerText = `👱 ${playerChoice} vs 🤖 ${computerChoice}`
  scoreDiv.innerText = `Your Score: ${totalScore['playerScore']} | Computer Score: ${totalScore['computerScore']}`
}


// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice()
  let score = getResult(playerChoice, computerChoice)
  totalScore.computerScore += score.cScore
  totalScore.playerScore += score.pScore
  showResult(score, playerChoice, computerChoice)
}



// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
  const rpsButtons = document.querySelectorAll('.rpsButton')
  const endGameBtn = document.getElementById('endGameButton')

  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *

  // 1. loop through the buttons using a forEach loop
  // 2. Add an 'onclick' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument

  rpsButtons.forEach(rpsButton => {
    rpsButton.onclick = () => {
      onClickRPS(rpsButton.value)
    }
  })
 

  // Add a click listener to the end game button that runs the endGame() function on click
  endGameBtn.onclick = () => endGame()
}

// ** endGame function clears all the text on the DOM **
function endGame() {
  let playerScoreDiv = document.getElementById('player-score')
  let handsDiv = document.getElementById('hands')
  let resultDiv = document.getElementById('result')
  
  playerScoreDiv.innerText = ''
  handsDiv.innerText = ''
  resultDiv.innerText = ''  
}

playGame()
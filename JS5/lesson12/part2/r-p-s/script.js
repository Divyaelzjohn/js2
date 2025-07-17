let score = {
  wins: 0,
  losses: 0,
  ties: 0
};

const savedScore = JSON.parse(localStorage.getItem('score'));
if (savedScore) {
  score = savedScore;
}

updateScoreElement();

let isAutoPlaying=false;
let intervalId

// const autoPlay = () =>{

// }

/* we use regular function because easier to read and hoisted */

function autoPlay(){
  if(!isAutoPlaying){
      intervalId= setInterval(() => {
      const playerMove=pickComputerMove();
      makeMove(playerMove);
    },1000);
    isAutoPlaying=true;
  }else{
    clearInterval(intervalId)
    isAutoPlaying=false;
  }
}

document.querySelector('.js-rock-button').addEventListener('click', ()=>{
  makeMove('rock')
})

document.querySelector('.js-paper-button').addEventListener('click', ()=>{
  makeMove('paper')
})

document.querySelector('.js-scissors-button').addEventListener('click', ()=>{
  makeMove('scissors')
})


document.body.addEventListener('keydown',(event)=>{
  // console.log(event.key)
  if(event.key==='r'){
    makeMove('rock')
  }else if(event.key==='p'){
    makeMove('paper')
  }else if(event.key==='s'){
    makeMove('scissors')
  }
})


function makeMove(playerMove) {
  const computerMove = pickComputerMove();
  const resultElement = document.querySelector('.js-result');

  if (playerMove === computerMove) {
    resultElement.innerHTML = `Tie.`;
    score.ties += 1;

  } else if (
    (playerMove === 'rock' && computerMove === 'scissors') ||
    (playerMove === 'paper' && computerMove === 'rock') ||
    (playerMove === 'scissors' && computerMove === 'paper')
  ) {
    resultElement.innerHTML = `You win.`;
    score.wins += 1;

  } else {
    resultElement.innerHTML = `You lose.`;
    score.losses += 1;
  }

  const movesElement = document.querySelector('.js-moves-chosen');
  movesElement.innerHTML = `
    You
    <img src="img/${playerMove}-emoji.png" class="move-icon">
    <img src="img/${computerMove}-emoji.png" class="move-icon">
    Computer
  `;

  updateScoreElement();
  localStorage.setItem('score', JSON.stringify(score));
}

function resetScore() {
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  };

  updateScoreElement();
  localStorage.removeItem('score');
}

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove;

  if (randomNumber < (1 / 3)) {
    computerMove = 'rock';
  } else if (randomNumber < (2 / 3)) {
    computerMove = 'paper';
  } else {
    computerMove = 'scissors';
  }

  return computerMove;
}

function updateScoreElement() {
  document.querySelector('.js-score').innerHTML = 
  `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

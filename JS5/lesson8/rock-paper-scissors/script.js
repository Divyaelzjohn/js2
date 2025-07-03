// let computerMove='';

// const score={
//   wins:0,
//   losses:0,
//   ties: 0
// };

// console.log(localStorage.getItem('message'));

const score=JSON.parse(localStorage.getItem('score'))

// console.log(JSON.parse(localStorage.getItem('score')))

function pickComputerMove(){
  const randomNumber=Math.random();

  let computerMove='';

  if(randomNumber>=0 && randomNumber<=1/3){
    computerMove='Rock'
  }
  else if(randomNumber>=1/3 && randomNumber<=2/3){
    computerMove='Paper'
  }
  else if(randomNumber>=2/3 && randomNumber<=1){
    computerMove='Scissors'
  }
  return computerMove;
}
function playGame(playerMove){
  const computerMove=pickComputerMove();

  let result='';
  if(playerMove ==='Scissors'){
    if(computerMove==='Rock'){
      result='You lose'
    }else if(computerMove==='Paper'){
      result='You win'
    }else if(computerMove==='Scissors'){
      result='Tie'
    }
  }else if(playerMove==='Paper'){
    if(computerMove==='Rock'){
      result='You win'
    }else if(computerMove==='Paper'){
      result='Tie'
    }else if(computerMove==="Scissors"){
      result='You lose'
    }
  }else if(playerMove==='Rock'){
    if(computerMove==='Rock'){
      result='Tie'
    }else if(computerMove==='Paper'){
      result='You lose'
    }else if(computerMove==='Scissors'){
      result='You win'
    }
  }

  if(result==='You win'){
    score.wins+=1
  }else if(result==="You lose"){
    score.losses+=1
  }else if(result='Tie'){
    score.ties+=1
  }

  // localStorage.setItem('messsage','hello')
  localStorage.setItem('score',JSON.stringify)

  alert(`You picked ${playerMove}. Computer picked ${computerMove}.${result}Wins:${score.wins},Losses:${score.losses},Tie:${score.ties}`)
}

/* local storage only support string */

rt
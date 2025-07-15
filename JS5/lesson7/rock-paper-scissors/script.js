// let computerMove='';

function pickComputerMove(){
  const randomNumber=Math.random()

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
  // console.log('after')
}
/* scope
-limit where a variable exists */

/* Return Statement
-lets us get a value out of a function */

/* following the code line-by-line=tracing the code */

/* compare the 2 solutions:
-Global variable 
-return  

best practice- keep variable inside a scope
*/

function playGame(playerMove){
  const computerMove=pickComputerMove();

  let result='';
  /* fddssssssrtrtrt */
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
  alert(`You picked ${playerMove}. Computer picked ${computerMove}.${result}`)
}

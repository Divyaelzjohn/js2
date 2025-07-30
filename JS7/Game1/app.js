const computerChoiceDisplay=document.getElementById('computer-choice')
const userChoiceDisplay=document.getElementById('user-choice')
const resultDisplay=document.getElementById('result')
// accessing HTML element fgf
const possibleChoices=document.querySelectorAll('button')    //getting the all the buttons

let userChoice    //declaring a variable to store the users choice
let computerChoice
let result

//adding event listeners to each button
possibleChoices.forEach(possibleChoices=>possibleChoices. addEventListener('click',(e)=>{                           
  userChoice=e.target.id       
  userChoiceDisplay.innerHTML=userChoice
  generateComputerChoice()
  getResult()
}))

function generateComputerChoice(){
  const randomNumbers=Math.floor(Math.random()*3)+1
  // console.log(randomNumbers)
  if(randomNumbers===1){
    computerChoice="rock"
  }
  if(randomNumbers===2){
    computerChoice="scissors"
  }
  if(randomNumbers===3){
    computerChoice="paper"
  }
  computerChoiceDisplay.innerHTML=computerChoice
}

function getResult(){
  if(computerChoice===userChoice){
    result='Its a draw!' 
  }
  if(computerChoice==='rock' && userChoice==='paper'){
    result=' you lost '
  }
  if(computerChoice==='rock' && userChoice==='scissors'){
    result=' you lost'
  }
  if(computerChoice==='paper' && userChoice==="scissors"){
    result='you win'
  }
  if(computerChoice==='paper' && userChoice==="rock"){
    result='you lose'
  }
  if(computerChoice==='scissors' && userChoice==="rock"){
    result='you win'
  }
  if(computerChoice==='scissors' && userChoice==="paper"){
    result='you lose'
  }
  resultDisplay.innerHTML=result
}
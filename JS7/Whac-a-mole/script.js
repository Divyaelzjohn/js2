const squares=document.querySelectorAll('.square')
const mole=document.querySelector('.mole')
const timeLeft=document.querySelector('#time-left')
const score=document.querySelector('#score')

let result=0
let hitPosition
let currentTime=60
let timeId=null

function randomSquare(){
  squares.forEach(square=>{
    square.classList.remove('mole')
  })

  // let randomPostion=squares[Math.floor(Math.random()*9)]
  // console.log(randomPostion)
  // console.log(Math.floor(Math.random()*9))

  let randomSquare=squares[Math.floor(Math.random()*9)]
  randomSquare.classList.add('mole')

  hitPosition=randomSquare.id
}

squares.forEach(square=>{
  square.addEventListener('mousedown',()=>{
    if(square.id==hitPosition){
      result++
      score.textContent=result
      hitPosition=null
    }
  })
})

// randomSquare()

function moveMole(){
  // let timeId=null
  timeId= setInterval(randomSquare,1000)
}

moveMole()

function countDown(){
  currentTime--
  timeLeft.textContent=currentTime

  if(currentTime== 0){
    clearInterval(countDownTimeId)
    clearInterval(timeId)
    alert('GAME OVER! Your final score is'+result)
  }
}
let countDownTimeId=setInterval(countDown,500)
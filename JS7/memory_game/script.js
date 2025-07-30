const cardArray=[
  {
    name: 'fries',
    img: 'images/fries.png'
  },
  {
    name: 'cheeseburger',
    img: 'images/cheeseburger.png'
  },
  {
    name: 'ice-cream',
    img: 'images/ice-cream.png'
  },
  {
    name: 'pizza',
    img: 'images/pizza.png'
  },
  {
    name: 'milkshake',
    img: 'images/milkshake.png'
  },
  {
    name: 'hotdog',
    img: 'images/hotdog.png'
  },
  {
    name: 'fries',
    img: 'images/fries.png'
  },
  {
    name: 'cheeseburger',
    img: 'images/cheeseburger.png'
  },
  {
    name: 'ice-cream',
    img: 'images/ice-cream.png'
  },
  {
    name: 'pizza',
    img: 'images/pizza.png'
  },
  {
    name: 'milkshake',
    img: 'images/milkshake.png'
  },
  {
    name: 'hotdog',
    img: 'images/hotdog.png'
  }
]                                          //array of cards

// console.log(codeArray)


cardArray.sort(()=>0.5-Math.random())     //random shuffling sort() arrange items in order , when we give it random positive value it moves items randomly

//  it is used to sort array randomly
// console.log(codeArray)

const gridDisplay=document.querySelector('#grid')
const resultDisplay=document.querySelector('#result')
let cardsChosen=[]              //create card storage 
let cardsChosenIds=[]
const cartsWon=[]
const cardsWon=[]

// console.log(gridDisplay)

function createBoard(){
  for(let i=0;i<cardArray.length;i++){
    const card=document.createElement('img')                //create a new <img> 
    card.setAttribute('src','images/blank.png')                   //sets the card img to blank.png , first we don't show the actual image
    
    
    card.setAttribute('data-id',i)       //give card number like  0,1,2  we can use this to know which card was clicked
    // console.log(card, i)
    card.addEventListener('click',flipCart)
    gridDisplay.appendChild(card)        //this adds the card img to the html <div  id="grid">
  }
}
createBoard()

function checkMatch(){
  const cards=document.querySelectorAll('img')
  const optionOneId=cardsChosenIds[0]
  const optionTwoId=cardsChosenIds[1]

  console.log('check for match!')
  if(optionOneId==optionTwoId){
    cards[optionOneId].setAttribute('src','images/blank.png')
    cards[optionTwoId].setAttribute('src','images/blank.png')
    alert('You have clicked the same image')
  }
  
  if(cardsChosen[0]==cardsChosen[1]){
    alert('You found a match!')
    cards[optionOneId].setAttribute('src','images/white.png')
    cards[optionTwoId].setAttribute('src','images/white.png')
    cards[optionOneId].removeEventListener('click',flipCart)
    cards[optionTwoId].removeEventListener('click',flipCart)

    cartsWon.push(cardsChosen)
  }
  else{
    cards[optionOneId].setAttribute('src','images/blank.png')
    cards[optionTwoId].setAttribute('src','images/blank.png')
    alert('Sorry try again')
  }
  resultDisplay.textContent=cardsWon.length
  cardsChosen=[]
  cardsChosenIds=[]

  if(cardsWon.textContent==cardArray.length/2)
    resultDisplay.innerHTML='Congratulations You found thhem all'
}

function flipCart(){
  // console.log(cardArray)
  const cardId=this.getAttribute('data-id')                     // get the number of clicking card
  // console.log(cardArray[cardId].name)        // sets the name of the card clicked
  cardsChosen.push(cardArray[cardId].name)        // stores the name of the card clicked
  // console.log('clicked',cardId)
  // console.log(cardsChosen)
  cardsChosenIds.push(cardId)
  console.log(cardsChosen)
  console.log(cardsChosenIds)
  this.setAttribute('src',cardArray[cardId].img)  
  // checkmatch
  //Changes images from blank to actual food image 

  if(cardsChosen.length===2){
    setTimeout(checkMatch,500)
  }
}   

// g
String(25)
console.log('25'-5)
console.log('25'+5)
// window.document
// window.console.log('window')
// window.alert("hi")

function handleCostDown(event){
  console.log(event  .key)
    if(event.key==='Enter'){
      calculateTotal()
    }
}
function calculateTotal(){
  const inputElement=document.querySelector('.js-cost-input')
  let cost=Number(inputElement.value)
  // console.log(cost)
  // console.log(typeof cost)

  if (cost<40){
    cost=cost+10;
    // console.log(cost)
  }
  document.querySelector('.js-total-cost')
  .innerHTML = `$${cost}`;
  }
  
function subscribe(){
  const buttonElement=document.querySelector('.js-subscribe-button')
    if(buttonElement.innerText=== 'Subscribe'){
      buttonElement.innerHTML='Subscribed'
      buttonElement.classList.add('is-subscribed')          //is subscribed class added when click the subscribe button
    }else{
      buttonElement.innerHTML='Subscribe'
      buttonElement.classList.remove('is-subscribed')
    }
}


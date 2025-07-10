// String(25)
// console.log('25'-5)
// console.log('25'+5)
// window.document
// window.console.log('window')
// window.alert("hi")

function handleCostDown(event){
    if(event.key==='Enter'){
      calculateTotal()
    }
}
function calculateTotal(){
  const inputElement=document.querySelector('.js-cost-input')
  
  let cost=Number(inputElement.value)*100;
  // console.log(cost)
  // console.log(typeof cost)
  if (cost<4000){
    cost=cost+1000;
    // console.log(cost)
  }
  document.querySelector('.js-total-cost').innerHTML = `$${cost/100}`;
  }
/*function subscribe(){
  const buttonElement=document.querySelector('.js-subscribe-button')
    if(buttonElement.innerText=== 'Subscribe'){
      buttonElement.innerHTML='Subscribed'
    }else{
      buttonElement.innerHTML='Subscribe'
    }
}
*/
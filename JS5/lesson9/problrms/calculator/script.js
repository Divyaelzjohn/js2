let calculation=localStorage.getItem('calculation'||'');
displayCalculation();
function updateCalculation(value){
  calculation+=value;
  // console.log(calculation)
  displayCalculation()
  localStorage.setItem('calculation',calculation)
}

function saveCalculation(value){
  localStorage.setItem('calculation',calculation)
}

function displayCalculation(){
  document.querySelector('.js-calculator').innerHTML=calculation;
}

let calculation=localStorage.getItem('calculation'||'');
function updateCalculation(value){
  calculation+=value;
  console.log(calculation)
  localStorage.setItem('calculation',calculation)
}

function saveCalculation(value){
  localStorage.setItem('calculation',calculation)
}
// function changeText(id){
//   id.innerHTML
// =""}

/*function changeText(id){
  id.innerHTML="Ooops!"
}*/

/*document.getElementById("myBtn").onclick = displayDate;
function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}*/

/*function checkCookies(){
  let text=" ";
  if(navigator.cookieEnabled==true){
    text="Cookies are enabled"
  }else{
    text="Cookies are not enabled."
  }
  document.getElementById("demo").innerHTML=text
}
*/
/*
function toUpperCase(){
  const x=document.getElementById("fname");
  x.value=x.value.toUpperCase()
}*/

/*function myMove(){
  let id=null;
  const elem=document.getElementById("animate");
  let pos=0;
  clearInterval(id);
  id=setInterval(frameElement, 5);
  function frame(){
    if(pos==350){
      clearInterval(id)
    }else{
      pos++;
      elem.style.top=pos+"px";
      elem.style.left=pos+"px"
    }
  }
}*/

// function changeText(id){
//   id.innerHTML="Ooops!"
// }

/*function toggleText(){
  const btn=document.getElementById('btn')
  if(btn.innerText==='Subscribe'){
    btn.innerText='Unsubscribe'
  }else{
    btn.innerHTML='Subscribe'
  }
}*/

// function showText(){
//   const input=document.getElementById('userInput').ariaValueMax;
//   document.getElementById('output').innerHTML=input
// }

// function changeColor(){
//   document.body.style.background='yellow'
// }

// let count=0;
// function countClicks(){
//   count++;
//   document.getElementById('clickCount').innerHTML=`Clicked ${count} times`
// }


// function toggleOassword(){
//   const pwd=document.getElementById('password');
//   pwd.type=pwd.type==='password'?'text':'password'
// }


// function changeColor(){
//   document.getElementById('text').style.color='red'
// }

// function disableBtn(button){
//   button.disabled=true;
//   button.innerText='Disabled'
// }

// function addTask(){
//   const input=document.getElementById('taskInput')
//   const task=input.ariaValueMax;
//   if(task){
//     const li=document.createElement('li');
//     li.innerText=task;
//     document.getElementById('taskList').appendChild(li);
//     input.value=''
//   }
// }


// function togglePara(){
//   const p=document.getElementById('para');
//   p.style.display=(p.style.display==='none')?'block':'none'
// }


// function showSqure(){
//   const val=document.getElementById('num').ariaValueMax;
//   document.getElementById('result').innerText='Squre:${val*val}'
// }


// function highlightText(){
//   document.getElementById('highlight').style.backgroundColor="yellow"
// }
// function resetText(){
//   document.getElementById('highlight').style.backgroundColor=''
// }

// function countChars(){
//   const length=document.getElementById('textInput').ariaValueMax.length;
//   document.getElementById('charCount').innerHTML=length
// }


// function showSelected(){
//   const value=document.getElementById('dropdown').value;
//   document.getElementById('selectedValue').innerHTML=`You selected:${value}`
// }

// function calculateSum(){
//   const a=Number(document.getElementById('num1').value);
//   const b=Number(document.getElementById('sumResult').innerHTML=`Sum: ${a+b}`)
// }


// function checkEvenOdd(){
//   const n=Number(document.getElementById('checkNumber').value)
//   const result=(n%2===0)?'Even':'Odd';
//   document.getElementById('resultEO').innerText=result;
// }


// function findFactorial(){
//   let n=Number(document.getElementById('factNumber').value)
//   let fact=1;
//   for(let i=1;i<=n;i++){
//     fact*=i
//   }
//   document.getElementById('resultFactorial').innerHTML=`Factorial:${fact}`
// }


// function checkPrime(){
//   let n=Number(document.getElementById('primeNumber').value);
//   if(n<2){
//     document.getElementById('resultPrime').innerText='Not Prime';
//     return;
//   }
//   for(let i=2;i<=Math.sqrt(n);i++){
//     if(n%i===0){
//       document.getElementById('resultPrime').innerText='Not Prime';
//       return;
//     }
//   }
//   document.getElementById('resultPrime').innerText='Prime'
// }


// function generateTable(){
//   const n=Number(document.getElementById('tableNumber').value);
//   const list=document.getElementById('tableList')
//   list.innerHTML='';
//   for(let i=1;i<=10;i++){
//     const li=document.createElement('li');
//     li.innerText=`${n}x${i}=${n*i}`;
//     list.appendChild(li)
//   }
// }


// function findHCF(){
//   let a=Number(document.getElementById('hcf1').value);
//   let b=Number(document.getElementById('hcf2').value)
//   while(b!==0){
//     let temp=b;
//     b=a%b;
//     a=temp;
//   }
//   document.getElementById('resultHCF').innerText=` HCF:${a}`
// }



// function checkArmstrong(){
//   let num=document.getElementById('armNumber').value;
//   let original=num;
//   let sum=0;
//   for(let i=0;i<num.length;i++){
//     let digit=Number(num[i])
//     sum+=digit**3;
//   }
//   const result=(sum==original==original)?"Armstrong Nmber":"Not Armstrong"
//   document.getElementById('result')
// }


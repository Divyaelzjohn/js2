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
//     console.log(sum)
//   }
//   const result=(sum==original==original)?"Armstrong Nmber":"Not Armstrong"
//   document.getElementById('result')
// }


// document.getElementById("id02").innerHTML=document.getElementById("id01").innerHTML;


// document.getElementById("id02").innerHTML=document.getElementById("id01").firstChild.nodeValue;

// document.getElementById("id02").innerHTML=document.getElementById("id01").childNodes[0].nodeValue


// document.getElementById("demo").innerHTML = document.body.innerHTML;

/*const para=document.createElement("p")
const node=document.createTextNode("This is new.")
para.appendChild(node);
const element=document.getElementById("div1");
element.appendChild(para)*/

/*const para=document.createElement("p");
const node=document.createTextNode("this is new")
para.appendChild(node);

const element=document.getElementById("div1")
const child=document.getElementById("p1")
element.insertBefore(para,child)*/


// function myFunction(){
//   document.getElementById("p1").remove()
// }

// const parent=document.getElementById("div1")
// const child=document.getElementById("p1");
// parent.removeChild(child)


/*const parent=document.getElementById("div1");
const child=document.getElementById("p1");
const para=document.createElement("p");
const node=document.createTextNode("This is new.");
para.appendChild(node);
para.appendChild(node);
parent.replaceChild(para, child)*/

/*function myFunction(){
  const myCollection=document.getElementsByTagName("p");
  for(let i=0;i<myCollection.length;i++){
    myCollection[i].style.color="red"
  }
}*/

/*const myNodelist=document.querySelectorAll("p");
document.getElementById("demo").innerHTML="the innerHTML of the second paragraph is: "+myNodelist[1].innerHTML*/

/*const myNodelist=document.querySelectorAll("p")
document.getElementById("demo").innerHTML="this document contains "+myNodelist.length+"paragraphs"*/


// function myFunction(){
//   const myNodelist=document.querySelectorAll("p");
//   for(let i=0;i<myNodelist.length;i++){
//     myNodelist[i].style.color="red"
//   }
// }










//Basic programs

// function changeText(){
//   document.getElementById("text").innerHTML="Text changed"
// }

// function toggle(){
//   let btn=document.getElementById("btn");
//   if(btn.innerHTML==="Subscribe"){
//     btn.innerHTML="Unsubscribe";
//   }else{
//     btn.innerHTML="Subscribe"
//   }
// }

/*function showValue(){
  let value=document.getElementById("myInput").value;
  document.getElementById("display").innerHTML=value
}*/

/*function changeColor(){
  document.body.style.backgroundColor="lightblue"
}*/

/*let count = 0;
function increase() {
  count++;
  document.getElementById("counter").innerHTML = count;
}
function decrease() {
  count--;
  document.getElementById("counter").innerHTML = count;
}*/

/*
function hide(){
  document.getElementById("para").style.display="none"
}
function show(){
  document.getElementById("para").style.display="block"
}*/

/*function checjArmstrong(){
  let num=document.getElementById("num").value;
  let sum=0;
  let temp=num;
  let digits=num.length;

  while(temp>0){
    let digit=temp%10;
    sum+=digit ** digits;
    temp=Math.floor(temp/10)
  }

  if(sum==num){
    document.getElementById("result").innerHTML="armsrong number"
  }else{
    document.getElementById("result").innerHTML="Not Armstrong"
  }
}*/


/*// sqre root
function findSquareRoot() {
  let n = document.getElementById("num").value;
  let i = 1;
  while (i * i <= n) {
    if (i * i === Number(n)) {
      document.getElementById("output").innerHTML = "Square root is " + i;
      return;
    }
    i++;
  }
  document.getElementById("output").innerHTML = "Not a perfect square";
}*/


/*// prime number

function checkPrime(){
  let num=document.getElementById("num").ariaValueMax;
  if(num<=1){
    document.getElementById("primeResult").innerHTML="Not Prime";
    return;
  }
  for(let i=2;i<num;i++){
    if(num%i===0){
      document.getElementById("primeResult").innerHTML="Not Prime";
      return;
    }
  }document.getElementById("primeResult").innerHTML="Prime"
}*/

/*//todo list
function addTask(){
  let task=document.getElementById("task").value;
  if(task.trim()!==""){
    let li=document.createElement("li")
    li.innerText=task;
    document.getElementById("todoList").appendChild(li);
    document.getElementById("task").value=" "
  }
}*/

function pslitBill(){
  let total =Number(document.getElementById('total').value);
  let people=Number(document.getElementById("people").value)
  if(people>0){
    let result=(total/people).toFixed(2);
    document.getElementById("perPerson").innerHTML=`Each pays: ₹${result}`
  }else{
    document.getElementById("perPerson").innerHTML="People must be>0"
  }
}
// document.getElementById("demo").innerHTML="Hello World!"


// const element=document.getElementById("id01");
// element.innerHTML="New heaing"

// document.getElementById("demo").innerHTML="Date: "+Date();

// document.write(Date())

/*function validateForm(){
  let x=document.forms["myForm"]["fname"].value;
  if(x==" "){
    alert("Name must be filled out");
    return false
  }
}*/
/*
function changeText(id){
  id.innerHTML="Oops!"
}*/

/*function displayDate(){
  document.getElementById("demo").innerHTML=Date()
}*/

/*document.getElementById("myBtn").onclick=displayDate;
function displayDate(){
  document.getElementById("demo").innerHTML=Date()
}*/

/*function checkCookies(){
  let text=" ";
  if(navigator.cookieEnabled==true){
    text="Cookies are enabled"
  }else{
    text="Cookies are not enabled"
  }
  document.getElementById("demo").innerHTML=text
}*/

/*function upperCase(){
  const x=document.getElementById("fname")
  x.value=x.value.toUpperCase()
}*/
/*
function mOver(obj){
  obj.innerHTML="Thank You"
}
function mOut(obj){
  obj.innerHTML="Mouse Over Me"
}*/
/*
function mOver(obj){
  obj.innerHTML="Thank You"
}
function mOut(obj){
  obj.innerHTML="Mouse Over Me"
}*/
/*
function mDown(obj){
  obj.style.backgroundColor="#lec5e5"
  obj.innerHTML="Release Me"
}
function mUp(obj){
  obj.style.backgroundColor="#lec5e5";
  obj.innerHTML="Release Me"
}
function mUp(obj){
  obj.style.backgroundColor="#D94A38";
  obj.innerHTML="Thank You"
}*/
/*
document.getElementById("myBtn").addEventListener("click",displayDate);

function displayDate(){
  document.getElementById("demo").innerHTML=Date()
}*/
/*
document.getElementById("myBtn").addEventListener("click",function(){
  alert("Hello World!")
})*/
/*
var x=document.getElementById("myBtn");
x.addEventListener("click",myFunction);
x.addEventListener("click",someOtherFunction);

function myFunction(){
  alert("Hello world")
}
function someOtherFunction(){
  alert("This function also executed")
}
*/
/*
var x=document.getElementById("myBtn");
x.addEventListener("mouseover",myFunction);
x.addEventListener("click",mySecondFunction);
x.addEventListener("mouseout",myThirdFunction);

function myFunction(){
  document.getElementById("demo").innerHTML+="Moused over!<br>";
}

function mySecondFunction(){
  document.getElementById("demo").innerHTML+="clicked <br>"
}
function myThirdFunction(){
  document.getElementById("demo").innerHTML+="Moused out"
}*/

/*
window.addEventListener("resize",function(){
  this.document.getElementById("demo").innerHTML=Math.random()
})*/

/*
let p1=5;
letp2=7;
document.getElementById("myBtn").addEventListener("click",function(){
  myFunction(p1,p2)
})

function myFunction(a,b){
  document.getElementById("demo").innerHTML=a*b
}*/
/*
document.getElementById("myP1").addEventListener("click",function(){
  alert("You clicked the white element")
},false)

document.getElementById("myDiv1").addEventListener("click",function(){
  alert("You clicked the orange element!")
},false)

document.getElementById("myp2").addEventListener("click",function(){
  alert("You clicked the orange element!")
},true);

document.getElementById("myDiv2").addEventListener("click",function(){
  alert("you clicked the orange element!")
},true)*/
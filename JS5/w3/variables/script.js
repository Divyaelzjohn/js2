// x=5;
// y=6;
// z=x+y;
// document.getElementById("demo").innerHTML="The value of z is: "+z

// let length=16;
// let weight=7.5;

// let color="Yellow";
// let lastName="Johnson"

// let x=true;
// let y=true;

// const  person={firstName:"John",lastName:"Doe"};

// const cars=["saab","volvo","BMW"]

// const date=new Date("2022-03-25")


// let x=5;
// document.getElementById("demo").innerHTML=(x==8)

// const hour=new Date().getHours();
// let greeting;

// if(hour<18){
//   greeting="Good day!"
// }else{
//   greeting="Good evening"
// }
// document.getElementById("demo").innerHTML=greeting;

// let text=" ";
// let i=1;
// while(i<10){
//   text +=i;
//   i++
// }
// document.getElementById("demo").innerHTML=text







// String problems





/*let str="hello";
let reversed=" ";
for(let i=str.length-1;i>=0;i--){
  reversed +=str[i]
}
console.log("Reversed: ",reversed
)
*/

// 2.count characters in string

/*let str="Banana";
console.log("Length: ",str.length)*/

// 3.count vowels in a string

/*let str="javascript";
let count=0;
for(let i=0;i<str.length;i++){
  let ch=str[i];
  if("aeiou".includes(ch)){
    count++
  }
}
console.log("Vowel count: ",count)*/


// 4.remove spaces from a string

/*let str="hi there how are you";
let result="";
for(let i=0;i<str.length;i++){
  if(str[i]!==" "){
    result+=str[i]
  }
}
console.log("Without spaces:", result)*/


// 5.check if a string is palindrom

/*let str="madam";
let reversed="";
for (let i=str.length-1;i>=0;i--){
  reversed+=str[i]
}
if(str===reversed){
  console.log("Palindrom")
}else{
  console.log("Not a palindrom")
}*/

// 6.convert to uppercase

/*let str="hello";
let upper="";
for (let i=0;i<str.length;i++){
  let code=str.charCodeAt(i);
  if(code >=97 && code<=122){
    upper+=String.fromCharCode(code-32)
  }else{
    upper+=str[i]
  }
}
console.log("Uppercase: ",upper)*/


// 7.convert to lowercase

/*let str="HELLO";;
let lower="";
for(let i=0;i<str.length;i++){
  let code=str.charCodeAt(i);
  if(code >=65 && code<=90){
    lower+=String.fromCharCode(code+32)
  }else{
    lower+=str[i]
  }
}
console.log("Lowercase: ",lower)*/


// variables

// 8.calculate area of a rectangle

/*let length=10;
let width=5;
let area=length*width;
console.log("area : ",area)*/

// 9.simple interst

/*let p=1000; //principal
let r=5;    //rate
let t=2;    //time
let si=(p*r*t)/100;
console.log("Simple interst:",si)*/

// 10.swap 2 Number

/*let a=1000;
let b=2;
let temp=a;
a=b;
b=temp;
console.log("a=",a)
console.log("b=",b)*/


// 11.name
// let name=prompt("name?");
// alert("hello, "+name+"!")

// add two no using user input

/*let n1=prompt("n1")
let n2=prompt("n2")

let sum=Number(n1)+Number(n2)
alert("Sum "+sum)*/

// Booleaneg

/*let isLoggedIn=false;
if(isLoggedIn){
  console.log("Welcome")
}else{
  console.log("Please log in")
}*/




// BOOLEANS

/*let num=10;
let isPositive=true;
console.log("Is positive",isPositive)*/

// 2.2 no are equal
/*let a=5
let b=5
let isEqual = a===b
console.log("Equal",isEqual)*/

// combine conditions with AND/OR

/*let age=25;
let hasID=true;

if(age>=18 && hasID){
  console.log("Allowed to enter")
}else{
  console.log("Not allowed")
}
*/

/*let hasTicket=false;
let isVIP=true;
if(hasTicket||isVIP){
  console.log("You can enter")
}else{
  console.log("Entry denied")
}*/


/*let number=15;
let inRange= number>=10 && number<=20
console.log(inRange)*/

let num=34;
let check=num>0 && num%2===0
console.log(check)
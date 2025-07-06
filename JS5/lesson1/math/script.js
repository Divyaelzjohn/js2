// document.getElementById("demo").innerHTML=
// "<p><b>Math.E:</b>"+Math.E+"</p>"+
// "<p><b>Math.E:</b>"+Math.PI+"</p>"


// Math Methods

Math.round()
Math.ceil()
Math.floor()
Math.trunc()
Math.random()
Math.sign()      //positive 1 negative -1 zero 0


/*let num=-25;
let result=Math.abs(num)
console.log(":abs is:", result)
*/

/*let base=2;
let exponent=4;
let power=Math.pow(base,exponent)
console.log("pow",power)*/

/*let a=10,b=25,c=5;
console.log("Max",Math.max(a,b,c))
console.log("Min",Math.min(a,b,c))*/

/*let number=4.7;
console.log("Round",Math.round(number))
console.log("Floor",Math.floor(number))
console.log("ceil:",Math.ceil(number))*/

/*let randomNum=Math.floor(Math.random()*100)+1;
console.log("Random number",randomNum)*/

/*let x=81;
let sqrt=Math.sqrt(x)
console.log("Squre root ",sqrt)*/

/*let num=64;
let cubeRoot=Math.cbrt(num)
console.log("Cube root",cubeRoot)*/

/*let angle=30;
let radians=angle*(Math.PI/180)
console.log("sin: ",Math.sin(radians))
console.log("Cos: ",Math.cos(radians))
console.log("Tan(radians")*/

/*let n=1000;
console.log("Log base 10:",Math.log10(n))
console.log("Natural log:",Math.log(n))*/

/*let radius=Math.PI;
let degrees=radians*(180/Math.PI)
console.log("Degrees",degrees)*/


// document.getElementById("demo").innerHTML=Math.floor(Math.random()*11)
// Math.random()*10  --0 to 9

//numbers

// let x=0.2+0.1
// document.getElementById("demo").innerHTML="0.2+0.1= "+x
// let y=(0.2*10+0.1*10)/10;
// document.getElementById("demo").innerHTML="jj"+y

// document.getElementById("demo").innerHTML=10/"apple"  //NaN

// let x=123;
// let y=new Number(123)
// document.getElementById("demo").innerHTML=typeof x+typeof y
// document.getElementById("demo").innerHTML=(x===y)

// let x=9999999999999999
// let y=BigInt("9999999999999999")
// document.getElementById("demo").innerHTML=x+"<br>"+y

/*let x=9007199254740995
let y=9007199254740995
let z=x*y
document.getElementById("demo").innerHTML=z*/

// NUMBER METHODS


// let x=123
// document.getElementById("demo").innerHTML=x.toString()+"<br>"+(123).toString()+"<br>"+(123).toString()+"<br>"+(100+23).toString()



// toString
// let x=123;
// document.getElementById("demo").innerHTML=x.toString()+"<br>"+(123).toString()+"<br>"+(100+23).toString()

// let x=123;
// let text=x.toString(2)
// document.getElementById("demo").innerHTML=text

// let x=9.656;
// document.getElementById("demo").innerHTML=
// x.toExponential()+"<br>"+
// x.toExponential(2)

// let x=9.656;
// document.getElementById("demo").innerHTML=
// x.toFixed(0)+"<br>"+
// x.toFixed(2)
// document.getElementById("demo").innerHTML=
// x.toPrecision()+"<br>"+
// x.toPrecision(2)+"<br>"


// let x=123;
// document.getElementById("demo").innerHTML=x.valueOf()+"<br>"+(123).valueOf()

// let x=Number.EPSILON;
// document.getElementById("demo").innerHTML=x

// let x=Number.MAX_VALUE
// document.getElementById("demo").innerHTML=x

// let x=Number.MIN_VALUE;
// document.getElementById("demo").innerHTML=x


// let x=Number.MIN_SAFE_INTEGER;
// document.getElementById("demo").innerHTML=x

// let x=1/0;
// document.getElementById("demo").innerHTML=x

// let x=Number.POSITIVE_INFINITY
// document.getElementById("demo").innerHTML=x



// STRINGS

// let text="john Doe"
// console.log(text)

// let caeName1="Volvo XC60"
// let carName2='Volvo XC60'

// document.getElementById("demo").innerHTML=carName1+" "+carName2

// convert a number into a string
/*let str="45.67"
let num=Number(str)
console.log(num)
console.log(typeof num)*/

// Round a number
/*let num=3.14159;
let rounded=num.toFixed(2)
console.log(rounded)*/

// convert toFixed() result to number
/*
let num=5.6789;
let rounded=Number(num.toFixed(1));
console.log(rounded)*/

// check if value is NaN using isNaN()

/*let value="hello"
console.log(isNaN(value))

let value2="123";
console.log(isNaN(value2))*/

// parse a string to integer parse INt()
/*let value="123abc";
let parsed=parseInt(value)
console.log(parsed)*/

// Parse float using parseFloat()
/*let value="12.34px";
let parsed=parseFloat(value)
console.log(parsed)*/

// convert bimary striing to number
/*let binary="1010";
let number=parseInt(binary, 2)
console.log(number)*/

// convert number to binary string usimg toString(base)

/*let num=10;
let binary=num.toString(2)
console.log(binary)*/

// number with exponential notation
/*let num=1234;
console.log(num.toExponential())*/


// convert number to string

/*let num=2024;
let str=num.toString();
console.log(str);
console.log(typeof str)*/



// check even or odd

/*let num=7;
if(num%2===0){
  console.log("Even");
}else{
  console.log("Odd");
}*/


// Sum of Digit

/*let num=1234;
let sum=0;
while(num>0){
  sum=sum+(num%10);
  num=Math.floor(num/10)
}
console.log("Sum: ",sum)*/

// Reverse a number

/*let num=123;
let Reverse=0;
while(num>0){
  let digit=num%10;
  Reverse=Reverse*10+digit;
  num=Math.floor(num/10)
}
console.log("Reversed ",Reverse)*/

// count digits in anumber

/*let num=98765;
let count=0;
while(num>0){
  count++;
  num=Math.floor(num/10)
}
console.log("Total digits: ",count)*/

// check armstrong number
/*let num=153;
let temp=num;
let sum=0;
while(temp>0){
  let digit=temp%10;
  sum=sum+(digit*digit*digit);
  temp=Math.floor(temp/10);
}
if(sum===num){
  console.log("Armstrong number")
}else{
  console.log("Not armstrong")
}*/

// find largest digit in a number

/*let num=56789;
let max=0;
whle(num>0){
  let digit=num%10;
  if(digit>max){
    max=digit;
  }
  num=Math.floor(num/10)
}
console.log("Largest Digit:",max)*/

// swap 2 number
/*let a=5,b=9;
let temp=a;
a=b;
b=temp;
console.log("a:",a,"b:",b)*/

// swap 2 numbers
/*let a=5, b=9;
a=a+b;
b=a-b;
a=a-b;
console.log("a:",a,"b: ",b)*/

// check if input is a valid number
/*let inout="123abc";
let result=isNaN(Number(input));
console.log(result?"Not a number":"valid number")

// forcr convert diffrent types to number
let a="42";
let b=true;
let c=null;
let d=" ";
console.log(Number(a))
console.log(Number(b))
console.log(Number(c))
console.log(Number(d))


// Limit decimal p;aces using toFixed()
let price =199.9999;
console.log(price.toFixed(2))

// Add number from string input
let str1="5.5";
let str2="4.2";
let Total=Number(str1)+Number(str2);
console.log("Total: ",total)

// check if values is integer using Number.isInteger()
let x=10;
let y=10.5;
console.log(Number.isInteger(x))
console.log(Number.isInteger(y))

// parse hex string using parseInt

let hex="if";
let result=parseInt(hex, 10);
console.log(result)


// convert  scientific notation to Number

let sci="ie3";
let num=Number(sci);
console.log(num)

// Use NUMBER.MAAx_SAFE_INTEGER
console.log(Number.MAX_SAFE_INTEGER)

// Use number.MIN_SAFE_INTIEGER

console.log(Number.MIN_SAFE_INTEGER)

// let num=255;
console.log("Octal:", num.toString(8))
console.log("Hexadecimal",num.toString(16))
*/



// Strings
/*let answer1="It's alright";
let answer2="He is called 'Johny'";
let answer3='He is caleed "Johny"'
document.getElementById("demo").innerHTML=answer1+"<br>"+answer2+"<br>"+answer3*/

// let text="ABCDEEEEEEJHDJJD"
// document.getElementById("demo").innerHTML=text.length;

// let text="we are the so called \"Vikings\"from the north";
// document.getElementById("demo").innerHTML=text;

// let text='IT\'s alright';
// document.getElementById("demo").innerHTML=text;

// let text="the character \\ is called back slash";
// document.getElementById("demo").innerHTML=text;

// document.getElementById("demo").innerHTML="Hell Dolly"

// let text=
// `The quick
// brown fox
// jumps over
// the lazy dog`
// document.getElementById("demo").innerHTML=text


// let x="John";
// let y=new String("John")

// document.getElementById("demo").innerHTML=typeof x+ "<br>"+typeof y;


// let x="John";
// let y=new String("John");
// document.getElementById("demo").innerHTML=(x===y)

// let x=new String("John");
// let y=new String("John")
// document.getElementById("demo").innerHTML=(x==y)















// let a=10;
// let b=20;
// let sum=a+b;
// console.log("sum:",sum)

// let number=0;
// if(number % 2 ===0){
//   console.log("Even")
// }else{
//   console.log("odd")
// }

// reverse a String
/*
let str="hello";
let reversed=" ";
for(let i=str.length-1;i>=0;i--){
  reversed+=str[i]
}
console.log("Reversed",reversed)

let num=5;
let fact=1;
for(let i=1;i<=num;i++){
  fact+=i;
}
console.log("Factorial",fact)


let number=1234;
let sum=0;
while (number>0){
  sum+=number % 10;
  number=Math.floor(number/10)
}
console.log("sum of digits",sum)

// check prime number
let n=7;
let isPrime=true;
for(let i=2;i<n;i++){
  if(n%i===0){
    isPrime=false;
    break;
  }
}
console.log(isPrime?"Prime":"Not Prime")

let num=3;
for(let i=1;i<=10;i++){
  console.log(`${num}x${i}=${num*i}`)
}

let a=10,b=25,c=15;
let max;
if(a>b&&a>c){
  max=a;
}else if(b>c){
  max=b;
}else{
  max=c
}
console.log("Largest ",max)
*/
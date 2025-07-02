// Boolean and if stateme

/* Booleans are another type of value in js */
/* comparison opereator
 <,>,<=,>=,===,!==
*/

// console.log(3>5)
// console.log(typeof true)

// console.log(5==='5')
// console.log(3>5-5)  //< lower priority

// if(false){
//   console.log('Hello')
// }else{
//   console.log('else')
// }

// const age=15;

// if(age>=18){
//   console.log('You can drive')
// }else if(age>=14){
//   console.log('Almost there')
// }
// else{
//   console.log('You can not drive')
// }

// console.log(true&&true)         //BOTH STATEMENT TRUE AYAL TRUE oenm false ayal false avum 
// console.log(0.2>=0 && 0.2<1/3)

// console.log(true||false)   //1 true ayal true

// console.log(!true)



// Truthy and falsy value  - they actually work with any type of value including numbers and strings
/* falsy value behave just like false . Any value not on this list is truthy
false , 
0 ,
' ',
NaN,not a value '('text'/16)'
undefined, something doesnt have a value
null
// */
// if(0){
//   console.log('truthy')
// }

// const cartQuantity=5;
// if(cartQuantity){
//   console.log('cart has products');
// }

// // console.log(!0)
// console.log('text'/5)

// // let x;
// // console.log(x)         //undefined

// const x=undefined;
// console.log(x);            //NaN


/*shortcuts for if-statements
-Ternary Operator ?:
-Guard Operator &&
-Default Operator ||
*/
// Ternary operator
/* ternary operator act like if else statement */
// const result=0? 'truthy':'falsy'
// console.log(result)

// Guardoperator
/* & operator -fale && value2 and operator stops early doest need to run the code on the right*/

// false && console.log('hello');

// const message= 5 && 'hello'
// console.log(message)
/* it is the shortcut of if statement
let message;
if(condition){
message='hello
}
*/
// const currency='EUR'||'USD'
// const currency= undefined || 'USD';

// console.log(currency)
/* it act like or operator */

/* Lesson6 exercise */
/* create a variable called 'hour' and save the current hour of the day(use 24-houre format and save it as a number between 0 and 23) 
-If an hour is between 6 and 12, display 'Good morning!' in thw console 
-If hore is between 13 and 17, display 'Good afternoon' in the console 
-otherwise , display 'Good night!' in the console
*/
/* 6b.Continuing from 6a , try changing the value in the 'hour' variable to make it display diffrent messages. */
/* 6c.Continuing from 6a , create a variable called 'name' and save your name inside(as a string). Update the if-statement to display your name in eah message. For example:'Good morning ${name}!' */


// const hour= 16

const name='Div'
const hour=9
if(hour>=6 && hour<=12){
  // console.log('Good Morning')
  console.log(`Good morning ${name}`)
}
else if(hour>=13 && hour<=17){
  console.log(`Good afternoon ${name}`)
}
else{
  console.log(`Good night ${name}`)
}

/* 6d.Imagin an musement park that has a discount for children (6 years and younger) or seniors (65 years and older) 
-Create a variable 'age' and save a person's age inside
-create an if-statement that checks if the person qualifies for a discount. If they do , display 'Discount' in the console. Otherwise, display 'No discount in the console
Note:try to use the || operator in your solution
-Try changing the 'age' variable diffrent message
*/

const age=5;

if(age<=6||age>=65){
  console.log('Discount')
}else{
  console.log('No discount')
}

/* 6e.Continuing from exercise 6d, lets say the discount is only availble if it is not a holiday. Create a variable:const isHoliday=true;
-update the code so that in order to get a discount , people must meet the age requirement and it is also not a holiday
-Note:&& has a higher priority than |\ so you may need to use bracjets() to control which code gets done first
-Try changing the value of isHoliday to display diffrent messages
*/

const isHoliday=true;

if((age<=6 || age>=65)&& !isHoliday){
  console.log('Discount')
}else{
  console.log("No discount")
}

// we'll create a coin-flip game 
/* 6f.Generate a random number with Math.random().save it in a variable */

// const randomNumber=Math.random()
// if(randomNumber<0.5){
//   console.log('Heads')
// }else{
//   console.log('Tails')
// }

/* 6h.Instead of displaying 'heads'  or 'tails' in te console.log , save the result in a variable called 'result'*/

// let result;
// if(randomNumber<0.5){
//   result='Heads'
// }else{
//   result='Tails'
// }
// console.log(result)

/* 6i.Let's say we're trying to guess the result . Create a variable called 'guess  and save your guess('heads' or 'tails')
-if your guess matches the result, display 'You Win!' in the console
-If your guess does not match the result , display 'You lose!'*/

// let guess='Tails';
// if(guess===result){
//   console.log('You Win')
// }else{
//   console.log('You lose')
// }

/* (Challenge) instead of using if-statement in the previous exercise try switching them into ternary operator(condition?A:B) */

const result=randomNumber<0.5? 'Heads':'Tails';
console.log(result)

const guess='Tails';
console.log(guess===result?'You win!':'You lose')

/* 6k.Lets say the cart has maximum quantity of 10. before updating the quantity , check if the quantity will be greater than 10:
-if it will , display a popup saying  ;The cart is full  and don't update the quantity
-Otherwise, update the quantity and cosole.log() as usual
*/

/* 6i. in exercise 5i-5k ,we create the 'Remove from cart ,'-2' , and '-3' buttons. Before updating the quantity, check if it will go below 0:
-If it will , create a popup saying 'Not enough items in the cart' and don;t update the quantity 
-Otherwise , update the quantity and console.log() it as usual
*/

/*  */

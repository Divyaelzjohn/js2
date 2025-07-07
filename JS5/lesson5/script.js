// /* Variables */

// let x = 3;                    //assigning a variable
// console.log(2);

// // let calculate=2+2;
// const calculate=2+2;
// console.log(calculate);
// console.log(calculate+2);

// let result = calculate+2;
// const result=calculate+2
// console.log(result);

// let message = 'Hello';
// const message='hello';
// console.log(message);
// console.log(';')
/* let create a new variable*/
/* semicolons ; = end of the instruction */

// x=6;                    //reassigning a variable
// console.log(x);

/* we cant use let again because let create a new variable */

// x= x+1
// console.log(x)

/* */

/* 3 ways to create variables in JS */

// const cant change its value later 
// const a=2;
// console.log(a);
/* best practice = use const by default(onlu use let when we need to change the variable) */


// // var
// var c=2;
// console.log(typeof c);
// console.log(typeof message);




/* lesson5 execrcise */

/*5a.create a <script> element . inside the <script> , create a variable called 'name;, and save your name in this variable( as a string).*/

const name='Divya John'

/* 5b.Continue from 5a, display the message 'My name is:${name}' in the console (insert the 'name' variable created in 5a into this message) */

console.log(`My name is:${name}`)

/* 5c.At a resturant, you order 1 cofee($5) ,2 bagels($3 each),and 1 soup ($9). Calculate the cost and save it in a variable called cost*/

const cost=(5+2*3+9)

/* 5d.continuing from 5c, display 'Cost of food:$${cost}'in the console*/

console.log(`Cost of food:${cost}`)

/* 5e.Let's say the restaurant charges a 10% tax.Using the 'cost variable from 5c, calculate the tax(hint: multiply by 0.1), and save the result in a variable.*/

var tax=cost*0.1


/* 5f.Continuing from 5e, display 'Tax(10%):$${tax}' in the console.*/

console.log(`Tax(10%):$${tax}`)

/* 5g.Continueing from 5f, calculate the total (cost+tax), save it in a variable called 'totaCost,and display the message 'Total cost:$${totalCost}' in the console.*/

var totalCost=cost+tax
console.log(`Total cost $${totalCost}`)

/* 5h.In the Cart Quantity project , add 2 more buttons '+4 and '+5' , which increase the quantity by 4 and 5 when you click them.Try using += */

// project1

/* 5i. In the Cart Quantity project, add a button 'Remove from cart', which decreases the cart quantuty by 1. */


/* 5j.Add 2 buttons '-2 and '-3, which decrease the quantity by 2 and 3 */

/* 5k.Use the shortcuts --and-=in 5i and 5j */

/* 5l.Add the HTML sturucture )<!DOCTYPE html>,<html>,<head>,<body>) Add a <title> with the text 'Calculator'*/
/* 5m.Create these buttons 1,2,3,+,= */
/* 5n.Create a <script>, create a variable called 'Calculation',and save an empty string inside:let calculation =';(This variable will store the calculation like '1,2'or '11+2+2) */
/* 5o. when we clickthe '1' button : 
* Add the string '1' to the calculation variable :calculateion+='1';
*Display the calculation in the console :console.log(calculation)*/
/* 5p.Do the same for the '2','3', and '+' buttons (add'+'instead of'+') */
/* 5q.When we click the'=' button, use  the code:eval(calculation);(eval(...)converts the calculation string into actual math)
-save the result back in 'calculation
:calculation=eval(calculation);
-Display the result in the console:conosle.log(calculation);*/
/* 5r. create the rest of the buttons in the calculator. To create multiple rows of buttons , put the buttons inside <p> element like this:
*/                


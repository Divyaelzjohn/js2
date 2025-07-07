// objects- groups mulatiple values together
/*
const product={
  name:'socks',
  price:1090
};
console.log(product)
console.log(product.name)
console.log(product.price)

product.name='cotton socks'
console.log(product)

product.newProperty=true;
console.log(product)

delete product.newProperty;
console.log(product)
*/

/* Why we use objects? -make our code more organized -let us group multiple values together
-let us use multiple values together */

/* Bracket Notation
-let us use properties that dont work with dot notaion */

/* which one shold we use?
-use dot notatiom by default
-for properties that don't work, use bracket notaion 
*/

const product2={
  name:'shirt',
  'delivery-time':'1 day',
  rating:{
    stars:4.5,
    count:87
  },
  fun:function function1(){
    console.log('function inside the object')
  }
};
console.log(product2);
console.log(product2.name)
console.log(product2['name'])
// console.log(product2.delivery-time)
console.log(product2['delivery-time'])
console.log(product2.rating.count)
product2.fun();
console.log(typeof console.log)

//  function is another type of value 
// function inside object is called method

/* build in objects 
-Math
-console
-JSON
-local storage
*/

/* JSON-javascript notation
   a syntax similar to javascript object 
   -when we send data between computer
   -Used to store data */

/* JSON OBJECT IS USED TO CONVERT JAVASCRIPT OBJECT TO JSON */

/* convert javascript into JSON */
/*
console.log(typeof console.log)
console.log( JSON.stringify(product2));*/

/* convert JSON into javascript */
/*console.log(JSON.stringify(product2));
const jsonString=JSON.stringify(product2)
console.log(JSON.parse(jsonString))*/


/* variables are temporary
-if we refresh/close the page , all the variable are deleted 
-localstorage save values more permanently
-variables are temporary*/



/* 8a.Let's say in the amazon project , we have a basketball product. This product has a name of 'basketball', a price of 2095 cents. Create an object to represent this product and display it in the console */

/* 8b.Continuing from 8a, let's say we want to increase the price by 500 cents.Use dot notaion to increase the price , and display the updated objects in the console. */

/*8c. Using brackets notaion, add a property 'delivery-time' to the object with the value '3 days'. Display the update object in the console. */

/* 8d.create a function 'comparePrice(product1, product2)', which takes 2 products (with 'name' and 'price' properties) and returns the product that is less expensive. Create 2 products and try out the function */

/* 8e.Create a function 'isSameProduct(product1, product2)' ,which returns true if 2 products have the same values inside ('name' and 'price').
if not, return false.Create are references so you can't compare them directly*/

/* 8f.Using Google or A.I.tool, search how  to convert a string to all lowercase with javaScript ('Good Morning'=>'good morning') */

/* 8g.Search how to repeat a string many times ('test' 2 times =>'testtest') */

/* 8h.We'll add localstorage to the calculator project. First , make a copy of the project from exercise 7g(see the solution for 7g if needed).
-whenever we update the ca;cu;ation, save it using .setItem()
-when the page is loaded , get the calculation using .getItem()
-Use a default value of"if a calculation does't exist in local storage */

/* 8j.We'll improve the coin flip game exercise 6j to be like the rock paper scissors game.
-copy the code form exercise 6j (see the solution for 6j if needed)
-create 2 buttons to play the game
-When clicking 'heads' play the game with guess='heads'
-When clicking ;tails' play the game with guess ='tails'.
-create a function 'playGame(guess)' to reuse the code */

/* 8k. Use localStorage  to save and load the score(hint"You'll need to use JSON.stringfy() to convert the score object to a string */

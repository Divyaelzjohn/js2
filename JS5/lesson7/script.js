/* function lets us reuse code
-This only creates a funcyion. It doesn't run code inside */

/*function function1(){
  console.log('Hello')
  console.log(2+2)
}
function1()
*/

/* return = gets a value out of a function
Parameter=puts a value into a function */


// function calculateTax(cost, taxpercent=0.1){
//   // console.log(1000*0.1)
//   console.log(taxpercent)
//   console.log(cost*taxpercent)
// }

// calculateTax(2000, 0.2)

// calculateTax(5000)

/* 7a. Create a function called 'greet' that display the message 'Hello!' int he console . call/run this function a few times using : greet()  */
// function greet(){
//   console.log('Hello')
// }

// greet()
// greet()

/* 7b.Continuing from 7a , add a parameter called 'name' to the 'greet' function and display a few times with diffrent names:greet('Simon')*/

// function greet(name){
//   console.log(`Hello ${name}`)
// }
// greet('Simon')
// greet('Alice')

/* 7c. Try calling greet() without a name(it will display 'Hello undefined!'). Modify the function so that if 'name' is undefined, it will display 'Hi there!' instead.
(Hint:use an if-statement. Since undefined is a falsy value , you can use:if(name{...} to check if 'name' is undefined)) */

// function greet(name){
//   if(!name){
//     console.log('Hi there!')
//   }else{
//     console.log(`Hello ${name}`)
//   }
// }
// greet()

/*7d. create a function 'convertToFahrenheit(celcius)' that takes a number in degrees celcius and return a number in degrees Fahrenheit.
-Formula :Fahrenheit=(celcius*9/5)+32
-convertToFahrenheit(25)=>77 */

// function convertToFahrenheit(celcius){
//   return(celcius*9/5)+32
// }
// console.log(convertToFahrenheit(25))


/*7e.create a function 'convertToCelsius(fahrenheit)' that takes a number in degrees Fahrenheit and returns a number in degrees Celsius.
-Formula : Celsius =(Fahrenheit-32)*5/9 
-convertToCelcius(86)*/

// function convertToCelcius(fahrenheit){
//   return (fahrenheit-32)*5/9
// }
// console.log(convertToCelcius(86))

/*7f.Create a function 'convertTemperature (degree , unit)' that takes a number and unit ('C' or 'F'), and converts it into the other unit.
-convertTemperature(25,'C')=>'77F'
-convertTemperature(86,'F')=>'30C'
Note:return a string, and try to reuse the functions from 7d and 7e.*/

// function convertToFahrenheit(celcius){
//   return (celcius*9/5)+32
// }
// function convertToCelsius(fahrenheit){
//   return (fahrenheit-32)*5/9
// }

// function convertTemperature(degree,unit){
//   if(unit==='C'){
//     const result=convertToFahrenheit(degree)
//     return `${result}F`
//   }else if(unit==='F'){
//     const result=convertToCelsius(degree)
//     return `${result}C`
//   }
// }
// console.log(convertTemperature(25, 'C'))
// console.log(convertTemperature(86, 'F'))

/*7g.Create a function convertLength(length, from, to) that takes a number and a unit ('km' or 'miles') and converts the length to another unit('km' or 'miles').Note:1mile=1.6 km (approximately).
-convertLength(50,'miles','km')=>'80 km'
-convertLength(32,'km','miles')
*/

// function convertLength(length, from, to){
//   if(from==="km" && to==='miles'){
//     return `${length / 1.6} miles`
//   }else if(from === "miles" && to ==='km'){
//     return `${length} ${to}`
//   }
// }
// console.log(convertLength(50, 'miles','km'))
// console.log(convertLength(32, 'km','miles'))
// console.log(convertLength(50, 'km', 'km'))

/* 7h.update convertLength to supoort converting between km,miles, and also feet.Note:1mile=5280 ft,1km=3281 ft(approximately).
-convertLength(5,'miles','km')=>'8km'
-convertLength(5,'miles','ft')=>'26400 ft'
-convertLenghth(5,'km','ft')=>'16405 ft' */

// function convertLength(length, from, to){
//   if(from==='km' && to==='miles'){
//     return `${length/1.6} ${to}`

//   }else if(from==='km' && to ==='ft'){
//       return `${length*3281}${to}`

//   }else if(from==='miles'&& to==='km'){
//     return `$(length *1.6)${to}`

//   }else if(from==='miles' && to ==='ft'){
//     return`${length*5280} ${to}`

//   }else if(from==='ft' && to ==='km'){
//     return `${length/3281} ${to}`

//   }else if(from ==='ft' && to ==='miles'){
//     return`${length/5280}`

//   }else if(from===to){
//     return`${length} ${to}`
//   }
// }
// console.log(convertLength(50, 'miles','km'))
// console.log(convertLength(32,'km','miles'))
// console.log(convertLength(50,  'km','km'))
// console.log(convertLength(5, 'miles','km'))
// console.log(convertLength(5, 'km','ft'))

/* 7i.Update convertLength so that if you give it an invalid unit , it will return `Invalid unit:${unit}'.
-convertLength(5,'lbs','lbs')=>'Invalid unit:'lbs' */

// function convertLength(length, from, to){
//   if(from !=='km' && from!=='miles' && from !=='ft'){
//     return`Invalid unit:${from}`

//   }else if (to!=='km' && from!=='miles'){
//     return `Invalid unit:${to}`

//   }
//   if(from ==='km'&& to ==='miles'){
//     return `${length/1.6} ${to}`

//   }else if(from ==='km' && to ==='ft'){
//     return `${length*3281} ${to}`

//   }else if(from ==='miles' && to ==='km'){
//     return `${length/1.6} ${to}`

//   }else if(from ==='miles'&& to==='ft'){
//     return `${length*5280} ${to}`

//   }else if(from ==='ft' && to =="km"){
//     return `${length/3281} ${to}`

//   }else if(from ==='ft'&& to==='miles'){
//     return `${length/5280} ${to}`

//   }else if(from===to){
//     return `${length}${to}`
//   }
// }
// console.log(convertLength(50,'miles','km'))
// console.log(convertLength(32,'km','miles'))
// console.log(convertLength(50,'km','km'))
// console.log(convertLength(50,'miles','km'))
// console.log(convertLength(5, 'miles','ft'))
// console.log(convertLength(5, 'km','ft'))

// console.log(convertLength(5, 'lbs','lbs'))

/* 7j. Create a copy of the calculator project from exercise 5r (if you didn't do 5r, copy the code for 5r from the solutions)
-Notice there's a lot of duplicated code in the buttons.
-create a function 'updateCalculation  and reuse the code*/


/* 7k.Create a copy of the cart quantity project from exercise 6i.
-create a function 'updateCartQuantity  and reuse the code.*/

/* 7i.Modify 'updateCartQuantity' so  that if the quantity is invalid , alert();
and then return;(this is caleed an early return.). An early return make our code cleaner because we can remove the 'else-if'/'else' */

/*  */
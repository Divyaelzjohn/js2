/* 
What is javascript?
A technology that we use to create websites
-Giving instructions to a computer
-The computer follows our instruction
*/

// alert('hello');
// alert('Good job!');

// console.log(2+2)
// console.log(10-3)
// document.body.innerHTML='Hello';


/*
Syntax
rules that we have to follow when using a programming language
similar to englis(grammer)
*/

// alert'hello');         - syntax error

/* Exercise */

// using alert(..) to display "Good morning!" in popup

/* alert("Good Morning") */

// Display you name in a popup

/*alert('Divya John')

// using math, calculate 10+5 in the console

console.log(10+5)

// calculate 20-5 in the console

console.log(20-5)

// calculate 2+2-5 in the console

console.log(2+2-5)

// use document.body.innerHtml=....; display'Good Morning!' on the web

document.body.innerHTML='Good Morning'

// display your name on the web page

document.body.innerHTML='Divya John'

// You order a T-shirt for $10, socks for $8, and dinnner plates for $20.Use js to calculate the total cost of user order

console.log(10+8+20)

// your bank account has $100 ,you spend $20 on linch, $50 on dinner, and earn $200 from your job. Calculate how much money you have

console.log(100+20-50+200)

// use document.body.innerHTML=...;to make web page blank

document.body.innerHTML=''
*/




// lesson2
/* Number and Math */
/* order operation called operator precedence
---  * /are done first it has same priority so calaculate from left to write
---  + -
 are done after
---  () brackets have the higher priority in the order of operation using this priority changes calculation inside the brackets done first
>,< lower priority
2+2
2-2
10*3
10/2

2,3,4=integer
2.2,2.5=floating point number(floats)
computer have a problem working with floats
*/

// console.log(2+2)
// console.log(10-3)
// console.log(10*3)
// console.log(10/3)

// console.log(2+2+2)
// console.log(2.2+2.2)

// console.log(10.90*2+20.95)
// console.log(10.90*2+20.95+4.99)

// console.log(1+1*3)

// console.log((1+1)*3)

/* syntax rules for brackets*/

// console.log(20.95+7.99*2)        //o/p=36.p3

/* percentage
1%=1/100
1-per, 100-cent

10%=10/100=0.1
*/

// console.log(36.93*0.1)          //36.93

// console.log(20.95+7.99*2*0.1)    //22.548

// console.log((20.95+7.99*2)*0.1)

// computer have a  problem working with floats

// console.log(0.1+0.2)

// console.log(20.95+7.99)

// console.log((2095+799)/100)

// var c=Math.round(2.2)
// var c=Math.round(2.8)
// console.log(c)

// console.log((2095+799)*0.1)

// console.log(Math.round((2095+799)*0.1)/100)

// console.log(Math.round(5.95), Math.round(5.5), Math.round(-5.95))

// console.log(Math.round(-5.05),Math.round(-5.5),Math.round(-5.95))



/* Lesson 2 Exercise -Number and Math */

// 1a.At a restaurant, you order 1 soup for $10, 3 burgers for$8 each , and 1 ice cream for $5. Use JS to calculate the cost of the order

/*console.log(10+(3*8)+5)

// 2b.youre at a resturant with 2 friends (3 people in total) and make the same order as 2a.claculate how much each person pays

console.log((10+(3*8)+5)/3)

//2c. calculate the total cost of a toaster($18.50) and 2 shirts($7.50 each)

console.log(18.50+2*7.50)

//2d. calculate a 10% tax for the total in exercise 2c

console.log((1850+2*750)*0.1)

//2e calculate a 20% tax for the total in 2c(remember that 1%=1/100) so 2020/100=0.2

console.log((18.50+2*7.50)*0.2)

// 2f.callculate the cost of the products 

console.log((1899+799+2095)/100)

// 2g.calculate the total before tax

console.log((2095 + 799 + 1899 + 499) / 100)

// 2h. calculate the 10% tax exactly 

console.log(Math.round(5292*0.1)/100)

//21. calculate order total at the bottom

console.log((5292+529)/100)/0.1

// 2j.lets say we want to always round a number down(2.8=>2) using google or an AI tool , search for the code to do thos

console.log(Math.floor(2.8))

// 2k. lets always round a number up(2.2=>3).Search to how to do this

console.log(Math.ceil(2.2))
*/

/*Challenge Exercise
 we,ll use JS to convert temperature from celsius(C) to Fahrenheit(F) .The formula is
 -Fahrenheit=(Celsius *9/5)+32
 -Celsius=(Fahrenheit-32)*5/9
*/
// The temperature is 25C. Calculate the temperature in Fahrenheit(77)
// The temperature is 86 F.Calculate the temperature in Celcius(30)
// The temperature is 5 C.Calculate the temperature in Fahrenheit(23)

// console.log((25*(9/5))+32)
// console.log((86-32)*(5/9))
// console.log((-5*9/5)+32)



// lesson3
/* Strings string represent text */

// console.log('hello')
// alert('hello')

/* syntax rules for strings */

// Add two String
// console.log('some'+'text')
// console.log('some'+'more'+'text')

// console.log(typeof 2)
// console.log(typeof 'hi')
// console.log('hello'+3)                  //in this 3 converted into string  , it is called type conversion
// // console.log('$28.94')
// // console.log('$'+20.95+7.99)          //this is not right
// console.log('$'+(20.95+7.99))
// console.log('$'+(2095+799)/100)

// console.log('Items('+(1+1)+'):$'+((2095+799)/100))

// alert('Items('+(1+1)+'):$'+((2095+799)/100))

/* crate a string in JS */

// 1.using Single ''
// console.log('Hello')
// 2.using ""
// console.log("Hello")
/*1.letter(a,b,c)
2.number(1,2,3)
3 symbol(!,@,#)
4.escapte character
\'  ,\"  ,\n
console.log(`Hi`)
console.log("Hello")
console.log('I\'m learning js')
alert('some\ntext')    
*/
// 3.using ` `-also known as interpolation=insert value directly into a string
// ${}=insert value directly into a string
// interpolution is cleaner ,multiline string
// console.log(`hello`)
// console.log(`Items(${1+1}):$${(2095+799)/100}`)



/* exercise */

// 3a.create the text 'My name is:' as a string
/*
console.log('My name is:')

// 3b.create your name as a string(for example"'Simon)

console.log('Divya John')

// 3c.Using concatenation ,add the 2 strings from 3a and 3b together to create the tetx:"My name:_"replace_with your name

console.log('My name is'+'Divya John')

// 3d.At a resaurant, you order 1 coffe($5) and 1 bagel($3).Using math, calculate the total cost, and using concatenation , create the text:'Total cost:$_' (replace_ with to tal you calculated)

console.log('Total cost:$'+(5+3))

// 3e.Do the same thing as 3d, but use a template string and interpolation

console.log(`Total cost:$${5+3}`)

// 3f.Display the next from 3e in a popup using alert(...)

alert(`Total cost:$${5+3}`)

// 3g.You order 1 cofee($5.99) and 1 bagel($2.95).Using math, calculate the total cost and using concatenation , create the text:"Total cost:$"(hint:calculate in cents to avoid inaccutacies)

console.log('Total cost:$' +(599+295)/100)

// 3h.Do the same thing as 3g, but use a template string and interpolation

console.log(`Total cost:$${(599+295)/100}`)

// 3i.Display the text from 3h in a popup

alert(`Total cost:$${(599+295)/100}`)

// 3j.Using a multiline string ,create the text from 3h and add a line of text underneath:'Thank you, come again!'.Display both lines in a popup

alert(`Total cost:$${(599+295)/100}
Thank you, come again!`)

// challenge Exercise
// 3k. Using interpolation, create the first line of Text(use math to calculate the numbers 4 and 57.88)

console.log(`Items(${2+2}):$${(2*2095+2*799)/100}`)

// 3l.create second line of text :'Shipping & handling :$9.98'(use math).

console.log(`Shipping & handling: $${(499+499)/100}`)

// 3m.create third line:'Total before tax:$67.86(use math)

console.log(`Total before tax:$${(2*2095+2*799+499+499)/100}`)

// 3n.create fourth line of text:'Estimated tax(10%):$6.79'(use math and Math.round(..); to calculate the exact number)

console.log(`Estimated tax(10%):$${Math.round((2*2095+2*799+499+499)*0.1)/100}`)
*/



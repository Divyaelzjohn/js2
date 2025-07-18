
/* Loops */
/*
document.write("Hello"+"<br>")
document.write("Hello"+"<br>")
document.write("Hello"+"<br>")
document.write("Hello"+"<br>")
*/

//for loop

/*for(var i=0;i<=5;i++){
  // document.write("Hello"+"<br>")
  document.write("i","<br>")
}*/

//while loop

// var i=1
// while(i<=5){
//   document.write(i+"<br>")
//   i++
// }

// var i=10
// while(i>=1){
//   document.write(i + "<br>")
//   i--
// }

//do while

// var i=1;
// do{
//     document.write("Hello"+"<br>")
//     i++
// }while(i<=5)

/*--- functions ---*/
// inbuild functions and user defined functions
// document.write()
// alert()
// typeof

/*
function greetings(name){                       //parameter
    document.write("Good Morning"+ name +"<br>")
}
greetings(" John")                               //argument
greetings(" Smith")
*/
/*
function sum(n1,n2){
  document.write(n1+n2)                         //o/p=30
}
sum(10,20)*/

// return value
/*
function sum(n1,n2){
  return n1+n2
}
var result=sum(10,20)
document.write(result)
*/

/*--- Arrays ---*/
/*var animal=["Elephant","Lion","Cat","Dog"]
// document.write(animal+"<br>")
document.write(animal[0])
animal[0]="Tiger"
document.write(animal[0])
*/
/*
var animal=["Lion","Tiger","Cat","Dog"]
var x=animal.length
// document.write(x)
//access arrays using for loop
for (var i=0;i<x;i++){
  document.write(
    animal[i]+"<br>"
  )
}*/

// add element into a array

/*var animal=["Elephant","Lion","Cat","Dog"]
animal[5]="Fox"
document.write(animal)*/

// or
/*var animal=["Elephant","Lion","Cat","Dog"]
animal.push("Fox","Tiger")
document.write(animal)*/

//delete an element into an array

/*
var animal=["Elephant","Lion","Cat","Dog","Fox"]
// animal.shift()                                  //using shift we can delete first element
// animal.pop()                                    //using pop we can remove last element in an array
// animal.splice(2, 2)                             //we can delete any element , the second is how many items we want to delete
animal.sort()                                      //using this we can get out put in alphabetic order

document.write(animal)
*/
/*
var number=[20,50,40,90,10]
// number.sort()
// document.write(number)

document.write(number[0]+number[3])
*/

/* Strings */

/*var text="Java Script"
var text1="Learn"
// document.write(text[0])                       //string is a character of array    
// document.write(text.charAt(2))                //o/p---v
// document.write(text1.concat(text))            //o/p---Learn javascript
// document.write(text.toUpperCase())
document.write(text.slice(0,4))
*/

/* --- Math object--- */

// var a=5
// document.write(Math.sqrt(a))
// document.write(Math.abs(a))
// document.write(Math.min(10,20,4,50,1))
// document.write(Math.max(10,4,0,100))
// document.write(Math.pow(2,2))
// document.write(Math.floor(12.3))
// document.write(Math.round(12.9))
// document.write(Math.ceil(12.3))
// document.write(Math.random())       //it is no between 0-1

/*
var a=Math.random()
// var rounded=a*10                     //random no between 0-10
var rounded =Math.floor(a*10)           //to remove the floating points
document.write(rounded)
*/


/*--- DOM---Document object model  */
/*
Application programming interface(API) for HTML and XML Documents
HTML DOM is the objext oriented representaion of web page
When web page is loaded browser creates the HTML DOM of the page
Represent all  HTML Elements as objects

<body>
  <h1>Hello</h1>
</body>
in DOM there is a parent child relationship present 
body is parent node of h1 and hello is the child of h1

Accessing Document Object Model
1-getElementById()
2-getElementsByName()
3-getElementsByTagName()
4-getElementsClassName
5-CSS Selectors()
*/

/* GETELEMENTBYID() *///--how to access it
/*
var a=document.getElementById("head1")
console.log(a)
// a.innerHTML="Learn javascript"           //using innerHTML we can hcange element in h1
// a.style.color="blue"                     // change color
*/

/* GETELEMENTBYCLASSNAME() */
/*
var a=document.getElementsByClassName("head1")
// console.log(a)
// a[0].innerHTML="Good Morning"
// a[1].innerHTML="Good morning"
a[2].style.color="red"
*/

/* GETELEMENTBYTAGNAME() */
/*
// var a=document.getElementsByTagName("p")
// // console.log(a)
// a[0].innerHTML="changed paragraph"
// a[1].style.color="blue"
*/
/*
var a=document.getElementsByName("text")[0]
var b=document.getElementById("head")

function message(){
  b.innerHTML="Hello"+a.value
}*/

/*---Using CSSSELECTOR---*/

// var a=document.querySelectorAll("h1")
// // console.log(a)
// a[0].innerHTML="LearnHTML"
// a[1].style.color="red"

// var a=document.querySelectorAll(".hclass")
// console.log(a)

// var a=document.querySelectorAll("#head1")
// console.log(a)


/* Create and remove Elements */
/*
var heading=document.createElement("h1")
function create(){
  heading.innerHTML="Hello World"
  document.body.appendChild(heading)   //appendChild is used to add child node
}
function remove(){
  heading.remove()
}*/

/* create event */

//DOM add events
/*
var heading=document.getElementById("head")
var btn=document.getElementById("btn")

btn.addEventListener("click",changeColor)
heading.addEventListener("mouseover",changeBG)

function changeColor(){
  heading.style.color="red"
}

function changeBG(){
  heading.style.backgroundColor="blue"
}
*/

/* Object oriented programming */

/*let employeee={
  name:"John",
  position:"Accountant",
  salary:3000,
  getSalary:function(){
    document.write("Salary of "+this.name+" is "+this.salary)
  }
}*/

// console.log(employeee)
// document.write(employeee.position)

// employeee.getSalary()

/*let employeee={
  name:"John",
  position:"Accountant",
  position:"Accounted",
  salary:30000,
  getSalary:function(){
    document.write("Salary of "+this.name+" is "+this.salary)
  }
}*/  //--------------to avoid this repetaion using class


/* CLASS */
// class Employee{
//   constructor(name,position,salary){
//     this.name=name
//     this.position=position
//     this.salary=salary
//   }
//   getSalary(){
//     document.write("Salary of"+this.name+" is "+this.salary)
//   }
// }
// let e1=new Employee("John","Accountant",30000)
// // e1.getSalary()

// let e2=new Employee("Anil","Supervisor",4000)
// document.write(e2.name)
// e2.getSalary()

/* INHERITANCE */

class Employee{
  constructor(name,position,salary){
    this.name=name
    this.position=position
    this.salary=salary
  }
  getSalary(){
    document.write("Salary of"+this.name+" is "+this.salary)
  }
}
class Manager extends Employee{

}
class Supervisor extends Employee{

}
/*
let m1=new Manager("Smith","HR Manager",300000)
// console.log(m1)
m1.getSalary()
*/
let s1=new Supervisor("Peter","Operation",40000)
s1.getSalary()


// VARIABLEs
/* Variables store data that can be used or changed later in the program  
TYPES: 
var-function scoped(older, avoid using now)
let-block scoped (can be updated)
const=blockScoped(cannot be updated)

DATA-TYPES
Primitive datatypes->String,Number,Boolean,Null,Undefined,Symbol,BigInt
Non-Primitive->Object,array,Function

OPERATORS
-Arithmetic:+,-,*,/,%
-Comparison:==,===,!=,<,>
-Logic:&&,||,!

CONDITIONALS-used to make decision

LOOPS->Repeats code multiple times
for ,while,do...while

FUNCTIONS-block of reusable codes

ARRAY->List of values

OBJECTS->key-value pair data

EVENT->AN event is something that happends in the browser like a button click, a key press, or a page load

element.addEventListener("eventName",function);                                                    <button id="clickBtn">Click ME</button>                                                        <script>document.getElementById("clickBtn").addEventListener("click",function(){Button Clicked!"}</script>                                                                                                                      DOM->DOM lets js access and change HTML elements,attribute and content dynamically                                                     1.getElementById()                                                             2.querySelector()                                                             3.innerHTML,style,classList                                                      <p id="text">Hello</p>                                                                               <button onclick="changeText()"></button>                                                                          function changeText(){document.getElementById("text").innerHTML="Welcome"}                                                             
ES6:Features                                                                     let - can be changes , const-can't be changed                                                                          Arrow Funcions()=>{} -shorter way to write function                                                                         function greet(name){ return "Hello"+name;}                                                                          const greet=(name)=>"Hello"+name                                                                            console.log(greet("Divya"))                                                                       Template Literals(``Backticks)                                                                    console.log(`my name is ${name}  and I am ${age} years old.`);                                                                                                                                                              DEFAULT Parameter - set default values in function                                                                         function greet(name="Guest"){console.log("Hello"+name)}                                                                          greet("div");greet()                                                                               DESTRUCTURING-extract values from arrays / objects easly                                                                            const user={name:"Divya",age:25};const{name,age}=user; console.log(name);conosle.log(age)
const colrs=["red","green","blue"];const[first,second]=colors;console.log(first)                                                                          Spread and Rest - spread to expand array/object                                                                           const fruits=["apple","banana";const moreFruits=[...fruits,"mango"];console.log(more)]                                                                           function sum(...numbers){ return numbers.reduce((a,b)=>a+b)}  console.lkog(sum(1,2,3,4))                                                                              for...of -loop through iterable values(arrays,strings)                                                                         let color=["red","green","blue"]                                                                          for(let color of colors){ console.log(color)}                                                                         Enhanced  object Literals->Shorter way to define properties and methods                                                                          let name="Divya";letage:25; letuser={name,agge,greet(){return `Hello ${this.name}}}                                                                          console.log(user.greet())                                                                              classes-cleaner syntax for OOP                                                                         class Person{constructor(name){this.name=name;}greet(){console.log("Hello"+this.name)}}                                                                          let p=new Person("Divya")                                                                        p.greet()                                                                               PROMISES->                                                                       let myPromise=new Promise((resolve, reject)=>{ let success=true; if(success){resolve("Success")}else{reject("Error!")}})myPromise                                                                        .then(result=>console.log(result))                                                                        .catch(error=>console.log(error))
*/

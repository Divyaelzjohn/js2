// Array is a list of items stored in a single variable,  Items are indexed( starts at 0), can store any data:strings,numbers,even other arrays or objects
// .push()->Add to end
// .pop()->Remove last item
// .unshift()->add to start
// .shift()->remove first item
// .length->count total items
// []->Access item by index

/*let animals = ["dog", "cat", "rabbit"];
console.log("Start:",animals)
animals.push("tiger")
console.log("After push:",animals)
animals.shift()
console.log(animals)
animals.pop()
console.log(animals)
animals.unshift("elephant")
console.log(animals)
console.log("Total length:",animals.length)*/


/*let movies=["Inception","Interstellar","Avatar"];                 

function displayMovies() {                                      
  let movieList = document.getElementById("movieList");        
  movieList.innerHTML = "";                                     

  movies.forEach(function(movie) {                            
    let li = document.createElement("li");                     
    li.textContent = movie;                                   
    movieList.appendChild(li);                                 
  });
}
function addMovie() {                                         
  let input = document.getElementById("movieInput");         
  let newMovie = input.value.trim();                         
  if (newMovie !== "") {                                    
    movies.push(newMovie);                                   
    input.value = "";                                      
    displayMovies();                                          
  }
}

function removeMovie() {                                  
  movies.pop();                                             
  displayMovies();                                           
}

displayMovies()    */                                        





// Array Methods 
// .map() -> Transform each item in the array
// .filter() ->Keeps only items that match a condition
// .find() -> Finds the first item that matches
// .findIndex() ->Gets the first item that matches
// .some() -> Returns true if any item matches
// .every() ->Returns true if all items match
// .includes() ->Checks if value exists in array
// .slice() -> Returns a copy of array
// .sort() -> Sorts array alphabetically or numerically

// .map
/*let numbers=[1,2,3,4,10,88,33]
let doubles=numbers.map(function(num){
  return num*2
})
console.log(doubles)*/

/*let doubled=numbers.map(num=>num*2)
let prices=[100,200,300];
let discount=prices.map(price=>price*0.9)
console.log(discount)*/

// filter()- keep only matching items

/*let evenNumber=numbers.filter(num=>num%2===0)
console.log(evenNumber)*/

/*let ages=[11,12,31,44]
let adults=ages.filter(age=>age>=18)
console.log(adults)*/


// find() -returns the first item that matches a condition, stop when it finds the first match
// findIndex()->returns yje index of the first matching item. if no match , returns -1

/*let index=numbers.findIndex(num=>num>10)
console.log(index)*/

/*let students = ["Anu", "Brian", "Catherine", "Derek", "Eva"];
let result=students.findIndex(name=> name.includes("D"))
console.log(result)

let result1=students.find(name=> name.startsWith("D"))
console.log(result1)*/


// includes() -It's commonly used tocheck if an array contains a value

/*let colors = ["red", "green", "blue"];
console.log(colors.includes("green"))

let cities = ["Delhi", "Mumbai", "Chennai", "Kochi"];
console.log(cities.includes("Mumbai"))
console.log(cities.includes("Bangalore"))
console.log("Chennai".includes("e"))*/

// Destructuring - Destructuring means extracting values from arraya or objects into separate variables

/*let colors = ["red", "green", "blue"];
// let first = colors[0];       //without destructuring
// let second = colors[1];
let [a, b, c] = colors;
console.log(a);
console.log(b);
console.log(c);*/

// Object destructuring
/* let person = {
  name: "Divya",
  age: 22,
  city: "Kochi"
};
let {name,age,city}=person;

console.log(name)
console.log(age)
console.log(city)*/


// spread operator() - it expands an array or object into individual items

/*let fruits = ["apple", "banana"];
let moreFruits=[...fruits,"mango","orange"]
console.log(moreFruits)*/

// Rest Operator(...)-> It collects multiple values into one variable.

/*function sum(...numbers){
  console.log(numbers);
  return numbers.reduce((acc,curr)=>acc+curr,0)
}
console.log(sum(10,20,30))*/

/*let food = ["pizza", "burger", "pasta"];
let [first, second, third] = food;

console.log(first); 
console.log(second); 
console.log(third);  


let a = [1, 2];
let b = [...a,3, 4];
console.log(b)


function sum(...num){
  return num.reduce((n,a)=>n+a)
}
console.log(sum(1, 2, 3, 4, 5))
*/

// reduce() - > used to reduce an array to a single value (sum, product,max)

// Array.reduce((accumulator, currentValue)=>{
//   return updateValue;
// },initialValue)


// const profile={
//   name: "Divya Elz",
//   course: "JavaScript Full Stack",
//   batch: "Aug 2025"
// }
// const{name, course,batch}=profile;
// document.getElementById("name").textContent=name;
// document.getElementById("course").textContent=`Course:${course}`;
// document.getElementById("batch").textContent=`Batch: ${batch}`
/*
function add(a, b, callback) {
  let sum = a + b;
  callback(sum);
}

add(2, 3, function(result) {
  console.log("The sum is: " + result);
});
*/

// let person = {
//   name: "Divya",
//   profile: {
//     email: "divya@example.com"
//   }
// };
// console.log(person.profile?.email)
// console.log(person.profile?.age)
// let age=person.profile?.age??25;
// console.log(age)





// Asynchronous Javascript-> Asynchronus code allows your program to do other things while waiting for some tasks 



// setTimeout()- runs a function once after a delay

/*console.log("Start")
setTimeout(()=>{
  console.log("This runs after 2 seconds")
},2000)
console.log("End")*/


// setInterval() - runs a function repeatly after every given delay.

/*let count=1;
setInterval(()=>{
  console.log("Repeating:"+count)
  count++
},1000)*/


// Promises ->used to handle asynchronus operations . a promise is either  ,pending, resolved, rejected

/*const  myPromise=new Promise((resolve, reject)=>{
  let success=true;
  if(success){
    resolve("Success!")
  }else{
    reject("Error!")
  }
});
myPromise.then((res)=>console.log(res))
.catch((err)=>console.log(err))*/


// async/await- A cleaner way to write promise using async and await
/*function getData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data loaded!"), 2000);
  });
}

async function loadData() {
  console.log("Loading...");
  const result = await getData();
  console.log(result);
}

loadData();
*/
// error handling(try...catch) 
/*try {
  let x = y + 1;
} catch (error) {
  console.log("Something went wrong:", error.message);
}
*/


/*function updateClock(){
  const now=new Date();
  const time=now.toLocaleTimeString()
  document.getElementById("clock").textContent=time
}

setInterval(updateClock,1000)
updateClock()*/

// Rmider alert
/*setTimeout(()=>{
  alert("Time to take a brek")
},10000)*/

// TimeTimeout-Based Animation

/*setTimeout(()=>{
  document.getElementById("box").style.transform="translateX(300px)";
  document.getElementById("box").style.transition="transform 1s"
},2000)*/

// A promise in javascript is an object that represents that the future results of an asynchronus operation, like 1.API calls, 2.File reading, 3.Timers, it has 3 states: 1.pending-the operation is still ongoing, 2.Resolve(FullFilled)-operation finished successfully, 3.Rejected-operation failed

// let promise = new Promise((resolve, reject) => {

//   if (\/* success */) {
//     resolve("Data loaded");
//   } else {
//     reject("Something went wrong");
//   }
// });

// promise
//   .then((data) => console.log(data))   
//   .catch((error) => console.error(error));

fetch("https://opentdb.com/api.php?amount=5&type=multiple")
  .then(res => res.json())
  .then(data => {
    const questions = data.results;
    console.log(questions);
    // You can now display these on screen
  })
  .catch(err => console.error("Failed to load quiz:", err));


  
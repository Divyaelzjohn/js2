// callback function -> A function passed to another function as an argument

/*function greetUser(name,callback){
  console.log("Hi, "+name)
  callback()
}
function sayBye(){
  console.log("Bye")
}
greetUser("Amal",sayBye)
*/


// IIFE -(Immediately Invoked function expression)-> A function that runs as soon as it is defined
/*(function(){
  console.log("I run immediately")
}())*/

// Closure-> a function that remebers the variable from where it was created.
/*function outer(){
  let count=0;
  return function inner(){
    count++;
    console.log("Count is"+count)
  };
}
const counter=outer()
counter()
counter()*/

// Recursion -> A function calling itself

/*function countdown(n) {
  if (n <= 0) {
    console.log("Done!");
  } else {
    console.log(n);
    countdown(n - 1);
  }
}

countdown(3);*/


/*
const questions = [
  {
    q: "What is the capital of India?",
    options: ["Mumbai", "Delhi", "Chennai"],
    answer: 1,
  },
  {
    q: "Which is the smallest continent?",
    options: ["Asia", "Australia", "Europe"],
    answer: 1,
  },
  {
    q: "How many legs does a spider have?",
    options: ["6", "8", "10"],
    answer: 1,
  },
];
let currentIndex=0;

// closure to track score privately 
function createScoreTracker(){
  let score=0;
  return function(correct){
    if(correct) score++;
    return score;
  };
}

const trackScore=createScoreTracker();

// Callback function to check answer
function handleAnswer(selectedIndex) {
  const isCorrect = selectedIndex === questions[currentIndex].answer;
  const updatedScore = trackScore(isCorrect);

  alert(isCorrect?"Correct!":"Wrong!")

  currentIndex++;
  if (currentIndex < questions.length) {
    loadQuestion();
  } else {
    document.getElementById("question").textContent = "Quiz Finished!";
    document.getElementById("scoreDisplay").textContent =
      "Your score is: " + updatedScore;
  }
}*/


// counter App(Closure keeps count private)

/*function createCounter(){
  let count=0;
  return{
    increase:function(){
      count++; 
      document.getElementById("countDisplay").textContent="count: "+count;
    },
    decrease:function(){
      count--;
      document.getElementById("couuntDisplay").textContent="count: "+count;
    },
  };
}
const counter=createCounter()
*/

function createTipCalculator(tipPercent){
  return function(amount){
    return amount+amount*(tipPercent/100);
  }
}
const calculator15PercentTip=createTipCalculator(15);

function showTotal(){
  const amt=parseFloat(document.getElementById("amount").value);
  const total=calculate15PercentTip(amt)
  document.getElementById("total").textContent="Total with Tip:"+total.toFixed(2)
}

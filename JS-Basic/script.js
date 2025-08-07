// javascript is a programming language used to make web pages interactive. 

// A variableis a container to store data- like a name, age , or score.
/* let used for values that can change 
const -used for values that won't change
var- old version. */

// Javascript data types
/* variable can store diffrent types of data - called data type
String - text inside quotes
number - whole numbers or decimals
Boolean- Yes/No, True/false
Null   - Empty value
undefined-Not assignes yet
Object - Group of values  
*/

// Javascript Operations 
// Operators are used to perform actions on values - like math, comparison, or logic
/* Arithmetic operators -> +, -, *, /, %
comparison operator -> ==, ===, !=, !==,>,<,>=,<=
 Logical operators -> used in conditions with true/false values &&,!,||*/

/* let username="admin";
 let password="1234";
 if(username==="admin"&& password==="1234"){
  console.log("Login successful!")
 }else{
  console.log("Invalid login")
 }*/

  /* usecase--- formvalidation, Game score comparison, Product price check, Logic conditions */

  /*let a=10; let b=3; console.log(a+b);console.log(a-b);console.log(a*b);console.log(a/b);console.log(a%b);console.log(a=="10");console.log(a==="10");console.log(a>b);console.log(a<b); let loggedIn=true; let hasAccess=false; if(loggedIn&&hasAccess){console.log(loggedIn);}else{console.log(hasAccess)};

  let score=85;if(score>=90){console.log("Excellent");else if(score>=70&&score<=89){console.log("Good")};else if(score>=50&&score<=69){"Average"};else{console.log("Fail")}}*/


  // if-else -> This checks if a condition is true and runs diffrent code blocks based on that syntax->if(condition){}else{}
  // switch staement-> switch is another way to handle multiple exact matches syntax -> switch(value){case "A":break; case "B":break;default:}

  // Usecases->form validation,score grade system,Login check
  /*let email="divya@mail.com";if(email===""){alert("Email is required!")}else if(!email.includes("@")){alert("Eneter a valid email")}else{console.log("Valid email submitted")}
  if(score>=90){grade="A";}else if(score>=80){grade="B"}else{grade="C"}
  if(username==="admin"&&password==="1234"){console.log("Login successful")}else{console.log("Invalid credentials")}*/

  // Usecases->Page Navigation,Theme selection,Game Difficulty level
  /* let currentPage="home"; switch(currentPage){case "home": showHomePage();break; case "profile":showProfilePage();break;case "cart":showCartPage();break;default:showNotFound()} */
  /* let selectedTheme="dark";switch(selectedTheme){case "dark";applyDarkTheme();break; case "light":applyLightTheme();break;} */
  /* let level="easy";switch(level){case "easy";startGame(1);break; case "medium": startGame(2);break;case "hard";startGame(3);break;} */


  // Task->
 /* let num=-5; if(num>0){console.log("Positive");else if(num==0){console.log("Zero")};else{console.log("Negative")}}
  let fruit="banana";switch(fruit){case "apple":console.log("Red");break;case "banana":console.log("Yellow");break;case "grape":console.log("Purple");default:console.log("Unknown fruit")}*/


 /* let score=prompt("Enter your score:"); score=Number(score); let grade;if(score>100||score<0){console.log("Invalid score. Please enter between 0 and 100")};else if(score>=90){grade="A";}else if(score>=80){grade="B";}else if(score>=70){grade="C";}else if(score>=60){grade="D";} else{grade="F";}console.log("Your grade is:",grade);if(grade){ console.log("Grade:"+grade); console.log("Your grade is:",grade);switch(grade){ case "A":console.log("Excellent work!");break;case "B":console.log("Not bad,improve more.");break; case "C":console.log("Not bad, improve more.");break;case "D":console.log("You passed, but study harder.");break;case "F":console.log("You failed. Try again!");break;default:console.log("Invalid grade.")}}*/


 /*function generateReport(){
  let name = document.getElementById("nameInput").value;
  let score = Number(document.getElementById("scoreInput").value);
  let grade = "";
  let message = "";

  if (score > 100 || score < 0) {
    document.getElementById("result").innerText = " Invalid score. Please enter a value between 0 and 100.";
    return;
  } else if (score >= 90) {
    grade = "A";
  } else if (score >= 80) {
    grade = "B";
  } else if (score >= 70) {
    grade = "C";
  } else if (score >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }

  switch (grade) {
    case "A":
      message = " Outstanding!";
      break;
    case "B":
      message = " Very Good!";
      break;
    case "C":
      message = " Good.";
      break;
    case "D":
      message = " Needs Improvement.";
      break;
    case "F":
      message = " Fail. Try again!";
      break;
  }

  document.getElementById("result").innerText =
    `Hi ${name}, you scored ${score} and got a '${grade}' grade. ${message}`;
}*/



// LOOps -> Loops let you repeat a block of code multiple times - super usefull for
/* - SHowing a list of items, -Running tasks multiple times ,-Validating data,Building UI elements dynamically */

/*Types of loops in JS
for-> run code a fixed number of times
while->Run code while a condition is true
do...while->similar to while, but runs at least once
for...of->Loop over arrays or strings
for...in ->Loop over object keys  */


// for(let i=0;i<5;i++){                                  //leti=1:Start from 1, i<=10:Run the loop as long as i is less than or equal to 10,i++ ->increase i by 1 in each round
//   console.log("Number:",i)
// }

// let fruits=["Apple","Banana","Mango"]; for(let i=0;i<fruits.length;i++){console.log("I like", fruits[i])}




// Usecases->Quiz Steps
/*for (let question = 1; question <= 5; question++) {
  console.log("Showing question", question);
}
for (let i = 2; i <= 20; i+=2) {                              //increase i by 2 each time(so it jumps to next even number)
  console.log(i);
}
for (let i = 1; i <= 19; i+=2) {                              //increase i by 2 each time(so it jumps to next even number)
  console.log(i);
}*/


// While(condition)
/*let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}*/

// usecase: waiting for a user to input correct data(e.g.,login),repeating animations until a condition is met. , polling API's(keep checking something untile lives>0)

/*let j = 2;
while (j <= 10) {
  console.log(j);
  j+=2;
}*/


/* Student learning Tools
student multiplication table 
Exam preparation Apps
Coding practice Games
Waiting for user to input correct data
Repeating animations  until a condition in met
Games(run loop until lives>0)
*/
/*let num=5;
let i=1;
while(i<=10){
  console.log(`${num}x${i}=${num*i}`)
  i++;
}*/
/* let answer;
while (answer !== "Paris") {
  answer = prompt("What is the capital of France?");
}
alert("Correct!");
*/
/*const secret = 7;
let guess;
while (guess !== secret) {
  guess = Number(prompt("Guess a number between 1 and 10:"));
}
console.log("You got it!");*/

/* let password;
while (password !== "abc123") {
  password = prompt("Enter your password:");
}
console.log("Welcome!");*/


/*let position = 0;
while (position < 100) {
  console.log("Move to:", position);
  position += 10;
}
*/

/*let isDataReady = false;

while (!isDataReady) {
  console.log("Checking for data...");
  isDataReady = Math.random() > 0.7; 
}
console.log("Data is ready!");*/

/* let lives=3;while(lives>0){conosle.log(`You have ${lives} lives left`);lives--;}console.log("Game Over") */



// mini project

/*let secretNumber = Math.floor(Math.random() * 10) + 1;
let attemptCount = 0;
let maxAttempts = 3;                                    
let gameOver = false;                                   //let gameOver=false

function checkGuess() {
  if (gameOver) return;

  const userInput = Number(document.getElementById("userGuess").value);
  attemptCount++;

  let message = "";
  if (userInput < secretNumber) {
    message = " Too low. Try again!";
  } else if (userInput > secretNumber) {
    message = " Too high. Try again!";
  } else {
    message = ` Correct! The number was ${secretNumber}`;
    gameOver = true;
  }

  if (attemptCount >= maxAttempts && userInput !== secretNumber) {
    message = ` You've used all ${maxAttempts} guesses! The number was ${secretNumber}`;
    gameOver = true;
  }

  document.getElementById("message").textContent = message;
  document.getElementById("attempts").textContent = `Attempts: ${attemptCount}/${maxAttempts}`;
}

function restartGame() {
  secretNumber = Math.floor(Math.random() * 10) + 1;
  attemptCount = 0;
  gameOver = false;
  document.getElementById("message").textContent = "";
  document.getElementById("attempts").textContent = "";
  document.getElementById("userGuess").value = "";
}
*/


// do...while
/*let i=1;do{console.log(i);i++}while(i<=5)*/
/* showing a welcome message at least once before asking to contitnue,
game setup that runs at least once, input validation : ask until correct value is enetered
education apps:validate student answer
games:ask player to roll dice(1-6)
forms:Re-prompt until correct range is entered
*/
/* let password; do{password=prompt("Enetr password")}while(password!=="1234");console.log("Access granted!") */
/*
let count = 1;
do {
  console.log("Count is:", count);
  count++;
} while (count <= 5);
 */
/*
let number = 10;
do {
  console.log("This runs once even though condition is false");
} while (number < 5);
*/

/*
let name;
do {
  name = prompt("Enter your name:");
} while (!name);

console.log("Hello,", name);
*/


/*let number;
do {
  number = prompt("Enter a number between 1 and 10:");
  number = Number(number);
} while (number < 1 || number > 10);

console.log("Valid number entered:", number);*/

// education apps:validate student answer
/*
let answer;                                                 //declare a variable to store the user's input.
do {
  answer = prompt("What is 5 + 3?");                        //This structure runs the block at least once, and then keeps running untile the condition becomes false
} while (Number(answer) !== 8);                             //Number(answer) converts the string to a number("8"->8) , !==8 means :keep looping if the answer is not 8  //this compare string to number //it will never stop because "8" !==8 is true
console.log("Correct! Well done.");*/          


/*let dice;
do {
  dice = prompt("Roll the dice! Enter a number between 1 and 6:");
  dice = Number(dice);
} while (dice < 1 || dice > 6 || isNaN(dice));
console.log(" You rolled:", dice);*/


/*let age;
do {
  age = prompt("Enter your age (18 to 60):");
  age = Number(age);
} while (age < 18 || age > 60 || isNaN(age));
console.log(" Your age is:", age);*/


/*
let choice;
do {
  choice = prompt(`
 Smart Study Menu
1. Grading System
2. Math Quiz
3. Guess the Number Game
4. Exit
Choose an option (1-4):
`);
  switch (choice) {
    case "1":
      let score = prompt("Enter your score (0–100):");
      score = Number(score);
      let grade;

      if (score > 100 || score < 0 || isNaN(score)) {
        alert(" Invalid score. Please enter a number between 0 and 100.");
      } else if (score >= 90) {
        grade = "A";
      } else if (score >= 80) {
        grade = "B";
      } else if (score >= 70) {
        grade = "C";
      } else if (score >= 60) {
        grade = "D";
      } else {
        grade = "F";
      }
      if (grade) {
        alert("Your grade is: " + grade);
        switch (grade) {
          case "A":
            alert("Excellent work!");
            break;
          case "B":
          case "C":
            alert("Good job, keep improving!");
            break;
          case "D":
            alert("You passed, but study harder.");
            break;
          case "F":
            alert("You failed. Try again!");
            break;
        }
      }
    break;
    case "2":
      let answer;
      do {
        answer = prompt(" What is 7 x 6?");
      } while (Number(answer) !== 42);
      alert("Correct! Well done.");
      break;   
    case "3":
      let secret = Math.floor(Math.random() * 10) + 1;
      let guess;
      let attempts = 0;
      let maxTries = 3;

      while (attempts < maxTries) {
        guess = Number(prompt(` Guess a number between 1-10 (${maxTries - attempts} tries left):`));
        attempts++;

        if (guess === secret) {
          alert("You guessed it right!");
          break;
        } else if (guess < secret) {
          alert("Too low!");
        } else if (guess > secret) {
          alert("Too high!");
        }
      }

      if (guess !== secret) {
        alert(`Out of tries! The number was ${secret}`);
      }
      break;

    case "4":
      alert("Exiting. Goodbye!");
      break;

    default:
      alert(" Invalid choice. Please select 1-4.");
    }
}while(choice!=="4")*/


/*const secretNumber = 7;
let guess;
do {
  guess = prompt("Guess the secret number (between 1 and 10):");
  guess = Number(guess);

  if (guess !== secretNumber) {
    console.log("Wrong guess! Try again...");
  }
} while (guess !== secretNumber);
console.log("You guessed it right! The secret number was:", secretNumber);
*/






// for loop -> is best when you know exactly how many times to repeat something
// syntax -> for(let i=1;i<=5;i++){console.log("Number: ",i)}

/* Real-life use cases: -> generate  tables, like multiplication table,Looping through item in a list, createing buttond,cards,or UI elements, counting scores,steps,levels in games, Iterating through arrays(we'll combine this later) */

/*for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}*/

// const products = ["Shirt", "Jeans", "Shoes", "Hat", "Jacket"];
/*const products = [
  { name: "Shirt", price: 500 },
  { name: "Jeans", price: 1200 },
  { name: "Shoes", price: 2500 },
];

for (let i = 0; i < products.length; i++) {
  // console.log(`Product ${i + 1}: ${products[i]}`);
  console.log(`${products[i].name}-${products[i].price}`)
}*/

/*const questions = [
  { q: "Capital of India?", a: "Delhi" },
  { q: "2 + 2 = ?", a: "4" },
  { q: "Sun rises in the ___?", a: "East" },
];
let score=0;
for (let i = 0; i < questions.length; i++) {
  let userAnswer = prompt(questions[i].q);
  if (userAnswer.toLowerCase() === questions[i].a.toLowerCase()) {
    alert("✅ Correct!");
    score++;
  } else {
    alert("Wrong!");
  }
}
alert(`Your score:${score}/${questions.length}`)*/

/*const products = [
  { name: "Shirt", price: 500 },
  { name: "Jeans", price: 1200 },
  { name: "Shoes", price: 2500 },
  { name: "Hat", price: 400 }
];
const list = document.getElementById("productList");
for (let i = 0; i < products.length; i++) {
  const item = products[i];
  // const discount = item.price * 0.1;
  // const finalPrice = item.price - discount;
  // const li = document.createElement("li");
  // li.textContent = `${item.name} - ₹${item.price} → 10% OFF: ₹${finalPrice}`;
  // list.appendChild(li);

  if(item.price>1000){
    const discount = item.price * 0.1;
    const finalPrice = item.price - discount;
    const li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price} → 10% OFF: ₹${finalPrice}`;
    list.appendChild(li);
  }
}*/


/*const questions = [
  {
    question: "What is the capital of India?",
    options: {A:"Mumbai",B:"Delhi",C:"Chennai",D:"Kolkata"},
    correct:"B"
  },
  {
    question: "What is 2 + 2?",
    options:{A:"3",B:"2",C:"4",D:"10"},
    correct: "C"
  },
  {
    question: "Which language runs in the browser?",
    options:{A:"Python",B:"Java",C:"C++",D:"Javascript"},
    correct: "D"
  }
];
let score=0;*/
// for(let i=0;i<questions.length;i++){
//   let userAnswer=prompt(questions[i].question)
// if(userAnswer.trim().toLowerCase()===questions[i].answer.toLowerCase()){
//   alert("Correct!")
// }else{alert(`wrong!Correct answer:${questions[i].answer}`)}}
// alert(`Quiz over! Your Score:${score}/${score}/${questions.length}`);


/*
  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    let userAnswer = prompt(
      `${q.question}\nA: ${q.options.A}\nB: ${q.options.B}\nC: ${q.options.C}\nD: ${q.options.D}\nEnter A, B, C, or D:`);

    if (userAnswer.toUpperCase() === q.correct) {
      alert(" Correct!");
      score++;
    } else {`Wrong! Correct answer is: ${q.correct}`}
    }
  alert(` Quiz Over! You scored ${score} out of ${questions.length}`);
*/

/*let current = 0;
const quizDiv = document.getElementById("quiz");

function showQuestion() {
  if (current >= questions.length) {
    quizDiv.innerHTML = `<h3> Quiz Over!</h3><p>Your Score: ${score}/${questions.length}</p>`;
    return;
  }

  const q = questions[current];
  quizDiv.innerHTML = `
    <h3>Q${current + 1}. ${q.question}</h3>
    <button onclick="checkAnswer('A')">A: ${q.options.A}</button>
    <button onclick="checkAnswer('B')">B: ${q.options.B}</button>
    <button onclick="checkAnswer('C')">C: ${q.options.C}</button>
    <button onclick="checkAnswer('D')">D: ${q.options.D}</button>
  `;
}

function checkAnswer(choice) {
  if (choice === questions[current].correct) {
    score++;
    alert("Correct!");
  } else {
    alert(`Wrong! Correct answer is ${questions[current].correct}`);
  }
  current++;
  showQuestion();
}

showQuestion();*/


const question = [
  { q: "What is 2 + 2?", answer: "A" },
  { q: "What is capital of India?", answer: "B" }
];

let current=0;
let timer;
let timeLeft=10;

function showQuestion() {
  document.getElementById("question").innerHTML = question[current].q;
  document.getElementById("result").innerHTML = " ";
  timeLeft = 10;
  updateTimer();
  timer = setInterval(updateTimer, 1000);
}
function updateTimer() {
  document.getElementById("timer").innerText = `Time left: ${timeLeft}s`;
  timeLeft--;
  if (timeLeft < 0) {
    clearInterval(timer);
    document.getElementById("result").innerText = "Time's up!";
    nextQuestion();
  }
}

function submitAnswer(option) {
  clearInterval(timer);
  if (option === questions[current].answer) {
    document.getElementById("result").innerText = "Correct!";
  } else{
    document.getElementById("result").innerText = "Wrong!";
  }
  setTimeout(nextQuestion, 1000 );
}

function nextQuestion(){                                             
  current++;
  if (current < question.length) {
    showQuestion();
  }else{
    document.getElementById("question").innerText = "Quiz Finished!";
    function nextQuestion(){}    document.getElementById("timer").innerxText = " ";
  }
}


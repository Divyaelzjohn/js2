// let count=0;

// document.getElementById('clickBtn').addEventListener('click',function(){
//   count++;
//   document.getElementById("count").textContent=count
// })
// function reset(){
//   count=0
//   document.getElementById("count").textContent=count
// }

// function changeColor(){
//   const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
//   document.body.style.backgroundColor = randomColor;
//   document.getElementById("colorCode").textContent="Color: "+randomColor; 
// }


/*
// stop watch
let time=0;                                         // set initial time to 0 seconds
let interval=null;                                  //used to store setInterval ID  

function start(){
  if(interval)return;                               //prevent multiple interval from running at the same time 
  interval=setInterval(()=>{                        //set interval callls the function every 1000 milliseconds 
    time++;
    document.getElementById('time').textContent=time
  },1000)
}
function stop(){
  clearInterval(interval)
  interval=null
}
function reset(){
  stop();                                           //stops the stop watch
  time=0;                                           //reset timer 0
  document.getElementById("time").textContent=time
}
*/


/*
let isOn=false;                                   //  keeps track of weather the light is ON or OFF                    

function on(){
  const bulb=document.getElementById('bulb')              //assign to a variable 
  const button=document.getElementById('turnon')

  if(isOn){
    bulb.src="https://www.w3schools.com/js/pic_bulboff.gif";      //changing the sorce
    button.textContent="Turn On"            //changing button content
    isOn=false
  }else{
    bulb.src="https://www.w3schools.com/js/pic_bulbon.gif";
    button.textContent="Turn Off"
    isOn=true
  }
}*/


/* guess 1-10 a number */
// let randomNumber=Math.floor(Math.random()*10)+1;
// let attempts=0;

// function checkGuess(){
//   const userGuess=parseInt(document.getElementById('userGuess').value)                                                          //convert user input to number
//   const message=document.getElementById("message")
//   const attemptDisplay=document.getElementById("attempts")
//   const computerGuess=document.getElementById("computerGuess")

//   attempts++;
//   attemptDisplay.textContent=attempts;

//   computerGuess.textContent="Computer Guess:"+randomNumber

//   if(userGuess===randomNumber){
//     message.textContent="correct"
//     message.style.color="green"
//   }else{
//     message.textContent="Try again"
//     message.style.color="red"
//   }
// }

/*function calculate(){
  const height=parseInt(document.getElementById("height").value)
  const weight=parseInt(document.getElementById("weight").value)
  const result=document.getElementById('result')

  if(!height || !weight || height<=0 || weight<=0){
    result.textContent="Please enter valid height and weight";
    result.style.color="red";
    return;
  }

  const bmi=weight/(height*height)
  let category="";

  if(bmi<18.5){
    category="Underweight"
  }else if(bmi<25){
    category="Normal"
  }else if(bmi<30){
    category="overweight"
  }else{
    category="Obese"
  }

  result.innerHTML=`Your BMI is <strong>${bmi.toFixed(2)}</strong>(${category})`
  style.color="blue"
}*/



/*
function updateClock(){                 //create a function updateClock
  const now=new Date();                 //create a new Date object representing the current date and time
  let hours=now.getHours();             //Gets the current hour in 24-hour format (0-23)
  const minutes=now.getMinutes();       //gets the current minutes (0-59)
  const seconds=now.getSeconds();       //gets the current seconds(0-59)
  const is24Hour=document.getElementById("formatToggle").checked;             //check if the checkbox is checked                      

  let period="AM";                      //sets default period to AM

  if(!is24Hour){
    if(hours>=12){
      period="PM"
      if(hours>12) hours-=12;           //eg-13-12=1
    }
    if(hours===0) hours=12              //00===12
  }

  const h=String(hours).padStart(2,'0')     //padStart ensure that number s look like 01:09:05 instead of 1:9:5
  const m=String(minutes).padStart(2,'0')
  const s=String(seconds).padStart(2,'0')

  const timeString=is24Hour? `${h}:${m}:${s}`:`${h}:${m}:${s}:${period}`;
  document.getElementById("clock").textContent=timeString;


const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const dayName = days[now.getDay()];
  const monthName = months[now.getMonth()];
  const date = now.getDate();
  const year = now.getFullYear();

  const fullDate = `${dayName}, ${monthName} ${date}, ${year}`;
  document.getElementById("date").textContent = fullDate;
}
setInterval(updateClock,1000);          //runs updateClock() function every 1 seconds 
updateClock()
*/



// let count=0;
// const min=0;
// const max=10;

// function updateDisplay(){
//   document.getElementById("count").textContent=count;
//   document.getElementById("message").textContent=" ";

//   if(count===max){
//     document.getElementById("message").textContent="Max limit reached"
//   }else if(count===min){
//     document.getElementById("message").textContent="Minimum is 0!"
//   }
// }

// function increase(){
//   if(count<max){
//     count++;
//     updateDisplay();
//   }
// }
// function decrease(){
//   if(count>min){
//     count--;
//     updateDisplay()
//   }
// }
// updateDisplay()


/*function rollDice(){
  const number=Math.floor(Math.random()*6)+1
  document.getElementById("dice-number").textContent=number;

  const diceImg=document.getElementById("dice-image");
  diceImg.src=`dice${number}.png`
  diceImg.style.display="block"
}*/

const quizData = [
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "What does CSS stand for?",
    options: ["Central Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets", "Computer Style Sheets"],
    answer: "Cascading Style Sheets"
  },
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyper Tool Multi Language"],
    answer: "Hyper Text Markup Language"
  }
];

let currentIndex = 0;
let score = 0;

function loadQuestion() {
  const currentQuiz = quizData[currentIndex];
  document.getElementById("question").textContent = currentQuiz.question;

  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  currentQuiz.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(option);
    answersDiv.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const correct = quizData[currentIndex].answer;
  if (selected === correct) {
    score++;
    alert("Correct!");
  } else {
    alert("Wrong! Correct answer is: " + correct);
  }
  document.querySelectorAll("#answers button").forEach(btn => btn.disabled = true);
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex < quizData.length) {
    loadQuestion();
  } else {
    document.getElementById("quiz-container").innerHTML = `<h3>🎉 Quiz Finished!</h3><p>Your score: ${score}/${quizData.length}</p>`;
  }
}

loadQuestion();
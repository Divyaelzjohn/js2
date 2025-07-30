// Create questions 

const quizData=[
  {
    question:"What is the capital of France?",
    options:["London","Paris","Berlin","Madrid"],
    answer:"Paris"
  },
  {
    question:"2+2=?",
    options:["3","4","5","6"],
    answer:"4"
  },
  {
    question:"Which language runs in the browser?",
    options:["Python","C++","JavaScript","Java"],
    answer:"JavaScript"
  }
  // stroring our quiz questions in a list (called an array)
];

let current=0;                          // track current question index
let score=0;                            // user score

// show first question

function showQuestion(){
  let q=quizData[current];              //get current question
  document.getElementById("question").innerText=q.question;                            // set question text- this line put the question on the screen

  let buttons=document.querySelectorAll(".                        answer-btn");                       // set qestion text                                                              this update the 4 buttons with 4 options for that questions, style the button. 
  buttons.forEach((btn, index)=>{
    btn.innerText=q.options[index];
    btn.style.background="#eee";      //reset background
    btn.disabled=false
  });
  startTimer()
  // clear score message
  document.getElementById("score").innerText="";
}

// step3:check if answer is correct
function checkAnswer(button){                   //select  what you clicked.
  let selected=button.innerText;                //correct-what the rreal answer        
  let correct=quizData[current].answer;

  if(selected===correct){
    score++;
    button.style.background="lightgreen"         // correct
  }else{
    button.style.background="salmon"             // wrong
  }
}

// Move to next question  
function nextQuestion(){
  current++;
  if(current<quizData.length){
    showQuestion()
  }else{
    // quiz finished
    document.getElementById("question").innerText="Quiz       Finished!";                                           //show qiz finished
    document.getElementById("answers").style.display="none";  //hide answer buttons
    document.querySelector("button").style.display="none"     //hide next button
    document.getElementById("score").innerText=`Your score is: ${score}/${quizData.length}`;                      //
  }
}
// start the quiz

showQuestion()


let timer;
let timeLeft=10;

function startTimer(){
  clearInterval(timer)
    timeLeft=10;
    document.getElementById("timer").innerText=`Time Left:${timeLeft}`

    timer=setInterval(()=>{
      timeLeft--;
      document.getElementById("timer").innerText=`Time Left:${timeLeft}`
      if(timeLeft<=0){
        clearInterval(timer);
        nextQuestion()
      }
    },1000)
}


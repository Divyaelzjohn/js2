/*const chatBox = document.getElementById('chat-box');
const msgInput = document.getElementById('msg-input');
const sendBtn = document.getElementById('send-btn');

sendBtn.addEventListener('click',()=>{
  const msg=msgInput.value.trim();
  if(msg){
    const newMsg = document.createElement('div');
    newMsg.textContent = msg;
    chatBox.appendChild(newMsg);
    msgInput.value = '';
    chatBox.scrollTop = chatBox.scrollHeight;
  }
})*/
/*let timeout;
const result=document.getElementById("result");
document.getElementById("search").addEventListener("input",function(){
  clearTimeout(timeout);
  timeout=setTimeout(()=>{
    result.textContent="searching for:"+this.ariaValueMax;
  },500)
})*/

// Debouncing-> waiting for a certain amount of time after the last event before running the function.Useful when you want the action to happen only after the user stops doing something

/*function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
function showSearch(query) {
  console.log("Searching for:", query);
}
const debouncedSearch = debounce(showSearch, 500);
document.getElementById("search").addEventListener("input", (e) => {
  debouncedSearch(e.target.value);
});
*/

// Throttling-> allow the function to run at most once every X milliseconds, no matter how many times the event fires . Useful for events like scroll or resize where you need periodic updates but not too often. 

/*function throttle(func, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
function showScrollPosition() {
  console.log("Scroll position:", window.scrollY);
}
const throttledScroll = throttle(showScrollPosition, 200);
window.addEventListener("scroll", throttledScroll);*/


// Event Throttling -> Runs the ufnction at most once in a given time interval, even if the event is fired many times.

/*function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}
window.addEventListener("scroll", throttle(() => {
  console.log("Scroll event handled!");
}, 1000));
*/




// You are in a room , and people keep shouting your name very quickly. if you ressssponse every single time , you will get tired fast( like a browser handling too many events).To save your energy, you can contorl how often you respond- and that's where throttling and debouncing come in.


// Throttling-i will answer at most once every 5 seconds, no matter how many times they call my name - Even if they call your name 100 times in 5 seconds , you will only response once. After 5 seconds pass, you can respond again.

// Debouncing -> i will only answer after they stop calling my name for 5 seconds ,   -if they calling your name every 2 seconds , you will never respond untile they completly stop for  5 seconds . Once they stop and 5 seconds pass, you finally respond









// Custom Events

 /*// creating a custom event
 let myEvent=newcustomEvent("greet",{detail:{name:"Divya"}})         //"greet" ->the event name, detail -> optional object with extra data

 // Listening for the Event
 document.addEventListner("grret",function(event){conosole.log("Hello "+event.detail.name)})

 // Triggering the Event-
 document.dispatchEvent(myEvent)


 //1.Listen for the event
 document.addEventListener("userLoggedIn", function(e){console.log("Welcome,"+e.detail.username)})
 //2.Create  and dispatch the event
 let loginEvent=new CustomEvent("userLoggedIn",{detail:{username:"Divya"}}) ;document.dispatchEvent(loginEvent)*/



  // Shopping cart "cartUpdated"
   // 1. Listen for the custom event
   /* document.addEventListener("cartUpdated", (e) => {
        console.log("Cart updated with item:", e.detail.item);
    });
    // 2. Function to add item to cart and trigger event
    function addToCart(item) {
        // Imagine pushing to an array/cart
        console.log(`Adding ${item} to cart...`);
        // Trigger the event with extra data
        document.dispatchEvent(new CustomEvent("cartUpdated", {
            detail: { item: item }
        }));
    }
    // Usage
    addToCart("Laptop");
    addToCart("Phone");*/



  // Quiz app "next Question"
   /* // 1. Listen for the next question event
    document.addEventListener("nextQuestion", (e) => {
        console.log("Loading Question:", e.detail.questionNumber);
    });

    // 2. Function to finish a question and trigger event
    function finishQuestion(current) {
        console.log(`Question ${current} finished.`);
        document.dispatchEvent(new CustomEvent("nextQuestion", {
            detail: { questionNumber: current + 1 }
        }));
    }

    // Usage
    finishQuestion(1);
    finishQuestion(2);*/
    

// User login "userLoggedIn"
/*// Listen for user login
document.addEventListener("userLoggedIn", (e) => {
  console.log("Welcome", e.detail.username);
  // Update UI here
});

// Simulate login
function login(username) {
  console.log("Logging in:", username);
  document.dispatchEvent(new CustomEvent("userLoggedIn", {
      detail: { username: username }
  }));
}
// Usage
login("Divya");*/


document.getElementById('loginBtn').addEventListener('click', () => {
  const username = document.getElementById('username').value.trim();
  if (!username) return alert("Enter username");
  
  document.dispatchEvent(new CustomEvent('userLoggedIn', {
    detail: { username }
  }));
});

document.addEventListener('userLoggedIn', (e) => {
  document.getElementById('welcomeMsg').textContent = `Welcome, ${e.detail.username}!`;
});

// Shopping Cart Event
function addToCart(item) {
  document.dispatchEvent(new CustomEvent('cartUpdated', { detail: { item } }));
}

document.getElementById('addLaptop').addEventListener('click', () => addToCart('Laptop'));
document.getElementById('addPhone').addEventListener('click', () => addToCart('Phone'));

document.addEventListener('cartUpdated', (e) => {
  const div = document.getElementById('cartStatus');
  div.textContent = `Added to cart: ${e.detail.item}`;
});

// Quiz Game Event
let currentQuestion = 1;
document.getElementById('finishQ').addEventListener('click', () => {
  document.dispatchEvent(new CustomEvent('nextQuestion', { detail: { questionNumber: currentQuestion + 1 } }));
});

document.addEventListener('nextQuestion', (e) => {
  currentQuestion = e.detail.questionNumber;
  document.getElementById('question').textContent = `Question ${currentQuestion}: What is ${currentQuestion} + ${currentQuestion}?`;
});



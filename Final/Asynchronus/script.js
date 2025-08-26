// callbacks - A callback is a function passed as an argument to another function , to be executed later(usually after some task finishes).

/*function downloadFile(fileName, callback) {
  console.log(`Downloading ${fileName}...`);
  setTimeout(() => {
      console.log(`${fileName} downloaded.`);
      callback();
  }, 2000); // Simulate 2 seconds delay
}

downloadFile("movie.mp4", () => {
  console.log("Now playing the movie...");
});*/

// you ordering food in a resturant . You don't stand in the kitchen waiting. You give phone number to the waiter.WHen food is ready , the waiter calls you back
/*function downloadFile(food, callback) {
  console.log(`Ordering ${food}...`);
  setTimeout(() => {
      console.log(`${food} is ready.`);
      callback();
  }, 2000); // Simulate 2 seconds delay
}
downloadFile("Burger", () => {
  console.log("Eating the burger now");
});*/


// callbacks can get messy if there are too many. A promise is like :"I promise l'll give you the result in the future"

/*let foodOrder = new Promise((resolve, reject) => {
  let chefIsHappy = true;
  setTimeout(() => {
      if (chefIsHappy) resolve("Pizza is ready");
      else reject("Sorry, no pizza");
  }, 2000);
});
foodOrder
  .then(result => console.log(result))   // success
  .catch(error => console.log(error));   // failure */

// Async/Await -> Async/await makes promises easier to read . It looks like normal step-by-step code,but runs asynchronusly.


/*function cookFood() {
  return new Promise(resolve => {
      setTimeout(() => resolve("Pasta is ready"), 2000);
  });
}
async function eatDinner() {
  console.log("Waiting for pasta...");
  let food = await cookFood();  // wait here
  console.log(food);
  console.log("Eating pasta now");
}
eatDinner();*/


function makeTea() {
  return new Promise((resolve, reject) => {
    let waterBoiled = true;

    if (waterBoiled) resolve("Tea is ready ☕");
    else reject("No tea, water not boiled");
  });
}
async function drinkTea() {
  console.log("Waiting for tea...");
  try {
    let tea = await makeTea();   // pause until promise resolves/rejects
    console.log(tea);            // "Tea is ready ☕"
    console.log("Drinking tea now ");
  } catch (error) {
    console.log(error);          // "No tea, water not boiled"
  } finally {
    console.log("Tea process finished ");
  }
}
drinkTea();


function cookFood(food) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let chefIsHappy = true;
      if (chefIsHappy) resolve(`${food} is ready `);
      else reject(`${food} failed `);
    }, 2000);
  });
}

async function eatFood() {
  console.log("Waiting for food...");
  try {
    let food = await cookFood("Burger "); //  fix here
    console.log(food);  // shows: "Burger is ready "
    console.log("Eating Burger now ");
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Burger process finished 🔚");
  }
}
eatFood();

// setTimeout() and setInterval()
/* setTimeout-> Do something once after a delay
   setInterval-> Do something repeatly at intervals */

//    setTimeout(() => {
//     console.log("Hello after 3 seconds");
// }, 3000);

/*let count = 1;
let timer = setInterval(() => {
    console.log(`Message ${count}`);
    count++;
    if (count > 5) clearInterval(timer); // stop after 5 times
}, 1000);
*/



// Event Loop
/* 
-call stack=where JS executes code
-Web APIs=background helpers(like setTimeout, ApIcalls)
-Callback Queue / Microtask Queue = tasks waiting to run.
-Event Loop = traffic police. It checks if the Call Stack is empty → then allows tasks from the queue to run.
*/

console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End")
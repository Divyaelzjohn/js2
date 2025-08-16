/* javascript normally runs line by line(synchronus). But some tasks(like downloading a file, waitong 2 seconds, calling an API) take time. If JS waited for these tasks , your browser would freeze. so JS says;"I'll continue with other work, and when you're done, let me know." */

/*callbacks -. a call back is a function passed as an argument to another function , to be executed later (usually after some task finishes)
[you order food in a resturent, You don't stand in the kitchen waiting. You give your number to the waiter(callback). When food is ready , the waiter call you back.]
*/

/*function orderFood(food, callback) {
  console.log(`Ordering ${food}...`);
  setTimeout(() => {
      console.log(`${food} is ready`);
      callback();
  }, 2000);
}
orderFood("Burger", () => {
  console.log("Eating the burger now");
});*/


/*function downloadfile(fileName, callback){
  console.log(`Downloading ${fileName}...`);
  setTimeout(()=>{
    console.log(`${fileName} downloaded.`);
    callback();
  },2000)
}
downloadfile("movie.mp4",()=>{
  console.log("Now playing the movie...")
})*/

/* Promises -> a promise represents a value that may be available now, later or never. It has 3 ststes: -pending(waiting),-fulfilled(success). -rejected(error) 
callbacks can get messy if there are too many. A Promise is like:"I promise I'll give you the result in the future"
if success->resolve(); if error->reject()*/
/* .then() ->runs if the promise is resolved.
.catch() -> runs always, no matter success or failiur */

/* let foodOrder = new Promise((resolve, reject) => {
    let chefIsHappy = true;
    setTimeout(() => {
        if (chefIsHappy) resolve("Pizza is ready");
        else reject("Sorry, no pizza");
    }, 2000);
});
foodOrder
    .then(result => console.log(result))   // success
    .catch(error => console.log(error));   // failure
*/

/*let download = new Promise((resolve, reject) => {
    let success = true;
    setTimeout(() => {
        if (success) resolve("File downloaded successfully!");
        else reject("Download failed!");
    }, 2000);
});
download .then(message=>console.log(message))
         .catch(error=>console.error(error))*/


// Async/Await -> A cleaner way to work promises using async and await
/* It looks like normal step-by-step code, but runs asynchronously */

/*function cookFood() {
  return new Promise(resolve => {
      setTimeout(() => resolve("Pasta is ready"), 2000);
  });
}
async function eatDinner() {
  console.log("Waiting for pasta...");
  let food = await cookFood();  
  console.log(food);
  console.log("Eating pasta now ");
}
eatDinner();*/


/*function downloadFile() {
  return new Promise((resolve) => {
      setTimeout(() => resolve("File downloaded!"), 2000);
  });
}
async function processDownload() {
  console.log("Starting download...");
  let message = await downloadFile();
  console.log(message);
  console.log("Processing file...");
}
processDownload();*/


// settimeout() & setInterval() -> 
/* setTimeout(fn,ms) -> Runs the function once after a delay.
 setInterval(fn, ms) -> Runs the function repeatedly every given milleseconds*/

/*setTimeout(() => console.log("Hello after 2 seconds"), 2000);
let count = 0;
let timer = setInterval(() => {
    count++;
    console.log(`Count: ${count}`);
    if (count === 5) clearInterval(timer);
}, 1000);
*/

// event loop -> The event loop is the mechanism that allows javascript to handle asynchronous operations wihtout blocking the main thread.
/* How it works:
1.JS runs synchronous code first (Call Stack).
2.Async tasks (setTimeout, Promises, etc.) go to Web APIs.
3.When done, they move results to Callback Queue or Microtask Queue.
4.Event Loop moves them to the Call Stack when it’s empty.*/

/*console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");*/



// callback
/*function cookFood(food, callback) {
  console.log(`Cooking ${food}...`);
  setTimeout(() => {
    console.log(`${food} is ready`);
    callback();
  }, 2000);
}
function startOrder() {
  cookFood("Burger ", () => {
    console.log("Eating Burger now");
  });
}*/

/* function cookFood(food, callback) {
    console.log(`Cooking ${food}...`);
    setTimeout(() => {   // only one setTimeout needed
        console.log(`${food} is ready`);
        callback();      // run the callback after cooking
    }, 2000);
}

// Order Fries
function startOrder() {
    cookFood("Fries ", () => {
        console.log("Eating Fries now");
        console.log("Finished meal, time for dessert");
    });
}
 */

// PromiseVersion
// createing the promise => 
  /*let promise=new Promise((resolve, reject) => {
    let success=true;
    if(success){resolve("Task done successfully")}
    else{ reject("Something went wrong")}
  })*/

/*function cookFoodPromise(food) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let chefIsHappy = true;  // change to false to test reject
      if (chefIsHappy) resolve(`${food} is ready`);
      else reject(`${food} burned `);
    }, 2000);
  });
}
function orderWithPromise() {
  cookFoodPromise("Pizza")
    .then(msg => console.log(msg))
    .catch(err => console.log(err));
}*/

/*function cookFoodPromise(food) {
  return new Promise((resolve, reject) => {
    console.log(`Cooking ${food}...`);
    setTimeout(() => {
      let chefIsHappy = true; // change to false to test reject
      if (chefIsHappy) {
        resolve(`${food} is ready`);
      } else {
        reject(`${food} burned`);
      }
    }, 2000);
  });
}
function orderFoodPromise() {
  cookFoodPromise("Pizza")
    .then(result => {
      console.log(result);
      console.log("Eating Pizza now");
    })
    .catch(error => {
      console.log(error);
    });
}*/

// async / await
/*async function orderWithAsyncAwait(){
  console.log("Waiting for pasta...")
  try{
    let result=await cookFoodPromise("pasta")
    console.log(result)
    console.log("Eating Pasta now")
  }catch(err){
    console.log(err)
  }
}*/


// setInterval for progress
/*function showCookingProgress(food) {
  let steps = ["Chopping ", "Boiling ", "Cooking ", "Plating "];
  let i = 0;
  let timer = setInterval(() => {
    console.log(steps[i]);
    i++;
    if (i === steps.length) {
      clearInterval(timer);
      console.log(`${food} is ready `);
    }
  }, 1000);
}*/


// food ordering
/*function cookFood(food) {
  return new Promise((resolve, reject) => {
    console.log(`Cooking ${food}...`);
    setTimeout(() => {
      let chefIsHappy = Math.random() > 0.3; 
      if (chefIsHappy) {
        resolve(`${food} is ready `);
      } else {
        reject(`${food} burned `);
      }
    }, 2000);
  });
}
cookFood("Pizza")
  .then(msg => {
    console.log(msg);
    return "Eating Pizza "; 
  })
  .then(nextStep => {
    console.log(nextStep);
    console.log("Time for dessert");
  })
  .catch(err => {
    console.log("Error happened:", err);
  })
  .finally(() => {
    console.log("Dinner process finished");
  });*/


  // Chaning promise
  /*cookFood("Burger")
  .then(msg=>{console.log(msg);return cookFood("Fries")})
  .then(msg=>{console.log(msg);return cookFood("Drink")})
  .then(msg=>{console.log(msg)})
  .catch(err=>console.log("Something failed:",err))*/

  // Promise Methods  
  // Promise.all([p1,p2,...])->waots for all promise to finish. If none fails ->whole things fail
  /*Promise.all([cookFood("Burger"),cookFood("Fries")])
  .then(results=>console.log("All ready:",results))
  .catch(err=>console.log("One failed:",err))*/

  // Promise.race([p1,p2,...])->return the first finishes promise(success ot fail)       
 /* Promise.race([cookFood("Noodlels"),cookFood("Soup")])
  .then(winner=>console.log("First ready",winner))
  .catch(err=>console.log("Race Failed",err))*/

  // Promise.any([p1,p2])  -> returns the first successful prommise 
  // Promise.allSettled([p1,p2,...]) -> waits for all to finish -> gives results for both success and failure


  // where we use? -> API Calls->fetching data from a server , file operations(reading/writing in Node.js), Timers/animations, User input events, database queries.


  

//  create a Promise
/*let sandwichOrder = new Promise((resolve, reject) => {
  let chefHappy = true;  // change to false to test reject
  if (chefHappy) {
    resolve("Sandwich is ready");
  } else {
    reject("Sandwich burned");
  }
})

sandwichOrder
  .then(result => console.log("Success:", result)) 
  .catch(error => console.log("Error:", error)) 
  .finally(() => console.log("Process finished"))*/


/*new Promise((resolve, reject) => {
  if (success) resolve("success message");
  else reject("error message");
})
.then(result => console.log(result)) 
.catch(error => console.log(error)) 
.finally(() => console.log("Always runs"))*/
/*new Promise((resolve, reject) => {
  let waterBoiled = true;

  if (waterBoiled) resolve("Tea is ready");
  else reject("No tea, water not boiled");
})
.then(result => console.log(result))
.catch(error => console.log(error))
.finally(() => console.log("Always runs"));*/




// Async / Await -> async/await is just a cleaner way to use Promises.  It makes your code like step-by-step synchronus code, but it's still asynchronus in the background 
/* Promise="chef  promises to make tea later.",Aync/await="i'll wait in the cafe until tea is ready, then drink it" */

/*new Promise((resolve, reject) => {
  let waterBoiled = true;
  if (waterBoiled) resolve("Tea is ready");
  else reject("No tea, water not boiled");
})
async function drinkTea() {
  console.log("Waiting for tea...");
  try {
    let tea = await makeTea();   // pause until promise resolves/rejects
    console.log(tea);            // "Tea is ready ☕"
    console.log("Drinking tea now");
  } catch (error) {
    console.log(error);         
  } finally {
    console.log("Tea process finished");
  }
}
drinkTea()*/


/*function cookFood(food) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let chefIsHappy = true;
      if (chefIsHappy) resolve(`${food} is ready`);
      else reject(`${food} failed`);
    }, 2000);
  });
}
async function eatfood(){
  // console.log("Waiting for food...")
  console.log("Waiting for Burger...")
  console.log("Waiting for Fries...")
  console.log("Waiting for Drink...")
  try{
    // let food=await cookFood("Burger");
    // console.log(food);
    // console.log("Eating Burger now")

    const burger=await cookFood("Burger"); console.log(burger);
    const fries=await cookFood("Fries"); console.log(fries);
    const drink=await cookFood("Drink"); console.log(drink);
    console.log("Eat everything now")
  }
  catch(error){
    console.log("Order problem:",error)
  }
  finally{
    console.log("Meal process finished")
  }
}
eatfood();*/


/*async function fullMealFast() {
  console.log("Starting all items in parallel…");
  try {
    const [burger, fries, drink,dessert] = await Promise.all([
      cookFood("Burger"),
      cookFood("Fries"),
      cookFood("Drink"),
      cookFood("Dessert")
    ]);
    console.log(burger, fries, drink,dessert);
    console.log("Fast feast");
  } catch (err) {
    console.log("At least one item failed:", err);
  } finally {
    console.log("Meal process finished");
  }
}

async function checkOrder(){
  const results = await Promise.allSettled([
    cookFood("Burger", 2000, true),
    cookFood("Fries", 2000, false),
    cookFood("Drink", 2000, true),
    cookFood("Dessert",1500,true)
  ]);
  console.log(results); 
}*/


/*async function checkOrders() {
  const results = await Promise.allSettled([
    cookFood("Burger", 2000, true),
    cookFood("Fries", 2000, false), // will fail
    cookFood("Drink", 2000, true),
    cookFood("Dessert", 1500, true)
  ]);
  console.log("----- Order Status -----");
  results.forEach((result, index) => {
    const foodNames = ["Burger", "Fries", "Drink", "Dessert"];
    if (result.status === "fulfilled") {
      console.log(`${foodNames[index]}: ${result.value}`);
    } else {
      console.log(`${foodNames[index]}: ${result.reason}`);
    }
  });
}
checkOrders();*/


/*// Simulate cooking food with Promise
function cookFood(food, time, success = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) resolve(`${food} is ready`);
      else reject(`${food} failed`);
    }, time);
  });
}
async function startOrder() {
  const orderList = document.getElementById("orderStatus");
  orderList.innerHTML = ""; // clear old orders
  const foods = [
    { name: "Burger", time: 2000, success: true },
    { name: "Fries", time: 1500, success: false }, // fails intentionally
    { name: "Drink", time: 1000, success: true },
    { name: "Dessert", time: 1800, success: true }
  ];
  // Show all as pending first
  foods.forEach(food => {
    const li = document.createElement("li");
    li.textContent = `${food.name}: Cooking...`;
    li.classList.add("pending");
    orderList.appendChild(li);
  });
  // Wait for all to settle
  const results = await Promise.allSettled(
    foods.map(f => cookFood(f.name, f.time, f.success))
  );
  // Update UI after cooking finishes
  results.forEach((result, index) => {
    const li = orderList.children[index];
    if (result.status === "fulfilled") {
      li.textContent = `${result.value}`;
      li.className = "success";
    } else {
      li.textContent = `${result.reason}`;
      li.className = "fail";
    }
  });
}*/



// Simulate cooking food with Promise
function cookFood(food, time, success = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) resolve(`${food} is ready`);
      else reject(`${food} failed`);
    }, time);
  });
}
async function startOrder() {
  const orderList = document.getElementById("orderStatus");
  orderList.innerHTML = "";
  // Get selected foods
  const selected = Array.from(document.querySelectorAll("input:checked"))
    .map(input => input.value);
  if (selected.length === 0) {
    alert("Please select at least one food item!");
    return;
  }
  // Show pending
  selected.forEach(food => {
    const li = document.createElement("li");
    li.textContent = `${food}:Cooking...`;
    li.classList.add("pending");
    orderList.appendChild(li);
  });
  // Prepare cooking promises
  const promises = selected.map(food => {
    // random success/failure (for fun)
    let success = Math.random() > 0.3; 
    let time = 1000 + Math.random() * 2000;
    return cookFood(food, time, success);
  });
  // Wait for all
  const results = await Promise.allSettled(promises);
  // Update UI
  results.forEach((result, index) => {
    const li = orderList.children[index];
    if (result.status === "fulfilled") {
      li.textContent = `${result.value}`;
      li.className = "success";
    } else {
      li.textContent = `${result.reason}`;
      li.className = "fail";
    }
  });
}

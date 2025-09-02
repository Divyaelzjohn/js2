
// try...catch...finally
/*
-try -> code that may cause an error.
-catch->handles the error
-finally -> runs always
*/


/*try {
  let num = 10 / 0;
  console.log("Result:", num);
  // Force error
  let result = x + 5; // x is not defined
}
catch (error) {
  console.log("Error occurred:", error.message);
}
finally {
  console.log("Execution finished!");
}*/


/* Throwing errors- You can create your own error using throw. */
/*function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero!");
  }
  return a / b;
}
try {
  console.log(divide(10, 0));
}
catch (error) {
  console.log("Caught error:", error.message);
}*/


// Debugging techniques
/* 1.Console methods 
    -console.log()->Print values.
    -console.error()->print error message
    -console.warn()-> Warnig
    -console.table()->Display arrays/Objects in table
  2.Breakpoints in browser DevTools
    -Open DevTools ->Sources -> Add breakpoints ->Step through code
  3.Debugger keyword
    Stops code at a point(like a breakpoint)
*/
    // let X=5; let Y=0;debugger;console.log(x+y);
    // Debugging errors(wrong username// password) Debugging API data fetching.


/*function checkAge() {
  let age = document.getElementById("age").value;
  let msg = document.getElementById("msg");
  try {
    if (age === "") throw new Error("Age is required");
    if (age < 18) throw new Error("You must be 18 or older");
    msg.innerText = "Access granted!";
  }
  catch (error) {
    msg.innerText = "Error: " + error.message;
  }
  finally {
    console.log("Validation completed");
  }
}*/


/*let user = { name: "Divya" };
console.log("User name:", user.name);
try {
  console.log("User age:", user.age.toUpperCase()); // error here
} catch (error) {
  console.log("Invalid user data:", error.message);
}*/


/*function withdraw(amount, balance) {
  if (amount > balance) {
    throw new Error("Insufficient funds");
  }
  return balance - amount;
}
try {
  console.log(withdraw(1000, 500)); // This will throw error
} catch (error) {
  console.log("Error:", error.message);
}
console.log(withdraw(200, 1000)); // 800*/


/*let isPayment = true;
try {
  if (!isPayment) {   // throw error if payment failed
    throw new Error("Payment failed");
  }
  console.log("Processing payment...");
} 
catch (error) {
  console.log("Transaction error:", error.message);
} 
finally {
  console.log("Transaction completed");
}*/


/*function check() {
  let name = document.getElementById("name").value; 
  let password = document.getElementById("psw").value;
  let email = document.getElementById("email").value;
  let msg = document.getElementById("msg");

  try {
    if (name === "" || name.length < 3) {
      throw new Error("Invalid Username (min 3 characters)");
    }

    if (password === "" || password.length < 6) {
      throw new Error("Invalid Password (min 6 characters)");
    }
    if (email === "" || !email.include("@")||email.include(".")) {
      throw new Error("Invalid email Address");
    }

    msg.innerText = "Access granted!";
  } 
  catch (error) {
    msg.innerText = "Error: " + error.message;
  } 
  finally {
    console.log("Validation completed");
  }
}*/

// Form validation(frontEnd) -> When users fill out login , signup , or checkout forms, you must ensure data is valid. example->username too shoet , wrong email format, password mismatch. 
// API Calls(Fetch/Axios)->When fetching data from a server, network issues or server errors can occure, example-> Server down , wrong API endpoint, incaild JSON.
// Authentication & Authorization -> Prevent users from accessing pages without logging in. Example:User token expired or invalid login credentials
// File handling/Uploads -> When uploadingfiles, errors can happen(file too large,wrong type), Example: User uploads .exe instead of .jpg
// Paymnet Syatem->Payment gateways (stripe,razorpay,PayPal) often fail due to insufficient funds, network issues, or declined cards. Always handle errors to prevent money-realted issues.
// Database Operations- When inserting or fetching data, errors can happen:Duplication entry, connection lost, Query error
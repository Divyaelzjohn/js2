 /*Error Handling+Try/Catch +custiom Error
1.Try...catch basics, 2.finally block, 3.Throwing custom errors, 4.Handling async error(await inside try/catch), 5.A mini project:Form Validation with custom errors(eg.user must enter name& email,otherwise throw an error) -->

<!-- What is try...catch? -> It's used to handle errors in jaavscript so your program doesn't crash  try{}catch(error){} */  
/*console.log("Start");
try{console.log(abc)}
catch(error){console.log("Something went wrong:",error.message)}
console.log("End")*/

// in real projects , we often create custom error types to give more meaning.
 /*class DivisionError extends Error{
  constructor(message){
    super(message);
    this.name="DivisionError"
  }
 }

 function safeDivide(a,b){
  if(b===0){
    throw new DivisionError("Cannot divide by zero")
  }
  return a/b;
 }
 try{
  console.log(safeDivide(10,0));
 }
 catch(err){
  console.log(`${err.name}:${err.message}`)
 }
 finally{
  console.log("Operation finished")
 }*/



class LoginError extends Error{
  constructor(message){
    super(message)
    this.name="LoginError"
  }
}
function login(username,password){
  if(username!=="admin"||password!=="1234"){
  }
}


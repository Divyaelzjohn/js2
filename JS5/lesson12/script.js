/*function greeting(){
  console.log('hello')
}
greeting();

const num=2;
const function1=function(){
  console.log('hello2')
};

console.log(function1)
console.log(typeof  function1)
function1()

const object1={
  num:2, fun:function(){
    console.log('hello3')
  }
};
object1.fun();

// function display(param){
//   console.log(param)
// }
// display(2)
*/

// function run(param){
//   param()
// }
// run(function(){
//   console.log('hello4')
// })

// setTime out()
// -allows us to run a function in the future

/*setTimeout(function(){
  console.log('timeout')
},3000)*/

// Asynchrounus

// setTimeout(function(){
//   console.log('timeout')
//   console.log('timeout2')
// },3000);
// console.log('nrxt line')

// won't wait for a line to finish before going to the next line

// Synchronus - will wait for one line to finish before going to the next line

// Set interval

// setInterval(function(){
//   console.log('interval')
// },3000);
// console.log('next line 2')

// ForEach() is the preferred way to loop through  an array

[
  'make dinner',
  'wash dishes',
  'watch youtube'
].forEach(function(value,index){
  if(value==='wash dishes'){
    return;
  }
  console.log(index)
  console.log(value)
})


// lesson12

/* 12a.Create a variable called 'add' and save a function inside. This function will console.log(2+3); Run the function twice. */
/* 12b. Continuing from exercise 12a, create a function runTwice(fun) that takes a function (as a parametyetr) and runs it twice.
-runTwice(function() {console.log('12b');})=>console.log('12b') twice
-runTwice(add);=>console.log(5) twice */

/* 12c. Create a button below. When clicking the button , after 1 second , the text inside the button changes to 'Finished!' (HInt:use setTimeout() and the DOM) */
/* 12d.COntinuing from exercise 12c, modify the button so that when we click it , the text immediately changes ti 'Loading...' and  then after 1 second , it changes to 'Finished!'*/

/* 12e.Create the "add to cart ' button below. When clicking this button , display the mesage 'Added' below the button . Then , after 2 seconds, remove the message" */

/* 12e.Continueing from 12e, if we click the button , wait 1 to 51.5s , and then click the button again , notice that the second time, the message disapperars very quickly (because the first setTimeout is still running and will make the message disappear very soon).
-Modify the code so when we click the butoon , it "refreshes" the 2 seconds wait time (waits for 2 s again and removes message).
-Hint:YOu can cancel the previous setTimeout using clearTimeout() */

/* 12g.Imagin we're creating a messaging app. Use setInterval() and document.title to create the feature on the right (the title changes every 1 second) */
/* 12h.COntinuing from 12g, instead of displaying "(2) New messages" every time, save the number of message in a variable:let message=2;
-use the number in the variable to determine  what title to display.
-Create 2 buttons 'Add'/'Remove' that increase / decrease the 'messagees' variable by1 */

/* 12i.Continueing from 12h:
-Don't let'message' go below 0.
-If message === 0 stop changing the title and display 'App' as the title.
-When message >0 start changing the title again. */
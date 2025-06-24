/* 
-event loop
-callback queue
-microtask queue
*/

 /* java script is a synchronus single threaded language */
  
/*function a(){               //function definition
    console.log("a")        
}
a()                         //function invocation - execution contex is created for the function a
console.log("End")          //
*/
/* global execution context code is run line by line */

/* main job of call stack is execute whatever comes insided  it doesn'wait for any thing */
/* Web APIs
-setTimeout()
-DOM APIs
-fetch()
-localstorage
-console
-location
*/
/* global object is small little window */

/* eample 1 */
/*console.log("Start")

setTimeout(function cb(){
    console.log("Callback")
},5000)
console.log("End")*/

/* cb  function go to the call stack through the callback queue
when the time is expires the call back function put inside the
call back queue 
the job of an event loop check call back queue and puts this function(cb) 
of the call back queue into the call stack
eventt loop act like a gate keeper and its check wheather we have 
somthing in the call back queue , if we have something just like call 
back method it just pushes inside the call stack
*/


/* example 2 */
/*console.log("Start")
document.getElementById("btn")
.addEventListener("click",function cb(){
    console.log("callback")
})
console.log("End")
*/

/*example 3*/

console.log("Start")
    setTimeout(function cbT(){
        console.log("CB SetTimeout")
    },5000)
fetch("https://apt.netflix.com")
    .then(function cbF(){
        console.log("CB Netflix")
    })
    console.log("End")

    /* fetch is basically goes and requst api call
    fetch function return a promise */
    /* micro task queue */
    /* it has higher priority
    what ever functions come inside the queue will be executed first
    and functions inside the call back queue
    are executed
    */
   /* the cbF call back function go to the microtask queue
   event loop check call stack empty or not
   we run million lines of code timer is expired
   the callback function call cbT basically wants to be executed
   so it go into the callback queue
   */
  /* what is comes in  microtask queue 
  all call back function come to promise will go inside microtask queue and something known as mutatuon obsever
  so mutation obsever basically keeps on checking whether there is something mutaion in the
  DOM tree or not , if there is a mutation in the DOM tree it can execute some call back function
  promises and mutation observer
  */
/* call back queue also known as task queue 
if there is a three microtask pending inside the microtask queue
and we have one task inside the call back first execute the task in in the microtask 
*/
/* some times microtask create another micro task queue sometimes callback queue cannot get a chance to execute starvation of a call back queue */


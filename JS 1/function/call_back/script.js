// what is a callback function in javascript

/* You can take a function and passed it into a another functions which function passed into anothe function is called callback function*/

/*setTimeout(function(){              //the function is called call back function
    console.log("timer")
},5000)
function x(y){
    console.log("x")
    y()
}
x(function y(){
    console.log("y")
})*/
// javascript is a synchronus and single-threaded language

// blocking the main thread -- any operation blocking  everything blocked in code we should never block main thread  

// power of cancelIdleCallback

// deep about event listeners

// closure demo with event listener  --  

// scope demo with event listeners

/* garbage collection & removeEventListener -- event listemers are heavy
it takes heavy memmory*/
/*  
let count=0                                              //using global variable
document.getElementById("clickMe")
.addEventListener("click",function xyz(){               ///it is call back function
    console.log("Button clicked",++count)
})*/

/*function attacheventListener(){
    let count=0
    document.getElementById("clickMe")
    .addEventListener("click",function xyz(){
        console.log("Button clicked",++count)
    })
}
attacheventListener()*/

// why remove event AudioListener
/* event listeneres are heavy that means that takea memmory wheneer we attach vent listener
 it forms closure even when the call stack is empty we are not executing any of the code 
 but still the program not freeing up memmory it cant just free up the count becuse we never know*/

 
/*  */
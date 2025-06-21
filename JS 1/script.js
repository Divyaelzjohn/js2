//  synchronus and asynchronus
// single thread or multi thread
//"Everything in javascript happens inside an execution context"
/*
memory component--also known as variable enviroment
-key:value
-a:10
fn:{}
code componet--code executed one line at a time ,it is also known as thread of execution
*/
/*Javascript is a synchronus single -threaded language */
/*one command at atime and in a specific order */
/* AJAX */

/*******************************************
var n=2
function square(num){   //num is parameter 
    var ans=num*num
    return ans
}
var square2=square(n)   //n is argument
var square4=square(4)
*********************************************/
//there are two components memmory component and code component
// execution context created in two pahses
//-1:creation phase--also known as memmory creation phase

//-2:code execution phase--it is the phace every calulation a program done
/* 
callstack--bottom of the stack global execution--the whole code
 */
/* call stack maintains the order of execution of execution contexts it also known as
1.execution context stack
2.Program stack
3.control stack
4.Run time stack
5.machine stack
*/

/*
getName()
console.log(x)              //undefined--

                            //the code run beacuse of the feature in js  called hoisting
console.log(getName)
var x=7
function getName(){
    console.log("namasthe")        //it print function it self
}

// console.log(getName)

*/
 
// getName()
// console.log(x)
// console.log(getName)

/*var x=7

function getName(){
    console.log('Namasthe javascript')
}

getName()
console.log(x)
console.log(getName)    */                  

//different between not defined and undefined
/*   */

/*getName()
console.log(x)
console.log(getName)

var x=7

function getName(){

}*/

/*function getName2(){

}

var getName2=()=>{
    console,log("Namaste Javascript")
}*/


var x=7
function getName(){
    console.log("Namaste javascript")
}
getName()
console.log(x)
console.log(getName)

/*  */
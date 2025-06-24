/*function cb(){
    console.log("Callback")
}

setTimeout(cb,5000)
*/
/*
console.log("Start")
setTimeout(function cb(){
    console.log("Callback")
},5000)
console.log("End")
//how to block main thread in 10 seconds 
// million of code 

let startDate=new Date().getTime()
let endDate=startDate
while(endDate<startDate+10000){
    endDate=new Date().getTime()
}
console.log("While expires")
// setTime out doesn't guarantee that it takes exactly 5000 m/s 
//it guarantee that it will wait atleast 4500 m/s
*/

/* set timeout 0 */
/*console.log("start")

function cb(){
    console.log("Callback")
}
cb()

setTimeout(function cb(){
    console.log("Callback")
},0)

console.log("End")*/

console.log("start")
function cb(){
    console.log("Callback")
}
setTimeout(cb,0)
console.log("End")

/*  */
// callbacks 
// event loop
// promises
/* 
-reolve
-reject
-all
-allSettled
-any  --returns a single promise after success, if everything fails then it shows "All promises were rejected
-race  -returns a single promise as soon as it fails or success"
*/
// Async/await
// try/catch
// Pro Tips


// callbacks

// console.log("Running 1")

// console.log("Running 2")

// javascript is a single threaded programming language
// javascript is a synchronus programming language  -- it runs line by line
// at a time oru line mathre run cheyyunullu backi ullathellam block cheyyunnu
// it is called synchronus
// javascriptine namk asynchronus akkanum pattum

// example of synchronus
/*for(let index=0;index<10;index++){
    console.log(index)
}
console.log("Running 2")
console.log("Running 3")
*/

/*// asynchronus
console.log("Running 1")
setTimeout(()=>{
    console.log("Running 2")            //1,3 print cheyth 1 second kayinjan 2 print avunath
},1000)
console.log("Running 3")
 */
/*
setTimeout(()=>{
    console.log("Running 2")
},0)
console.log("Running 1")
console.log("Running 3")
*/
/* asynchronus ayath stack clear ayit mathrame work avathullu */

// const button=document.querySelector("button")
// button.addEventListener("click"()=>{
//     console.log("Button Clicked")                    // button js queue idum ennit ath vilikkumbo mathre work avunnullu
// });

/*console.log("Start")
function getDataFromAPI(){
    return "Hello world"
}
                                      
console.log(getDataFromAPI())                 //o/p--start ,hello world, end
console.log("End")
// console.log(getDataFromAPI())              //o/p-start,end,hello
*/
// addEventListener("click",function(){
    
// })


/* ee probleathinte solution aan callbacks
 o/p -start,undefined,end
 function adhyame stackilekk vannu but athinte ullile value 3 second kayinjittan run avunnath pinne aa function trigger ayond ath work avula 
 like
 function getDataFromAPI(){}
*/
/*
console.log("Start")
function getDataFromAPI(){
    setTimeout(()=>{
        return "Debug Media"                                                                 
    },3000)
}
console.log(getDataFromAPI())

console.log("End")
*/
// Ithinte solution ann callback 

/*console.log("Start");
function getDataFromAPI(callback){
    setTimeout(()=>{
        callback("hello")
    },3000)
}

// console.log(                    //console.log kodukkumbo ee function onnum indavula
getDataFromAPI((value)=>{
    console.log(value)
})
// );

console.log("End")
*/
/* strat, end,hello hello 3s kayinj work aayi */
/* ivde getDatfromAPI ann destoy akunne thin akathullath destroy avunillla */


console.log("strat")
function getDataFromAPI(callback){
    setTimeout(()=>{
        callback(5)
    },1000);
}
function getDataFromAPI2(callback){
    setTimeout(()=>{
        callback(5)
    },1000)
}
function getDataFromAPI3(callback){
    setTimeout(()=>{
        callback(5)
    },1000)
}
getDataFromAPI((value)=>{
    getDataFromAPI2((api2Val)=>{
        // console.log(api2Val+value)          //o/p =10
        getDataFromAPI3((api3Val)=>{
            console.log(api3Val+api2Val+value)      //o/p-start,end,15
        })
    })
})
console.log("End")

/* ee chain kudy kudy varum -callbackhell
    to prevent this we use promise 
*/


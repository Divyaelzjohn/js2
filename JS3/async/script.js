/*const promise1=new Promise((resolve,reject)=>{
    resolve(["Javascript","Java"])
    // reject("API Failed")
})*/

// promise1
// .then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err)
// })

/*
async function fetchData(){
   const response =await promise1
    console.log(response)
}
fetchData()
*/

/* using arrow function */

// const fetchData=async()=>{
//     const response=await promise1
//     console.log(response)
// }
// fetchData()

// IIFE -immediately invoked function expression ith 1 pravishyam mathre vilikkan pattathullu

// (async()=>{
/*(async function (){
    const response=await promise1;
    console.log(response);
})();*/

/*
const fetchData=async()=>{
    const response= await promise1.catch((err)=>{
        console.log(err)
    })
    // console.log(response)        //o/p=undeined---to remove this use if 
    if(response){
        console.log
    }
}
fetchData()
*/

// using try catch
/*const fetchData=async()=>{
    try{
        const response=await promise1
        console.log(response)
    }catch(error){
        console.log(error)
    }
}
fetchData()
*/



/* protip */
/* const promise1=new Promise((resolve,reject)=>{
    resolve(["Javascript","Java"])
    // reject("API Failed")
})
// const fetchData=async()=>{
//     try{
//         const response=await promise1
//         console.log(response)
//     }catch(error){
//         console.log(error)
//     }
// }
// fetchData()
const fetchAPIData = async()=>{
    fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((response)=>response.json())
        .then((json)=>console.log(json))
}
fetchAPIData()
*/
/*
const fetchAPIData = async()=>{
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        // .then((response)=>response.json())
        // .then((json)=>console.log(json))
        const data=await response.json()
        console.log(data)
    }catch(error){
        console.log(error)
    }
}
fetchAPIData()

const fetchAPIData = async()=>{
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        // .then((response)=>response.json())
        // .then((json)=>console.log(json))
        const data=await response.json()
        console.log(data)
    }catch(error){
        console.log(error)
    }
}
fetchAPIData()
*/

// to generic this code use the followign data

/*const genericFetchData=async (url,method,data)=>{
    try{
        const response=await fetch(url,{
            method:method,
            body:data
        })
        const data=await response.json()
        return [data,null]
    }catch(error){
        return [null, error]
    }
}*/
/*
const fetchAPIData=async()=>{
    try{
       const response= await genericFetchData(
        "https://jsonplaceholder.typicode.com/todos/1",
        "POST"
    )
       console.log(response)
    }catch(error){
        console.log(error)
    }
}
*/
const genericFetchData=async(url)=>{
    try{
        const response=await fetch(url)
        const data=await response.json()
        return[data,null]
    }catch(error){
        return[null,error]
    }
}
const fetchAPIData=async()=>{
    const [data, error]=await genericFetchData("https://jsonplaceholder.typicode.com/todos/1")
    if(data){
        console.log(data)
        return
    }
    // console.log(error)
    genericError(error)
}
fetchAPIData()



/*
const promise=new Promise((resolve,reject)=>{
    // resolve("Success!")                      //o/p--success

    // setTimeout(()=>{
    //     resolve("Success!")
    // },3000)

    reject("Failed!")                           //error remove this we use try catch
})

promise.then((response)=>{
    console.log(response)
})
*/

/*
const promise=new Promise((resolve,reject)=>{
    reject("Failed")
});
promise
    .then((response)=>{
        console.log(response)
    })
    .catch((error)=>{
        console.log(error)
    })
*/

/*
function getDataFromAPI(num){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(num)
        },1000)
    })
}
function getDataFromAPI2(num){
    setTimeout(()=>{
        resolve(num)
    },1000)
}

getDataFromAPI(5).then((response)=>{
    console.log(response)
})
*/
/* o/p-5 */
/*
function getDataFromAPI(num){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(num)
    },1000)
  })
}
function getDataFromAPI2(num){
 return new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve(num)
  },1000)
 })
}
getDataFromAPI(5)
  .then((response)=>{
    return getDataFromAPI2(response+5)
  })
  .then(response=>{
    console.log(response)
  })
*/
  // o/p=10





  /* All --ellam success ayal mathram work avunnullu*/
/*
const promise1=new Promise((resolve,reject)=>{
  resolve(["Javascript","Java"])
})
const promise2=new Promise((resolve,reject)=>{
  resolve(["React","Angular"])
  // reject("API Failed")
})

// promise1.then((res)=>{
//   console.log(res)
// })

// promise2.then((res)=>{
//   console.log(res)
// })

//  promise 1 il nadakkunnath promise 2 ariyilla promise 2 il nadakkunnath promise 1 ariyula ith prevevet cheyyanulla method ann all

const allPromise=Promise.all([promise1,promise2])

allPromise.then((res)=>{
  // console.log(res)
  console.log(res.flat())                     //is oatta array aakaan
})
.catch((err)=>{
  console.log(err)
})
*/



/* AlllSettled */

// const promise1=new Promise((resolve,reject)=>{
//   resolve(["Javascript","Java"])
// })
// const promise2=new Promise((resolve,reject)=>{
//   // resolve(["React","Angular"])
//   reject("API Failed")
// })
// const allPromise=Promise.allSettled([promise1,promise2])

// allPromise
// .then((res)=>{
//   console.log(res)
// })
// .catch((err)=>{
//   console.log(err)
// })


/* any */

// const promise1=new Promise((resolve,reject)=>{
//   // resolve(["Javascript","Java"])
//   reject("API Failed")
// })

// const promise2=new Promise((resolve,reject)=>{
//   // resolve(["React","Angular"])
//   reject("API Failed")
// })
// const allPromise=Promise.any([promise1,promise2])
// allPromise
// .then((res)=>{
//   console.log(res)
// })
// .catch((err)=>{
//   console.log(err)
// })

/* ornm mathr enookkunullu 
2um reject ayal mathre rejected kanikku orenm reject ayyal kanikkula
*/

/* ace and any 1 response mathre return cheyyunullu */

/* race */

const promise1=new Promise((resolve,reject)=>{
  // resolve(["Javascript","Java"])
  reject("API Failed")
})

const promise2=new Promise((resolve,reject)=>{
  resolve(["React","Angular"])
  // reject("API Failed")
})

const allPromise=Promise.race([promise1,promise2])
allPromise
.then((res)=>{
  console.log(res)
})
.catch((err)=>{
  console.log(err)
})

/* first eathano kedakkunne athan return cheyyoolu */

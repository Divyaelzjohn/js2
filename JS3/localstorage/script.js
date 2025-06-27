// localStorage.setItem("","")   // ("id"),("value")
// localStorage.getItem("")     // ("id")  --used to item retrive
// localStorage.removeItem("")     //remove item
// localStorage.clear()
// localStorage.key()

// localStorage.setItem("id","0")   //localStorage only store string
// localStorage.setItem("token","abc")
// localStorage.setItem("name","debug")

// localStorage.removeItem("id")
// console.log(localStorage.key(2))

// localStorage.clear()

// document.write(localStorage.getItem("id"))
// document.write(localStorage.getItem("name"))


// how give all this in one linre

// const obj={
//     id:0,
//     name:"debug"
// }

// localStorage.setItem("id",obj)                   //object object
// localStorage.setItem("data",JSON.stringify(obj)) //remove this we use stringfy
// // localStorage.removeItem("id")

// // console.log(localStorage.getItem("data"))     //object view chwyyan

// console.log(JSON.parse(localStorage.getItem("data")))  //string akiyale oro value access cheyyan pattu



/* bulid a login logout system */

const input=document.querySelector("input")
const loginBtn=document.querySelector("#login")
const logoutBtn=document.querySelector("#logout")
const h1=document.querySelector("h1")

loginBtn.onclick=()=>{
    if(input.value){
        localStorage.setItem("token",input.value)
        h1.innerText="Welcome User"
    }
}

logoutBtn.onclick=()=>{
    if(input.value){
        localStorage.clear()
        location.reload()
    }
}

/* Refresh cheyyumbo please login again varunnath ozhivakkanm */

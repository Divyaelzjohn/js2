const header=document.querySelector(".show")
const banner=document.querySelector(".banner")
// console.log(header)

// const deviceWidth=window.matchMedia("(max-width:767px)")   //mediaquery properties
/*
if(deviceWidth.matches){                    //matches check device width and value
    header.classList.add("hide")            //.classlist used to append class it uses 3 method remove,add,toggle
}
*/
/*
window.addEventListener("resize",resize)

function resize(){                          //window width resize avunudo ariyan resize use cheyyum
    console.log(window.innerWidth)
    if(deviceWidth.matches){
        header.classList.add("hide")
    }else{
        header.classList.remove("hide")
    }
}
*/

banner.addEventListener("click",()=>{
    header.classList.toggle("hide")             //eppo click cheyyumbo add remove akikond irikkanm  
})

 
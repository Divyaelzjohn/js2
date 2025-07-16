// const cars=["saab","volovo","BMW"]
// document.getElementById("demo").innerHTML=cars

const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fLen = fruits.length;

// let text = "<ul>";
// for (let i = 0; i < fLen; i++) {
//   text += "<li>" + fruits[i] + "</li>";
// }
// text += "</ul>";

// document.getElementById("demo").innerHTML = text;

let text="<ul>"

fruits.forEach(myFunction)
text+="</ul>"

document.getElementById("demo").innerHTML=text

function myFunction(value){
  text+= "<li>"+value+"</li>";
}

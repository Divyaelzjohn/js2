/*What is DOM?->DOM stands for Document Object Model.It is a tree-like structure representing all elemnts(tags) on a webpage. Each HTML elemnt is a node in this tree. Javascript can interact with DOM to read, chnage, add or remove elements dynamically.-->
<!-- Why DOM Manipulation?TO update the page content dynamically without reloading . Make webpages interactive. Example:-SHow/hide content,Change text or styles on button click, Add new elements,Respond to user inputs/events -->
<!-- How to Manipulate DOM?-Basic Steps 1.Select elements, 2.Change elemnts, 3.Add or remove elements */

/* 1.Selecting Elements- You can select elemnts in many ways:
  .document.getElemntById("id")  ---selectedby ID
  .document.getElementByClassName("class") ---Selected by class(returns HTMLCollection)
  .document.getElementByTagName("tag") ---Select by tag name(return HTMLCollection)
  .document.querySelector("cssSelector") ---Select first match using CsS selector
  .document.querySelectorAll("cssSelector") ---Select all matches9returns NodeList
  Example->
  let headinf=document.getElementById("main-title");
  let buttons=document.getElementsByClassName("btn");
  let firstParagraph=document.queySelector("p");
  let allListItems=document.querySelectorAll("ul li")
*/

/*  Changing Elements- you can change:
-Textcontent->element.textContent="New Text";
-HTML content->element.innerHTML="<b>Bold Text</b>",
-Styles->element.style.color="red";
         element.style.backgroundColor="Yellow";
-Attribute->element.setAttribute("src","image.jpg");
            element.getAttribute("href")  */

/*Adding/removing elements->
-Create new element->let newDiv=document.createElement("div");
-Add text or HTML to new element->newDiv.textContent="Hello!";
-Append to DOM-parentElement.appendChild(newDiv);
-Remove element-element.remove() */            

/*let text=document.getElementById("hello");
let btn=document.getElementById("changeBtn");
btn.addEventListener('click',function(){
  text.textContent="Text Changed!"
})*/

/*let text=document.getElementById("text");
let btn=document.getElementById("changeBtn");
btn.addEventListener('click',function(){
  text.style.color="red";
});*/

// Add newListItem
/*let listItem=document.getElementById("list");
let textContent=document.getElementById("text");
let addBtn=document.getElementById("add");

addBtn.addEventListener('click',function(){
  let newValue=textContent.value.trim();            //get value from the input(input.value)
  if(newValue!==""){
    let li=document.createElement("li")    
    li.textContent=newValue;
    listItem.appendChild(li)                        //append the<li> to the <ul>
    textContent.value=""                            //clear the input value
  }
})*/

// Remove Element(click a box to remove it)

/*let boxes=document.querySelectorAll('div')
boxes.forEach(function(box){
  box.addEventListener("click",function(){
    box.remove()
  })
})*/

/*let para = document.getElementById("para");
let toggleBtn = document.getElementById("toggleBtn");
toggleBtn.addEventListener("click", function() {
  if (para.style.display === "none") {
    para.style.display = "block";
  } else {
    para.style.display = "none";
  }
});*/

// Live character counter
/*let text = document.getElementById("text");
let count = document.getElementById("count");
text.addEventListener("input",function(){
  count.textContent="Characters: "+text.value.length
})*/

// Simple To-Do List
let text = document.getElementById("text");
let btn = document.getElementById("add");
let list = document.getElementById("list");


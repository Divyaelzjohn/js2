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
/*let text = document.getElementById("text");
let btn = document.getElementById("add");
let list = document.getElementById("list");

btn.addEventListener("click",function(){
  let task = text.value.trim();
  if(task!==""){
    let li = document.createElement("li");
    li.textContent = task;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.marginLeft = "10px";

    deleteBtn.addEventListener("click",function(){
      li.remove();
    })
    li.appendChild(deleteBtn)
    list.appendChild(li)
    text.value=" "
  }
})*/

// Random Background Color

/*let btn=document.getElementById("changeColor")

btn.addEventListener("click",function(){
  let r=Math.floor(Math.random()*256);
  let g=Math.floor(Math.random()*256);
  let b=Math.floor(Math.random()*256);
  let color=`rgb(${r},${g},${b})`
  document.body.style.backgroundColor=color
})*/

// img gallary
/*let bigImg = document.getElementById("bigImg");
let thumbs = document.querySelectorAll(".thumb");
thumbs.forEach(function(thumb) {
  thumb.addEventListener("click", function() {
    bigImg.src = thumb.src;
  });
});*/

// Form Validation
/*let form = document.getElementById("myForm");
let error = document.getElementById("error");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();

  if (name === "" || email === "") {
    error.textContent = "All fields are required!";
  } else {
    error.textContent = "";
    alert("Form submitted!");
  }
});*/

// DropdownMenu 
/*let menu = document.getElementById("menu");
let menuBtn = document.getElementById("menuBtn");

menuBtn.addEventListener("click",function(){
  if(menu.style.display==="none"){
    menu.style.display="block"
  }else{
    menu.style.display="none"
  }
})*/

// counter App
/*let count = 0;
let countDisplay = document.getElementById("count");
let increase = document.getElementById("increase");
let decrease = document.getElementById("decrease");
increase.addEventListener("click", function() {
  count++;
  countDisplay.textContent = count;
});
decrease.addEventListener("click", function() {
  count--;
  countDisplay.textContent = count;
})*/

// Tabs
/*let tabBtns = document.querySelectorAll(".tabBtn");
let contents = document.querySelectorAll(".tabContent");
tabBtns.forEach(function(btn, index) {
  btn.addEventListener("click", function() {
    contents.forEach(c => c.style.display = "none");
    contents[index].style.display = "block";
  });
});*/

// Search Filter
/*let search=document.getElementById("search");
let items=document.querySelectorAll("ul li")

search.addEventListener("input",function(){
  let text=search.value.toLowerCase();
  items.forEach(function(item){
    if(item.textContent.toLowerCase().includes(text)){
      item.style.display="list-item";
    }else{
      item.style.display="none"
    }
  })
})*/

// Modal popup
/*let modal=document.getElementById("modal");
let openModal=document.getElementById("openModal")
let closeModal=document.getElementById("closeModal");

openModal.addEventListener("click",function(){
  modal.style.display="block";
})

closeModal.addEventListener("click",function(){
  modal.style.display="none";
})*/

// scroll progress Bar
/*window.addEventListener("scroll",function(){
  let scrollTop=window.scrollY;
  let docHeight=document.documentElement.scrollHeight-this.document.documentElement.clientHeight;
  let scrollPercent=(scrollTop/docHeight)*100;
  this.document.getElementById("progress").style.width=scrollPercent+"%"
})*/

// Event Handling -> events are actions thet happen in browser- cliks,typing,scrolling etc. We use addEventListener to listen and respond to them.

/* 
-AddEventListenr with diffrent Events -> click, keyup, mouseover, mouseleave

-Event Object-when an event happens js passes an event object with details.
let infoBtn = document.getElementById("infoBtn");
infoBtn.addEventListener("click", function(event) {
  console.log("Event type:", event.type);
  console.log("Target element:", event.target);
});
-Event Delegation- instead of adding a listener to every child, we put one listeneer on the parent
let list = document.getElementById("list");
list.addEventListener("click", function(event) {
  if (event.target.tagName === "LI") {
    alert("You clicked: " + event.target.textContent);
  }
});
-Prevent Default- stop a browser's default action
let link = document.getElementById("link");
link.addEventListener("click", function(event) {
  event.preventDefault();
  alert("Link click prevented!");
});
*/


// 3.DOM Traversal
/*
-parentElemnts-parentElement-> Gets the immediate parent of an element 
<div id="parent">
  <p id="child">Hello</p>
</div>
let child = document.getElementById("child");
console.log(child.parentElement);

- Children
children → All element children (HTMLCollection).
firstElementChild → First child element.
lastElementChild → Last child element.
eg.<ul id="fruits">
  <li>Apple</li>
  <li>Banana</li>
  <li>Orange</li>
</ul>
<script>
let fruits = document.getElementById("fruits");
console.log(fruits.children); // [li, li, li]
console.log(fruits.firstElementChild.textContent); // Apple
console.log(fruits.lastElementChild.textContent); // Orange
</script>

-Siblings
nextElementSibling → Next element at same level.
previousElementSibling → Previous element at same level.
eg.<ul>
  <li id="banana">Banana</li>
  <li>Orange</li>
  <li>Apple</li>
</ul>
<script>
let banana = document.getElementById("banana");
console.log(banana.nextElementSibling.textContent); // Orange
</script>


-childNodes vs children
children → Only element nodes.
childNodes → Elements, text nodes, comments, etc.
eg. <ul id="list">
  <li>One</li>
  <li>Two</li>
</ul>
<script>
let list = document.getElementById("list");
console.log(list.children); // [li, li]
console.log(list.childNodes); // [text, li, text, li, text]
</script>
*/

// 4.Attribute classes
/*
Get & Set Attributes
getAttribute(name) → Reads an attribute value.
setAttribute(name, value) → Adds/changes an attribute.
removeAttribute(name) → Removes an attribute.
eg.<img id="myImg" src="apple.jpg" alt="Apple">
<script>
let img = document.getElementById("myImg");
// Get attribute
console.log(img.getAttribute("src")); // apple.jpg
// Set attribute
img.setAttribute("src", "banana.jpg");
// Remove attribute
img.removeAttribute("alt");
</script>

--Managing Classes
classList.add("className") → Adds a class.
classList.remove("className") → Removes a class.
classList.toggle("className") → Adds if missing, removes if present.
classList.contains("className") → Checks if element has a class.
<p id="text">Hello World</p>
<button id="btn">Toggle Red</button>
<style>
.red { color: red; font-weight: bold; }
</style>
<script>
let text = document.getElementById("text");
let btn = document.getElementById("btn");
btn.addEventListener("click", function() {
  text.classList.toggle("red");
});
</script>
*/

// Forms & Inputs
/* -Reading Values
We can use .value to get the text inside an input, textarea, or select.
<input type="text" id="nameInput" placeholder="Enter your name">
<button id="btn">Submit</button>
<script>
  let input = document.getElementById("nameInput");
  let btn = document.getElementById("btn");
  btn.addEventListener("click", function() {
    console.log(input.value); // Logs whatever user typed
  });
</script>
- Validating Before Submit
We can check the input and show messages before sending data.
<form id="myForm">
  <input type="email" id="email" placeholder="Enter email">
  <button type="submit">Submit</button>
</form>
<p id="error" style="color:red;"></p>
<script>
let form = document.getElementById("myForm");
let email = document.getElementById("email");
let error = document.getElementById("error");
form.addEventListener("submit", function(event) {
  if (email.value === "") {
    error.textContent = "Email is required!";
    event.preventDefault(); // Stop form from submitting
  }
});
</script>

-Checkboxes & Radio Buttons
We can check if they are selected with .checked.
<input type="checkbox" id="subscribe"> Subscribe
<button id="checkBtn">Check</button>
<script>
let checkbox = document.getElementById("subscribe");
let btn = document.getElementById("checkBtn");
btn.addEventListener("click", function() {
  if (checkbox.checked) {
    console.log("Subscribed!");
  } else {
    console.log("Not subscribed");
  }
});
</script>

- Dropdown / Select
We can get selected value from <select>.
<select id="colors">
  <option value="red">Red</option>
  <option value="blue">Blue</option>
  <option value="green">Green</option>
</select>
<button id="colorBtn">Show Color</button>
<script>
let colors = document.getElementById("colors");
let btn = document.getElementById("colorBtn");
btn.addEventListener("click", function() {
  console.log("Selected color:", colors.value);
});
</script>

*/

// Creating Multiple Elements in Loops
/*Instead of writing HTML manually, we can generate it with JS.
<ul id="list"></ul>
<script>
let items = ["Apple", "Banana", "Cherry"];
let list = document.getElementById("list");
items.forEach(function(item) {
  let li = document.createElement("li");
  li.textContent = item;
  list.appendChild(li);
});
</script>
->cloning Elements ->we can make a copy of an existing elemnt using.cloneNode().
<div id="box" style="width:100px;height:100px;background:lightblue;"></div>
<button id="cloneBtn">Clone Box</button>
<script>
let box = document.getElementById("box");
let btn = document.getElementById("cloneBtn");
btn.addEventListener("click", function() {
  let copy = box.cloneNode(true); // true = clone with child elements
  document.body.appendChild(copy);
});
</script>

-> Inserting Before Another Element
We can place a new element before an existing one.
<ul id="fruitList">
  <li>Banana</li>
</ul>
<script>
let list = document.getElementById("fruitList");
let newItem = document.createElement("li");
newItem.textContent = "Apple";
list.insertBefore(newItem, list.firstElementChild);
</script>

->Using insertAdjacentHTML -> this lets you insert raw HTML without creating elements manually
eg.<div id="container">Hello</div>
<script>
let container = document.getElementById("container");
container.insertAdjacentHTML("beforeend", "<p>World</p>");
</script>

->Replacing Elements -> we can swap an element with another using .replaceChild().
eg->
<ul id="fruits">
  <li>Apple</li>
</ul>
<script>
let list = document.getElementById("fruits");
let oldItem = list.firstElementChild;
let newItem = document.createElement("li");
newItem.textContent = "Mango";
list.replaceChild(newItem, oldItem);
</script>
*/



// 7.Browser Events
/* DOMContentLoaded->Runs when HTML is fully loaded before images,css,etc.Finish loading.Useful to make sure DOM elements are ready before your script runs.
eg.document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM is ready!");
});

-Window load Event- Runs everything (HTML,Css,Images,scripts) is loaded
eg.window.addEventListener("resize", function() {
  console.log("Width:", window.innerWidth, "Height:", window.innerHeight);
});)

-Scroll Event- Fires when the user scrolls
window.addEventListener("scroll",function(){console.log("scroll Y:",window.scrollY)})

-Mouse Events on the Window->You can track mouse movement across the whole page
window.addEventListener("mousemove", function(e) {
  console.log("X:", e.clientX, "Y:", e.clientY);
});

*/


// DOM Ready 
document.addEventListener("DOMContentLoaded",function(){
  document.getElementById("greeting").textContent="Hello! Page is Ready";
})
// Add Item
document.getElementById("addItemBtn").addEventListener("click",function(){
  let input=document.getElementById("itemInput");
  if(input.value.trim()!==""){
    let li=document.createElementNS("li");
    li.textContent=input.value;
    document.getElementById("itemList").appendChild(li);
    input.value=" "
  }
})

// Remove Item(Event Delegation)
document.getElementById("itemList").addEventListener("click",function(e){
  if(e.target.tagName==="LI"){
  e.target.removeEventListener()
  }
})

// Scroll Progress Bar
window.addEventListener("scroll", function() {
  let scrollTop = window.scrollY;
  let docHeight = document.documentElement.scrollHeight - window.innerHeight;
  let scrollPercent = (scrollTop / docHeight) * 100;
  document.getElementById("progressBar").style.width = scrollPercent + "%";
});

// Window Resize
window.addEventListener("resize", function() {
  document.getElementById("windowSize").textContent =
    `Window: ${window.innerWidth} x ${window.innerHeight}`;
});

// Mouse Tracker
window.addEventListener("mousemove", function(e) {
  document.getElementById("mousePos").textContent =
    `X: ${e.clientX} | Y: ${e.clientY}`;
});

// Random Background Color
document.getElementById("randomBgBtn").addEventListener("click", function() {
  let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
});


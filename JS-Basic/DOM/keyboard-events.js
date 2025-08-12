/*const input=document.getElementById("myInput");
input.addEventListener("keydown",function(event){
  console.log("Key pressed:",event.key)
})

document.getElementById("searchBox").addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
      alert("Searching for: " + e.target.value);
  }
});*/


/*const box = document.getElementById("box");
let x=200;
let y=200; 
const step=10;
document.addEventListener("keydown", function(event) {
  switch(event.key.toLowerCase()) {
    case "w": // up
      y -= step;
      break;
    case "s": // down
      y += step;
      break;
    case "a": // left
      x -= step;
      break;
    case "d": // right
      x += step;
      break;
  }
  box.style.top = y + "px";
  box.style.left = x + "px";
});*/


/*const box = document.getElementById("box");
let positionX = 100;
let positionY = 100;
const step = 20; // move speed

function getRandomColor() {
  return `rgb(${Math.floor(Math.random() * 256)}, 
              ${Math.floor(Math.random() * 256)}, 
              ${Math.floor(Math.random() * 256)})`;
}
window.addEventListener("keydown", (e) => {
  const boxWidth = box.offsetWidth;
  const boxHeight = box.offsetHeight;
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  if (e.key === "ArrowRight" && positionX + step + boxWidth <= windowWidth) {
    positionX += step;
  }
  if (e.key === "ArrowLeft" && positionX - step >= 0) {
    positionX -= step;
  }
  if (e.key === "ArrowDown" && positionY + step + boxHeight <= windowHeight) {
    positionY += step;
  }
  if (e.key === "ArrowUp" && positionY - step >= 0) {
    positionY -= step;
  }
  box.style.left = positionX + "px";
  box.style.top = positionY + "px";
  // change color on every move
  box.style.background = getRandomColor();
});*/

// Dynamic elemnts in event handling

const taskInput = document.getElementById("taskInput");
const addTask = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTask.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if(taskText) {
    const li = document.createElement("li");
    li.textContent = taskText;
    li.classList.add("task");
    taskList.appendChild(li);
    taskInput.value = "";
  }
});

// 
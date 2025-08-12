/* event delegation is when you attach an event listemr to a parent element instead of attaching it to each child element 
why we use?- You don;t need to add many event listeners, works even for dynamically added elemnts, keeps code clean and maintainable */

/*const items = document.querySelectorAll(".item");
items.forEach(item => {
  item.addEventListener("click", () => {
    alert(item.textContent);
  });
});

const container = document.getElementById("container");
container.addEventListener("click", (e) => {
  if (e.target.classList.contains("item")) {
    alert(e.target.textContent);
  }
});
*/

/*const productList=document.getElementById("productList")
productList.addEventListener("click", function (event) {
  if (event.target.classList.contains("add-to-cart")) {
    alert(event.target.textContent + " clicked!");
  }
});*/

/*let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayCart() {
  let cartList = document.getElementById("cart");
  cartList.innerHTML = "";
  cart.forEach(item => {
    let li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    cartList.appendChild(li);
  });
}
document.getElementById("product-list").addEventListener("click", function(e) {
  if (e.target.classList.contains("add")) {
    let product = e.target.closest(".product");
    let item = {
      id: product.dataset.id,
      name: product.dataset.name,
      price: product.dataset.price
    };
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
  }
});
displayCart();*/


// shopping cart-Event Delegation
/*const productList=document.getElementById("product-list")
productList.addEventListener("click",(e)=>{
  if(e.target.classList.contains("add-to-cart")){
    const productName=e.target.parentElement.querySelector("p").textContent;
    console.log(productName+" added to cart")
  }
})*/

//comment section-like/reply/delete

/*const comments = document.getElementById("comments");
comments.addEventListener("click", (e) => {
  if (e.target.classList.contains("like")) {
    console.log("Liked comment");
  }
  if (e.target.classList.contains("reply")) {
    console.log("Reply clicked");
  }
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});*/

// Dynamic menus
/*const menuData = ["Home", "Products", "Contact"];
const menu = document.getElementById("menu");
menu.innerHTML = menuData.map(item => `<li class="menu-item">${item}</li>`).join("");
menu.addEventListener("click", (e) => {
  if (e.target.classList.contains("menu-item")) {
    console.log("Clicked on:", e.target.textContent);
  }
});*/

// Task App
/*const taskList = document.getElementById("task-list");
taskList.addEventListener("click", (e) => {
  if (e.target.classList.contains("task")) {
     e.target.classList.toggle("done")
  }
})*/

/*const taskList = document.getElementById("task-list");
taskList.addEventListener("click", function (e){
  if (e.target.tagName==="LI"){
     e.target.classList.toggle("done")
  }
})*/

/*const taskList = document.getElementById("task-list");
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task");

// Load saved tasks on page load
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
renderTasks();

// Add task
addTaskBtn.addEventListener("click", () => {
  const text = taskInput.value.trim();
  if (text) {
    tasks.push({ text, done: false });
    saveTasks();
    renderTasks();
    taskInput.value = "";
  }
});

// Event Delegation for toggling done
taskList.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    const index = event.target.dataset.index;
    tasks[index].done = !tasks[index].done;
    saveTasks();
    renderTasks();
  }
});

// Save tasks to localStorage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Render tasks to the page
function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task.text;
    li.dataset.index = index;
    if (task.done) li.classList.add("done");
    taskList.appendChild(li);
  });
}*/

/*let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
function renderTasks(filter = "all") {
    let list = document.getElementById("taskList");
    list.innerHTML = "";
    tasks
        .filter(task => 
            filter === "all" ||
            (filter === "done" && task.done) ||
            (filter === "notDone" && !task.done)
        )
        .forEach((task, index) => {
            let li = document.createElement("li");
            li.innerHTML = `
                <span style="text-decoration:${task.done ? 'line-through' : 'none'};cursor:pointer" 
                      onclick="toggleDone(${index})">${task.text}</span>
                <button onclick="editTask(${index})">Edit</button>
                <button onclick="deleteTask(${index})">Delete</button>
            `;
            list.appendChild(li);
        });
}
function addTask() {
    let input = document.getElementById("taskInput");
    if (input.value.trim() !== "") {
        tasks.push({ text: input.value, done: false });
        saveTasks();
        renderTasks();
        input.value = "";
    }
}
function toggleDone(index) {
    tasks[index].done = !tasks[index].done;
    saveTasks();
    renderTasks();
}
function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
}
function editTask(index) {
    let newText = prompt("Edit task:", tasks[index].text);
    if (newText !== null && newText.trim() !== "") {
        tasks[index].text = newText;
        saveTasks();
        renderTasks();
    }
}
document.getElementById("addBtn").addEventListener("click", addTask);
renderTasks();*/








// capturing form submissions, validating input values, showing messages, Preventing the page from refreshingwhen submitting

/*const form = document.getElementById("loginForm");
  const message = document.getElementById("message");
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Stop page refresh

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
      message.textContent = "Please fill all fields.";
      message.style.color = "red";
    } else {
      message.textContent = "Login successful!";
      message.style.color = "green";
    }
  });*/


  /*const form = document.getElementById("registerForm");
    const message = document.getElementById("message");
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      let name = document.getElementById("name").value.trim();
      let email = document.getElementById("email").value.trim();
      let password = document.getElementById("password").value.trim();
      // Basic validation
      if (!name || !email || !password) {
        return showMessage("All fields are required!", "red");
      }
      if (!validateEmail(email)) {
        return showMessage("Please enter a valid email.", "red");
      }
      if (password.length < 6) {
        return showMessage("Password must be at least 6 characters.", "red");
      }
      // Save data to localStorage
      let user = { name, email, password };
      localStorage.setItem("userData", JSON.stringify(user));
      showMessage("Registration successful!", "green");
      // Clear fields
      form.reset();
    });
    function validateEmail(email) {
      let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }
    function showMessage(text, color) {
      message.textContent = text;
      message.style.color = color;
    }**/

  //const form=document,getElementById("registerForm") const message=document.getElemntById("message"); form.addEventListener("submit",function(event){event.preventDefault();let name=document.getElemntById("name").value.trim();let email=document.getElemntById("email").value.trim();let password=document.getElementById("password").value.trim() if(!name||!email||!password){return showMessage("All fields are required","red")}if(!validateEmail(email){return showMessage("Please enter a valid emaol.","red")}if(password.length<6){return showMessage("Password must be at least 6 character.","red")}let user={name,email,password};localstorage.setItem("userData"),JSON.stringify(user));showMessage("Registeration successsfull!","green") form.reset();function validateEmail(email){let re=/^[^\s@]+@[^\s@]+\.[^\@]+$/;return re.test(email)}function showMessage(text, color){message.textContent=text;message.style.color=color}})

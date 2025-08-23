/* What is an Event? An event is an action or ocuurrence that happens in the browser, like:
-A user clicking a button
-A key being pressed
-A form being submitted
-The page finishing loading
2.Ways to Handle Events
a]Inline Event Handler(old,not recommended) 
  <button onclick="alert('Hello!')">Click Me</button>
b]DOM Property
  <button id="btn">Click</button>
  <script>
    document.getElementById("btn").onclick=function(){alert("Button clicked!")}
  </script>
c]addEventListener()
  <button id="btn">Click</button>
  <script>
    let btn=document.getElementById("btn");
    btn.addEventListener("click",()=>{
      alert("Best practice!")})
  </script>
3.Types of Events
a]Mouse Events
  -click->single click
  -dbclick->double click
  -mouseover->mouse enters element
  -mouseout->mouse leaves elements
  <button id="demo">Hover Me</button>
  <script>
    let btn=document.getELementById("demo")
    btn.addEventListener("click",()=>console.log("Clicked!"));
    btn.addEventListener("dblclick",()=>console.log("Double Clicked!"));
    btn.addEventListener("mouseover",()=>console.log("Mouse Over!"))
    btn.addEventListener("mouseout",()=>console.log("Mouse Out!"))
  </script>
b]Keyboard Events
  -keydown-> when key is pressed
  -keyup -> whenkey is released
    <input type="text" id="input">
    <script>
    let input = document.getElementById("input");
    input.addEventListener("keydown", e => {
      console.log("Key Down:", e.key);
    });
    input.addEventListener("keyup", e => {
      console.log("Key Up:", e.key);
    });
    </script>

c]Form Events
  -submit -> When form is submitted
  -change->when value changes
  <form id="myForm">
    <input type="text" name="name" placeholder="Enter name">
    <button type="submit"</button>
  </form>
  <script>
    document.getELementById("myForm").addEventListener("submit",e=>{
      e.preventDefault();
      console.log("Form submitted!")})
  </script>

4.Event Propagation
  When you click an element, the event moves through the DOM in two phases:
  1.Capturing(trickle down)-> From root(document)-> target element.
  2.Bubbling (bubble up) -> From target element -> back to root

  <div id="parent" style="padding:20px; background:lightblue;">
  Parent
  <button id="child">Child</button>
  </div>
  <script>
    let parent = document.getElementById("parent");
    let child = document.getElementById("child");

    parent.addEventListener("click", () => console.log("Parent Clicked (Bubble)"), false);
    child.addEventListener("click", () => console.log("Child Clicked"), false);

    parent.addEventListener("click", () => console.log("Parent Capturing"), true);
  </script>

5.Event Delegation -> Instead of adding events to many children, attach one event listener to the parent and detect the target. This improves performance.

  <ul id="menu">
  <li>Home</li>
  <li>About</li>
  <li>Contact</li>
  </ul>
  <script>
  document.getElementById("menu").addEventListener("click", e => {
    if (e.target.tagName === "LI") {
      console.log("You clicked:", e.target.innerText);
    }
  });
  </script>

6.Real Project Use Cases
  -Mouse Events -> Buttons, dropdowns, image zoom,drag & drop.
  -Keyboard Events- search suggestions , gaming controls, form validation.
  -Form Events -> Login, signup, contact forms.
  -Event Propagation -> Stop unwanted triggers(model dialogs, menus).
  Event Delegation-> Dynamic UIs(todo lidt, ecommerce cart, chat apps)
7.Best practices
  Always use addEventListener()
  Use event.preventDefault() for forms & links when needed
  Use delegation for dynamic lists
  use event.stopPropagation() when you dont want bubbling
  Keep event handler short-> delegate logic to functions

*/
function addTask(){
  let input =document.getElementsById("taskInput")
  let task = input.value;

  if(task.trim()===" "){
    alert("Please enter a task!");
    return;
  }
  let li=document.createElement("li")
  li.innerHTML=task;

  li.onclick=function(){
    li.remove()
  };
  document.getElementById("taskList").appendChild(li);
  input.value=" "
}
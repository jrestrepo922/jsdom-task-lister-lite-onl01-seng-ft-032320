document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
  let submit = document.querySelector('form input[type="submit"]')
  
  
  
  submit.addEventListener("click", (event) => {
    preventDefault(event);
    // finding the element where the tasks are 
    let tasks = document.querySelector("#tasks");
    // creating a list node to add the new task
    let task = document.createElement("li");
    // providing the text that will be display
    task.innerHTML = submit.value
    // attaching the new li node to the ul list 
    tasks.appendChild(task)
    
  });
  
});


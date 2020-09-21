document.addEventListener("DOMContentLoaded", () => {
  // grab the form and description tag
  const newTaskForm = document.getElementById("create-task-form");

  //ul where task will live after clicking submit
  const newTaskUl = document.getElementById("tasks");
  
  const newTaskDescription = document.getElementById("new-task-description");

  const createNewTask = event => {
    //stop form from trying to submit
    event.preventDefault();
    
    //const newTaskDescription = document.getElementById("new-task-description");
    const newTask = document.createElement("li");
    newTask.innerText = newTaskDescription.value;
    
    //execute the function and reset page
    appendNewTask(newTask);
    event.target.reset();
  };
  
  const appendNewTask = task => {
    document.getElementById("tasks").appendChild(task);
  };
  
  
  //attach event listeners
  newTaskForm.addEventListener("submit", createNewTask);
});

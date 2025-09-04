let formTask = document.getElementById("form-task");//access the data which entered in form
let taskEle = document.getElementById("submit-ele");//access the data which is submitted.

//check if there is any task is stored in local storage
let taskList = localStorage.getItem('tasks') ? 
JSON.parse(localStorage.getItem('tasks')) : [];

console.log(taskList);

formTask.addEventListener('submit',function(e)
{
    e.preventDefault();//stop reloading after clicking submit
    let task = taskEle.value.trim(); //extract the value and store to 'task'

    if (task === "") {
    alert("⚠️ Please enter a task before submitting!");
    return; // stop here if empty
  }

    taskList.unshift(task);//adding task 
    localStorage.setItem('tasks',JSON.stringify(taskList));//store data in string format to local storage
    displayTasks(taskList);//display task in browser
    taskEle.value="";//make it empty after clicking submit
})

function displayTasks(tasks){
  const display = document.getElementById("display-task");
  display.innerHTML = ""; // clear old list

  if (taskList.length === 0) {
    display.innerHTML = `
      <li class="list-group-item text-center text-muted">
        Add your task
      </li>
    `;
    return;
  }

  taskList.forEach((task,i) => {
    display.innerHTML += `
      <li class="list-group-item list-group-item-primary mt-1">
        <span class="fw-bold">${task}</span>
        <button class="btn btn-outline-danger btn-sm float-end" onclick="deleteTask(${i})">❌</button>
        <button class="btn btn-outline-secondary btn-sm  float-end me-1" onclick="updateTask(${i})">Edit</button>
      </li>
    `;
  });
};
displayTasks(taskList);


function deleteTask(id){
  taskList.splice(id,1);
  localStorage.setItem('tasks',JSON.stringify(taskList));
  displayTasks(taskList);
}

function updateTask(id){
  taskEle.value = taskList[id];
  taskList.splice(id,1);
  localStorage.setItem('tasks',JSON.stringify(taskList));
  displayTasks(taskList);
}
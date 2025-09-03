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
    let display = document.getElementById("display-task");
  display.innerHTML = ""; // clear old list

  taskList.forEach((task) => {
    display.innerHTML += `
      <li class="list-group-item list-group-item-primary mt-1">
        <span class="fw-bold">${task}</span>
      </li>
    `;
  });
};

const addTaskBtn = document.getElementById("addTask");
const inputBox = document.getElementById("input-box");
const toDoList = document.getElementById("todo-list");
//call this function to display tasks that are already in the localStrorage
loadTasks()

//Add button adds the tasks in the list
addTaskBtn.addEventListener("click", addTask)

//adding the task to list
function addTask() {
    //removing any white spaces
    const task = inputBox.value.trim();

    if (task) {
        creatTaskEle(task);
        //call the function to save changes to the local strorage
        saveTasks()
    }else{
        //If inputBox.value is empty show an alert
        alert("Add a Task!")
    }
}


//Creat an HTML element each time a task is added
function creatTaskEle(task) {
    //a div hosting the activity
    let taskList = document.createElement("div");
    taskList.classList.add("list");

    //a div hosting the checkbox and activity
    let taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    
    //an input
    let checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");

    //marking a task as completed
    checkBox.addEventListener('click', function(){
        taskName.classList.toggle('checked')
    })

    //display the input
   let taskName = document.createElement("p");
   taskName.innerText = task;

   //append children to task div
   taskDiv.append(checkBox, taskName)
   
   //creat button
   let buttonDelete = document.createElement("button");
   buttonDelete.classList.add("delete-Task")
   buttonDelete.innerHTML= "Delete";

   //deleting the task and updating the local strorage
   buttonDelete.addEventListener('click', function () {
    toDoList.removeChild(taskList);
    saveTasks();
   })

   //Append to button
   taskList.append(taskDiv, buttonDelete);
   toDoList.appendChild(taskList);
   //Erase the content in the input value when the add button is clicked
   inputBox.value = "";
   inputBox.focus();
}

//Saving the added tasks to the local storage
function saveTasks() {
    //an array where the tasks will be stored/pushed to
    let tasksArray = [];
    //select all the tasks and push them to the array
    toDoList.querySelectorAll('p').forEach(function (taskItem) {
        tasksArray.unshift(taskItem.innerText.trim());
    });

    //setting where to store the data
    localStorage.setItem('tasks', JSON.stringify(tasksArray))
}

//load and display tasks that are already in the local storage each time a page loades
function loadTasks() {
    const localTasks = JSON.parse(localStorage.getItem("tasks"));

    //get each task from the local strorage
    localTasks.forEach(creatTaskEle);
}



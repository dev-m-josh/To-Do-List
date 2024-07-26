
let toDoList = document.getElementById("todo-list");

//Declare the input 
let inputBox = document.getElementById("input-box")

//Declare the Add button
let addButton = document.getElementById("addTask");


let activityList = [];


//addTask function
function addTask() {
    if (inputBox.value === "") {
        alert("You must write something!")
    }else{
        //a div hosting the activity
         let taskList = document.createElement("div");
         taskList.classList.add("list");
         taskList.setAttribute("id", "list");

         //a div hosting the checkbox and activity
         let task = document
         .createElement("div");
         task.classList.add("task");
         
         //an input
         let input = document.createElement("input");
         //input.setAttribute("onclick", "finishedActivity()");
         input.setAttribute("id", "checkbox)");
         input.setAttribute("type", "checkbox")

         //display the input
        let taskName = document.createElement("p");
        taskName.innerHTML = inputBox.value;

        //append children to task div
        task.append(input, taskName)
        
        //creat button
        let buttonDelete = document.createElement("button");
        //buttonDelete.setAttribute("onclick", "deleteActivity()");
        buttonDelete.setAttribute("id", "delete");

        buttonDelete.innerHTML= `<i class="fa-solid fa-xmark"></i>`;

        //Append to button
        taskList.append(task, buttonDelete);
        toDoList.append(taskList);
        //Erase the content in the input value when the add button is clicked
        inputBox.value = "";

        activityList.push(taskName.innerHTML)
        
        
    }
    

}





































































































































































































































































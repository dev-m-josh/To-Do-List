let activityList = [
    {
        id: 1,
        task: 'washing dishes',
        status: true,
        Date: '28/08/2024',
    },
    {
        id: '1',
        task: 'codding',
        status: true,
        Date: '28/08/2024',
    },
    {
        id: 1,
        task: 'taking on tutorials',
        status: true,
        Date: '28/08/2024',
    },
];




let toDoList = document.getElementById("todo-list");

//Declare the input 
let inputBox = document.getElementById("input-box")

//Prevent the page from refresh
inputBox.addEventListener("submit", (e) => {
    e.preventDefault();
})
//Declare the Add button
let addButton = document.getElementById("addTask");




//addTask function
function addTask() {
    if (inputBox.value === "") {
        alert("You must write something!")
    }else{
        taskElement()  
    }
    

}

//function creating a new element
function taskElement(item) {

    //Generate new id each time
    let randomId = Math.floor(Math.random() *100);

        //a div hosting the activity
        let taskList = document.createElement("div");
        taskList.classList.add("list");
        taskList.setAttribute("id", "list");

        //a div hosting the checkbox and activity
        let task = document
        .createElement("div");
        task.classList.add("task");
        
        //an input
        let checkBox = document.createElement("input");
        checkBox.setAttribute("type", "checkbox");

        //display the input
       let taskName = document.createElement("p");
       taskName.setAttribute("id", randomId)
       taskName.innerHTML = inputBox.value;
       

       //append children to task div
       task.append(checkBox, taskName)
       
       //creat button
       let buttonDelete = document.createElement("button");
       buttonDelete.innerHTML= `<i class="fa-solid fa-xmark"></i>`;

       //Append to button
       taskList.append(task, buttonDelete);
       toDoList.append(taskList);
       //Erase the content in the input value when the add button is clicked
       inputBox.value = "";

       objectData = {
        id: taskName.id,
        status:false,
        task: taskName.innerHTML,
        Date: new Date()
       } 

       //mark as done
       checkBox.addEventListener("click", () => {
            taskName.classList.toggle("checked")
       })

       

       activityList.unshift(objectData)
       console.log(activityList)
}

































































































































































































































































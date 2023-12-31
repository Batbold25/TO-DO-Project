const btnRef = document.getElementsByClassName("add-btn")
const input = document.getElementById ("input-container");
const addTask = document.getElementById ("addTask");
const titleRef = document.getElementById("text");
const descriptionRef = document.getElementById("description");
const statusRef = document.getElementById("status");
const priorityInputRef = document.getElementById("priority")
const task = document.getElementById("task");
const taskContainer = document.querySelectorAll(".task");
const inProText = document.getElementById("inProText");
const stuckText = document.getElementById("stuck-Text");
const doneText = document.getElementById("doneCont");
const main = document.getElementById("main")

console.log("taskContainer", taskContainer);


for ( var i = 0; i < btnRef.length; i++){
    btnRef[i].addEventListener("click" , () => {
        input.style.visibility = "visible"
    })
}

function createTask(title, description, priority) {
    const taskCont = document.createElement("div");
    taskCont.id = "taskCont";
    // task.appendChild(taskCont);

    // select option  carts 

    console.log( " status ", statusRef.value);
    if (statusRef.value === "to-DO"){
        task.appendChild (taskCont)
        console.log(task);
    }
    if (statusRef.value === "in-progress"){
        inProText.appendChild (taskCont)
    }
    if (statusRef.value === "stuck"){
        stuckText.appendChild (taskCont)
    }


    const done = document.createElement("div");
    done.id = "done";
    done.innerHTML = `<i class="fa-solid fa-check"></i>`;
    taskCont.appendChild(done);

    const text = document.createElement("div");
    text.id = "textCart";
    taskCont.appendChild(text);

    const action = document.createElement("div");
    action.id = "action";
    taskCont.appendChild(action);

    // Action new elements
    const deleteBtnRef = document.createElement("i");
    const editBtn = document.createElement("i");

    deleteBtnRef.id = "deleteBtn";
    deleteBtnRef.innerHTML = `<i class="fa-solid fa-x"></i>`;

    editBtn.id = "editBtn";
    editBtn.innerHTML = `<i class="fa-regular fa-pen-to-square"></i>`;
    action.appendChild(deleteBtnRef);
    action.appendChild(editBtn);

    // REMOVE BTNs
    deleteBtnRef.addEventListener("click", (event) => {
        console.log(event.target.parentNode)
        const parent = event.target.parentNode.parentNode.parentNode
        console.log(parent.parentNode);
        const taskContainer = parent.parentNode; 
        taskContainer.removeChild(taskCont)
   
    
    });


    // DONE BTN
    done.addEventListener("click", () => {
        doneText.appendChild(taskCont);
    });

    const taskTitle = document.createElement("h1");
    text.appendChild(taskTitle);
    taskTitle.textContent = title;

    const taskDescription = document.createElement("p");
    text.appendChild(taskDescription);
    taskDescription.textContent = description;

    const taskPriority = document.createElement("p");
    taskPriority.id = "valueS";
    text.appendChild(taskPriority);
    taskPriority.textContent = priority;

    
}

function TaskCount() {
    const taskContObjects = document.getElementById("task").childElementCount;
    const taskCountSpan = document.getElementById("todo-counts");
    console.log("task length",taskContObjects.length);

    const CountInproObjects = document.getElementById("inProText").childElementCount;
    const inproSpan = document.getElementById("progress-counts");

    console.log("inprogress length", CountInproObjects.length);

    const countStukOject = document.getElementById("stuck-Text").childElementCount;
    const stukSpan = document.getElementById("stuck-counts");

    const counDoneObject = document.getElementById ("doneCont").childElementCount;
    const doneSpan = document.getElementById("done-counts")
  
    taskCountSpan.textContent = taskContObjects;
    inproSpan.textContent = CountInproObjects;
    stukSpan.textContent = countStukOject;
    doneSpan.textContent = counDoneObject;


}
  

addTask.addEventListener("click", () => {
    input.style.visibility = "hidden";

    // Call the createTask function with the input values
    createTask(titleRef.value, descriptionRef.value, priorityInputRef.value);
    titleRef.value = ""
    descriptionRef.value = ""

    TaskCount();
});















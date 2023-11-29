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
const doneText = document.getElementById("doneCont")

console.log("taskContainer", taskContainer);


for ( var i = 0; i < btnRef.length; i++){
    btnRef[i].addEventListener("click" , () => {
        input.style.visibility = "visible"
    })
}

function createTask(title, description, priority) {
    const taskCont = document.createElement("div");
    taskCont.id = "taskCont";
    task.appendChild(taskCont);

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

addTask.addEventListener("click", () => {
    input.style.visibility = "hidden";


    // Call the createTask function with the input values
    createTask(titleRef.value, descriptionRef.value, priorityInputRef.value);
    titleRef.value = ""
    descriptionRef.value = ""
});











const btnRef = document.getElementsByClassName("add-btn")
const input = document.getElementById ("input-container");
const addTask = document.getElementById ("addTask");
const titleRef = document.getElementById("text");
const descriptionRef = document.getElementById("description");
const statusRef = document.getElementById("status");
const priorityInputRef = document.getElementById("priority-input")

console.log(btnRef , titleRef , descriptionRef);


for ( var i = 0; i < btnRef.length; i++){
    btnRef[i].addEventListener("click" , () => {
        input.style.visibility = "visible"
    })

}
addTask.addEventListener ("click", () => {
    input.style.visibility = "hidden"
})


//-------- creat elment ------------------

//----- ERONHII AGUULJ BUI CONTAINER
const cart = document.createElement ("div");

// -----------------------------------------

//              SECTION VIEW ELMENTS 

const done = document.createElement ("div");
const textCont = document.createElement ("div");
const actionBtn = document.createElement ("div");


//       TEXT CONTAINER DOTROH ELMENTS

const title = document.createElement("h1");
const description = document.createElement ("p");

//        APPEND CHILDE BY TEXT CONTAINER

textCont.append (title, description)




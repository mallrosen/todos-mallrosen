import "./../scss/style.scss";

let todoList = ["Tvätta", "Plugga", "Handla mat", "Träna"];


const toDosContainer = document.getElementById("toDoContainer");
const taskUl = document.createElement("ul");
toDosContainer.appendChild(taskUl);    
taskUl.className = "todo";



for (let i = 0; i < todoList.length; i++) {
    const taskLi = document.createElement("li");
    const taskH2 = document.createElement("h2");
    const removeButton = document.createElement("button");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    taskUl.appendChild(taskLi);
    taskLi.appendChild(taskH2);
    taskLi.appendChild(removeButton);
    taskLi.appendChild(checkbox);

    taskH2.innerHTML = todoList[i] + " ";
    removeButton.innerHTML = "Done ✓";
    taskLi.className = "toDoLi";

    /*Event*/

    // removeButton.addEventListener("click", () => {
    //     handleToDoList(todoList[i]);
    //   });


    // removeButton.addEventListener("click", () => {
    //     todoList.splice(i, 1);
    // //   createHtml();
    // });


}


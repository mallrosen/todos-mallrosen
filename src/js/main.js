import "./../scss/style.scss";
import { Tasks } from "./models/Tasks";


const header = document.createElement("header");
document.body.appendChild(header);

const headerh1 = document.createElement("h1");
header.appendChild(headerh1);
headerh1.innerHTML = "TO DO-LIST"

if (localStorage.getItem("todoList")) {
    todoList = JSON.parse(localStorage.getItem("todoList"));
   }

const task1 = new Tasks("Tvätta", true);
const task2 = new Tasks("Städa", false);
const task3 = new Tasks("Handla mat", false)
const task4 = new Tasks("Plugga", false);

let todoList = [task1, task2, task3, task4];
const createHtml = () => {
const toDosContainer = document.getElementById("toDoContainer");
toDosContainer.innerHTML = "";

const taskUl = document.createElement("ul");
toDosContainer.appendChild(taskUl);    
taskUl.className = "todo";


localStorage.setItem("todoTasks", JSON.stringify(todoList))

for (let i = 0; i < todoList.length; i++) {
    const taskLi = document.createElement("li");
    const taskH2 = document.createElement("h2");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todoList[i].isDone;

    checkbox.addEventListener("click", () => {
    todoList.splice(i, 1);
    createHtml();
})
    taskUl.appendChild(taskLi);
    taskLi.appendChild(taskH2);
    taskLi.appendChild(checkbox);

    taskH2.innerHTML = todoList[i].title;
    checkbox.innerHTML = todoList[i].isDone;
    taskLi.className = "toDoLi";
}

}

createHtml();




// const footer = document.createElement("footer");
// const fDiv = document.createElement("div");
// const fA = document.createElement("a");
// const fP = document.createElement("p");
// document.body.appendChild(footer);

// footer.appendChild(fDiv);
// fDiv.appendChild(fA);
// fA.appendChild(fP);

// fP.innerHTML = "&copy;FED23S-2023";


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

const task1 = new Tasks("Tvätta", false);
const task2 = new Tasks("Städa", false);
const task3 = new Tasks("Handla mat", false)
const task4 = new Tasks("Plugga", false);

let todoList = [task1, task2, task3, task4];

const createHtml = () => {
const appContainer = document.getElementById("app");
appContainer.innerHTML = "";

const taskUl = document.createElement("ul");
appContainer.appendChild(taskUl);    
taskUl.className = "todo";


localStorage.setItem("todoTasks", JSON.stringify(todoList))

for (let i = 0; i < todoList.length; i++){
    if (todoList[i].isDone === false){

    const taskLi = document.createElement("li");
    const taskH2 = document.createElement("h2");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todoList[i].isDone;

    checkbox.addEventListener("click", () => { 
        todoList[i].isDone = true;
  /*       console.log(todoList[i].isDone); */
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
}

createHtml();

const addTaskContainer = document.createElement("div")
addTaskContainer.className = "input-task";

const taskBtn = document.createElement("button");
taskBtn.innerHTML = "Lägg till!"

const textBox = document.createElement("input");
textBox.setAttribute("type", "textarea");
textBox.className = "textBox";

textBox.placeholder = "Skriv in en ny uppgift:";

addTaskContainer.appendChild(textBox);
addTaskContainer.appendChild(taskBtn);
document.body.appendChild(addTaskContainer);

taskBtn.addEventListener("click", () => {
    let itemText = textBox.value;
    const task = new Tasks(itemText, false);
    todoList.push (task);
    console.log(todoList);
    createHtml();
})


const footer = document.createElement("footer");
const fP = document.createElement("p");
document.body.appendChild(footer);

footer.appendChild(fP);

fP.innerHTML = "&copy;FED23S-2023";

 
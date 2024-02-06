import "./../scss/style.scss";
import { Tasks } from "./models/Tasks";

export default defineConfig({
    base: '/<https://mallrosen.github.io/todos-mallrosen/>/',
})

const header = document.createElement("header");
document.body.appendChild(header);

const headerh1 = document.createElement("h1");
header.appendChild(headerh1);
headerh1.innerHTML = "TO DO-LIST"


const task1 = new Tasks("Tvätta", false);
const task2 = new Tasks("Städa", false);
const task3 = new Tasks("Handla mat", false)
const task4 = new Tasks("Plugga", false);

let todoList = [task1, task2, task3, task4];

if (localStorage.getItem("todoTasks") === null) {
    localStorage.setItem("todoTasks", JSON.stringify(todoList));    
   }
else {
   todoList = JSON.parse(localStorage.getItem("todoTasks"));
   }  

   
const sortBtn = document.createElement("button");
sortBtn.innerHTML = "Sortera A-Ö";
sortBtn.className = "sortBtn taskBtn";

sortBtn.addEventListener("click", mySortFunction);

function mySortFunction(){
todoList.sort(function(a, b){
    let x = a.title.toLowerCase();
    let y = b.title.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
});
createHtml();
}

const sortBtn2 = document.createElement("button");
sortBtn2.innerHTML = "Sortera avklarade";
sortBtn2.className = "sortBtn2 taskBtn";

sortBtn2.addEventListener("click", mySortFunction2);

function mySortFunction2(){
const falseFirst = todoList.sort((a, b) => Number(a.isDone) - Number(b.isDone));

 createHtml();
}

const sortBox = document.createElement("div");
sortBox.className = "sortBox";
sortBox.appendChild(sortBtn);
sortBox.appendChild(sortBtn2);
document.body.appendChild(sortBox);
   

const createHtml = () => {
localStorage.setItem("todoTasks", JSON.stringify(todoList)); 

const appContainer = document.getElementById("app");
appContainer.innerHTML = "";

const taskUl = document.createElement("ul");
appContainer.appendChild(taskUl);    
taskUl.className = "todo";


for (let i = 0; i < todoList.length; i++){ 
    const taskLi = document.createElement("li");
    const taskH2 = document.createElement("h2");
    const checkbox = document.createElement("input");
    const removeBth = document.createElement("button");

    taskUl.appendChild(taskLi);
    taskLi.appendChild(taskH2);
    taskLi.appendChild(checkbox);
    taskLi.appendChild(removeBth);

    checkbox.type = "checkbox";
    checkbox.checked = todoList[i].isDone;

    taskH2.innerHTML = todoList[i].title;
    checkbox.innerHTML = todoList[i].isDone;
    removeBth.className = "bi bi-trash3";
    taskLi.className = "toDoLi";

    removeBth.addEventListener("click", () => {
        if (confirm("Är du säker på att du vill radera din to-do?") == true) {
        todoList.splice(i, 1);
        }
        createHtml();

    })

    checkbox.addEventListener("click", () => { 
        if (todoList[i].isDone === false){
        todoList[i].isDone = true;
        createHtml();
        }
        else if (todoList[i].isDone === true){
            todoList[i].isDone = false;
            createHtml();
            }
    })
   
if (todoList[i].isDone === true){
    taskH2.className = "line";
}}}
createHtml();


const addTaskContainer = document.createElement("div")
addTaskContainer.className = "input-task";

const taskBtn = document.createElement("button");
taskBtn.innerHTML = "Lägg till!"
taskBtn.className = "taskBtn";

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
    textBox.value = "";
    createHtml();
})

const footer = document.createElement("footer");
const fP = document.createElement("p");
document.body.appendChild(footer);
footer.appendChild(fP);
fP.innerHTML = "&copy;FED23S-2023";

 
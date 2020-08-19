//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-box");


const trashButtons = document.querySelectorAll(".trash-button")


//EventListeners
todoButton.addEventListener("click",addTodo);

todoList.addEventListener("click",deleteCheck);
document.addEventListener("DOMContentLoaded", getTodos);

////Functions

function addTodo(event){
    event.preventDefault();
    if( todoInput.value != ""){
    //todoDIV
    console.log("hey")
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-container");

    const todoUl = document.createElement("ul");
    todoUl.classList.add("todo-list-item");
    todoDiv.appendChild(todoUl);
    
    const todoWork = document.createElement("li");
    todoWork.innerText = todoInput.value;
    todoUl.appendChild(todoWork);
    // add todoItems to local storage
    saveToLocalStorage(todoInput.value);

    const checkButton = document.createElement("button");
    checkButton.innerHTML = ' <i class= "check-icon fas fa-check"></i>';
    checkButton.classList.add("check-button");
    todoDiv.appendChild(checkButton);

    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class = "trash-icon fas fa-trash"></i>';
    trashButton.classList.add("trash-button");
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);
    todoInput.value = "";
    }
}

function deleteCheck(event){
    // console.log(event.target)
    const item = event.target;
    if (item.classList[0] === "trash-icon"){
        removeLocalStorageTodos(item)
        // console.log(item.parentElement.parentElement)
        item.parentElement.parentElement.remove();
       
    }
    else if(item.classList[0] === "check-icon"){
        console.log(item.parentElement.parentElement.classList.toggle("todo-list-item-line-through"))  
    }

};

function saveToLocalStorage(todo){
    // Check if i have things
    console.log("hello"); 
    let todos;
    if (localStorage.getItem('todos') === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.push(todo);
    localStorage.setItem('todos',JSON.stringify(todos));
}

function getTodos(){
    let todos;
    if (localStorage.getItem('todos') === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function(todo) {
        const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-container");

    const todoUl = document.createElement("ul");
    todoUl.classList.add("todo-list-item");
    todoDiv.appendChild(todoUl);
    
    const todoWork = document.createElement("li");
    todoWork.innerText = todo;
    todoUl.appendChild(todoWork);
    
    

    const checkButton = document.createElement("button");
    checkButton.innerHTML = ' <i class= "check-icon fas fa-check"></i>';
    checkButton.classList.add("check-button");
    todoDiv.appendChild(checkButton);

    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class = "trash-icon fas fa-trash"></i>';
    trashButton.classList.add("trash-button");
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);
        
    });

}

function removeLocalStorageTodos(todo){
    let todos;
    if (localStorage.getItem('todos') === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    console.log(todo.parentElement.parentElement.firstChild.innerText);

    console.log(todos.indexOf(todo.parentElement.parentElement.firstChild.innerText));

    const itemName = todo.parentElement.parentElement.firstChild.innerText;

    todos.splice(todos.indexOf(itemName),1);

    localStorage.setItem('todos',JSON.stringify(todos));



}
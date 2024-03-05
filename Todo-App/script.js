// Finding Elements
const container = document.querySelector(".container");
const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector("#todoInput");
const addTodoBtn = document.querySelector(".addTodoBtn");
const todoLists = document.querySelector(".todoLists");
const messageElement = document.querySelector("#showMessage")

// todo add message
const showMessage = (text, status)=>{
    messageElement.textContent = text;
    messageElement.classList.add(`bg-${status}`);
    setTimeout(()=>{
        messageElement.textContent = "";
        messageElement.classList.remove(`bg-${status}`);
    },1000)
}

// getTodosFromLocalStorage
const getTodosFromLocalStorage = ()=>{
    return localStorage.getItem("myTodo") ? JSON.parse(localStorage.getItem("myTodo")) : [];
}

// deleteTodo 
const deleteTodo = (e)=>{
    const selectedTodo = e.target.parentElement.parentElement
    todoLists.removeChild(selectedTodo);
    showMessage("Todo Is Deleted", "danger");
    let todos = getTodosFromLocalStorage();
    todos = todos.filter((todo)=> todo.todoId !== selectedTodo.id);
    localStorage.setItem("myTodo", JSON.stringify(todos));
}

// Create Todo Element
const createTodoElement = (todoValue, todoId) => {
  const todoElement = document.createElement("li");
  todoElement.id = todoId;
  todoElement.classList.add("li-style")
  todoElement.innerHTML = `<span>${todoValue}</span> <span id="deleteTodoBtn">
    <i class="fa-solid fa-trash"></i>
    </span>`;
  todoLists.appendChild(todoElement);
  showMessage("Todo Is Added", "sucess")
  const deleteTodoBtn = todoElement.querySelector("#deleteTodoBtn");
  deleteTodoBtn.addEventListener("click", deleteTodo)
};



// Add Todo
const addTodo = (e) => {
  e.preventDefault();
  const todoValue = todoInput.value;
  // unique id
  const todoId = Date.now().toString();
  createTodoElement(todoValue, todoId);

  // add todo to localStorage
  const todo = getTodosFromLocalStorage()
  todo.push({todoId, todoValue});
  localStorage.setItem("myTodo", JSON.stringify(todo));
  todoInput.value = "";
};

// load todos 
const loadTodos = ()=>{
    const todos = getTodosFromLocalStorage();
    todos.map((todo)=> createTodoElement(todo.todoValue, todo.todoId))
}

// event listeners handling
todoForm.addEventListener("submit", addTodo);
window.addEventListener("DOMContentLoaded", loadTodos)

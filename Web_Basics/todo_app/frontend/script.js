// vraiables

const apiUrl = "http://127.0.0.1:8000/todos"

// functions

async function loadTodos() {

    const response = await fetch(apiUrl);
    const todos = await response.json();

    // rendern der todos auf die Webseite
    let todoListHtml = document.querySelector("#todoList")
    todoListHtml.innerHTML = ""
    for (todo of todos) {
        let listItem = document.createElement("li")  // <li></li>
        listItem.textContent = todo["title"] // <li>titel vom todo</li>
        todoListHtml.appendChild(listItem)
    }
}

async function addTodo() {
    const request = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            userId: 1,
            id: 3,
            title: document.querySelector("#addTaskInput").value,
            completed: false
        })
    }

    const response = await fetch(apiUrl, request)
    // const new_todo = await response.json()

    // Input Feld wird geleert
    document.querySelector("#addTaskInput").value = ""
    // Liste wird komplett neu geladen
    loadTodos()
}

// button event listener

let addTodoButton = document.querySelector("#addTaskButton")
addTodoButton.addEventListener("click", () => {
    addTodo()
})

// main

loadTodos()
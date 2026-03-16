// vraiables

// dummy data
let todos_dummy = [                //{id: bla, titel: "text"}
    {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false
    },
    {
        userId: 1,
        id: 2,
        title: "quis ut nam facilis et officia qui",
        completed: false
    },
    {
        userId: 1,
        id: 3,
        title: "fugiat veniam minus",
        completed: false
    }
]

// functions

function loadTodos() {
    let todoListHtml = document.querySelector("#todoList")
    todoListHtml.innerHTML = ""

    for (todo of todos_dummy) {
        console.log(todo)
        let listItem = document.createElement("li")  // <li></li>
        listItem.textContent = todo["title"] // <li>titel vom todo</li>
        todoListHtml.appendChild(listItem)
    }
}

function addTodo() {
    todos_dummy.push(
        {
            userId: 1,
            id: 3,
            title: document.querySelector("#addTaskInput").value,
            completed: false
        }
    )
    document.querySelector("#addTaskInput").value = ""
}

// button event listener

let addTodoButton = document.querySelector("#addTaskButton")
addTodoButton.addEventListener("click", () => {
    addTodo()
    loadTodos()
})

// main

loadTodos()
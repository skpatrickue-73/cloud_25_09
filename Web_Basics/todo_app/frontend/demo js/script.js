
function loadTodos(tasks) {
    console.log(tasks[0])
}

async function getTodos() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos")

    if (!res.ok) {
      throw new Error(`HTTP-Fehler: ${res.status}`);
    }

    const tasks = await res.json()
    loadTodos(tasks)

    return tasks

    } catch (error) {
        console.error("Fehler:", error)
    }
}



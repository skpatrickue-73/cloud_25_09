

export async function getTodos() {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos")
      const todos = await res.json()
      return todos
}
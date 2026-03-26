import React, { useState, useEffect } from "react";
import { getTodos } from "../api/getTodos";
import todos from "../data/todos.json" with {
  type: "json"
}

console.log(todos[0])

function TodoList() {

  const [tasks, setTasks] = useState(todos);
  const [userInput, setUserInput] = useState("");


// useEffect(arg1, arg2)
  useEffect(() => {
    async function loadPage() {
      const todos = await getTodos()
      setTasks(todos)
    }
    loadPage()
    }
  , [])

  function addTask(newTask) {
    if (newTask) {
      setTasks((t) => [...t, newTask]);
    }
  }

  return (
    <>
      <div
        id="inputContainer"
        className="border-3 p-4 mx-6 border-violet-800 bg-amber-600 rounded-2xl"
      >
        <input
          type="text"
          id="addTaskInput"
          placeholder="Was steht an Rockstar🎸"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button
          type="button"
          id="addTaskButton"
          onClick={() => addTask(userInput)}
        >
          Add Task
        </button>
      </div>

<ul className="bg-sky-300 p-4 mx-6 mt-1 border-3 border-violet-800 rounded-2xl 
md:bg-sky-600 hover:bg-sky-700 
transition-all duration-300 ease-in-out transition-all duration-200 active:scale-95">
          {tasks.map(task => 
          <li key={task.id}><span><input type="checkbox" value={task.completed}/>{task.title}</span></li>
        )}

        {/* <li>
        ["eat", "study", "sleep"]
          <span>
            <input type="checkbox" checked="false" />
            Baue App
            <button>ändern</button>
            <button>löschen</button>
          </span>
        </li> */}
      </ul>
    </>
  );
}

export default TodoList;

// sneak peak
// function removeTask(index) {
//   const updatedTasks = tasks.filter((_, taskIndex) => taskIndex !== index)
//   setTasks(updatedTasks)
// }

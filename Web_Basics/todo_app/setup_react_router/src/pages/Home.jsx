import { Link } from "react-router-dom"
import CompA from "../components/CompA"
import { createContext, useState } from "react"

export const WordContext = createContext()
export const CountContext = createContext()

export default function Home() {

const [ word, setWord ] = useState("Banana")
const [ count, setCount ] = useState(0)

  return (
    <div>
        <h1>hello</h1>
        <h2>The Word is {word}</h2>
        <br />
        <h3>Counter: {count}</h3>
        <button onClick={() => setCount(count+1)}>+</button>
        <button onClick={() => setCount(count-1)}>-</button>
        <br />
        <CountContext.Provider value={{count, setCount}}>
            <WordContext.Provider value={word}>
                <CompA />
            </WordContext.Provider>
        </CountContext.Provider>
    </div>
  )
}

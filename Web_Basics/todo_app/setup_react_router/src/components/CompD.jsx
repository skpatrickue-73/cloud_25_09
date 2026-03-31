import { useContext } from 'react'
import { WordContext } from '../pages/Home'
import { CountContext } from '../pages/Home'

export default function CompD() {

    const word = useContext(WordContext)
    const {count, setCount } = useContext(CountContext)


  return (
    <div className="comp">
        <h1>CompD</h1>
        <h3>Counter: {count}</h3>
        <button onClick={() => setCount(c => c+1)}>+</button>
        <button onClick={() => setCount(count-1)}>-</button>
        <br />
        <h2>The word is {word}</h2>
        </div>
  )
}


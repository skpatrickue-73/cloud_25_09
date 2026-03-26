import React, { useState, useEffect } from 'react'


export default function Counter() {
  
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);


  useEffect( () => {
    setCount3(count3 +1)
    setCount3(count3 +1)
    setCount3(count3 +1)

    }, [count2, count]
  )
  // bei useEffect fürs zweite argument
  // nichts -> bei jedem rerender der Komponente
  // [] -> beim ersten rendern der Komponente
  // [state, state2] beim verändern jedes states der eingesezt

  // bei kurzen leicht lesbaren funktionen, kann man diese auch direkt unten im HTML schreiben.
  // function countUp() {
  //   setCount(count + 1);
  // }

  function countDown() {
    setCount(c => c - 1);
  }

  function countReset() {
    setCount(0);
  }

  function countDown2() {
    setCount2(count2 - 1);
  }

  function countReset2() {
    setCount2(0);
  }


  return (
    <div>
      <span>Counter: {count3}</span>
      <br />
      <span>Counter: {count}</span>
      <button onClick={() => setCount(c => c + 1)}>⬆</button>
      <button onClick={countDown}>⬇</button>
      <button onClick={countReset}>💥</button>
      <br />
      <span>Counter: {count2}</span>
      <button onClick={() => setCount2(c => c + 1)}>⬆</button>
      <button onClick={countDown2}>⬇</button>
      <button onClick={countReset2}>💥</button>
    </div>
  )
}


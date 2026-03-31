import React from 'react'
import CompD from './CompD'
import { useContext } from 'react'
import { WordContext } from '../pages/Home'

export default function CompC() {

    const word = useContext(WordContext)

  return (
    <div className="comp">
        <h1>CompC</h1>
        <br />
        <h2>The word is {word}</h2>
        <CompD/>
        </div>
  )
}

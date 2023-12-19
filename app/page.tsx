"use client";

import Image from 'next/image'
import { FormEvent, useState } from 'react'

export default function Home() {

const [inputVal, setInputVal] = useState ("")

 const handlesSumbit = (event: FormEvent) => {
  event.preventDefault();
 }

  return (
     <div>
      <div>
        <h1>Enter your name</h1>
      </div>
      <form onSubmit={handlesSumbit}>
        <input type='text' placeholder='type your name' value={inputVal} onChange={(e) => setInputVal(e.target.value)}>

        </input>
        <button type='submit'>Predict Data</button>
      </form>
     </div>
  )
}

import React, { useState } from 'react'

function ToggleuseState() {
    const [free , toggleState] = useState(true)
    

  return (
    <div>
      <h1>{(free ? "I am freeee" : "I am arrested")}</h1>
      <button onClick={()=>(
        free ? toggleState(false) : toggleState(true))}>{free ? "Arrest kardo" : "Free Kardo"}</button>
    </div>
  )
}

export default ToggleuseState;

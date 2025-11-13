import React, { useState } from 'react'

function ValueIncrementor() {
    const [count , setCount] = useState(0);
 
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount((currentVal)=>currentVal+1)}>Increase the Counter</button>
      <button onClick={()=>setCount((currentVal)=>currentVal-1)} style={{ marginLeft: "10px" }} >Decrease the Counter</button>
    </div>
  )
}

export default ValueIncrementor

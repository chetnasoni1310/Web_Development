import React, { useState } from "react";

function AdvanceArrayValueAdder() {
  const [val, setVal] = useState([1, 2, 3, 4, 5, 6]);

  function printValues() {
    val.map((value) => <h1>{value}</h1> );
  }

  return (
    <div>
      <button onClick={printValues}>Print Values of array</button>
      {val.map((value) => <h1>{value}</h1> )}
      <button onClick={()=>setVal(()=>{
       [...val , val.push(1234)]
      })}>Add Values in array</button>
    </div>

  );
}

export default AdvanceArrayValueAdder;

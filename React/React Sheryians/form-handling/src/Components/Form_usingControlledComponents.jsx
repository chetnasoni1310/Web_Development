/* eslint-disable no-unused-vars */

import React, { useState } from 'react'

function Form_usingControlledComponents() {

//    const [nameVal , setName] = useState({name : ""});
//    const [ageVal , setAge] = useState({age : ""});
// yeh 2 baar bnaane ki jrurt hi nhi thi ,, ek hi object mai ho jaata sabka kaam lets see beloww -->>>

const [ val , setVal] = useState({name:"" , age:""});

   const handleSubmission = (event) =>{
      event.preventDefault();

    //   Old method yaarrrrrrrrrr 
    //   console.log(nameVal);
    //   console.log(ageVal);
    //   console.log(nameVal.name);
    //   console.log(ageVal.age);



    //New one using multiple property in single object of useState()
    console.log(val);
    console.log(val.name);
    console.log(val.age);
   }

  return (
    <div>
       <form action="" onSubmit={handleSubmission}>
        <input type="text" onChange={ (event) => setVal((prev) => ({ ...prev, name: event.target.value })) } placeholder='name' className='border-2' />
        <br />
        <br />
        <input type="text" onChange={ (event) => setVal((prev) => ({ ...prev, age: event.target.value })) } placeholder='age' className='border-2' />
        <br />
        <br />
        <input type="submit" className='border-2 p-1 px-4 rounded-md bg-blue-200 cursor-pointer'  />
       </form>
    </div>
  )
}

export default Form_usingControlledComponents

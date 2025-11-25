import React, { useRef } from 'react'

function Form_usingUseRef() {

   const name = useRef(null) ;
   const age = useRef(null) ;


   const handleSubmission =  (event)=>{ 
    event.preventDefault();
    console.log(name , age);  //Yeh current krke property return krte h 
    console.log(name.current , age.current); //Yeh field return krte hai 
    console.log(name.current.value , age.current.value); //Yeh uss field ki exact value kya hai voh return krte hai
}


  return (
    <div>
      <form action="" method='post'  onSubmit={handleSubmission}   >
        <input  ref={name} type="text" placeholder='name' name='name' className='border p-1'/>
        <br />
        <br />
        <input ref={age}  type="number" placeholder='age' name='age' className='border p-1' />
        <br />
        <br />
        <input type="submit" className='border-2 p-1 px-4 rounded-md bg-blue-100' />
      </form>
    </div>
  )
}

export default Form_usingUseRef

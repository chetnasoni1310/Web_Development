/* eslint-disable no-unused-vars */

import React from 'react'
import { useForm } from 'react-hook-form' ;


function Form_usingReactHookForm() {

  const {register , handleSubmit} = useForm();
  


  return (
    <div>
       <form action="" onSubmit={handleSubmit( data => console.log(data))}>
        <input {...register('name')} type="text" placeholder='name' className='border-3' />
        <br />
        <br />
        <input {...register('age')} type="text" placeholder='age' className='border-3' />
        <br />
        <br />
        <input type="submit" className='border-2 p-1 px-4 rounded-md bg-blue-300 cursor-pointer'  />
       </form>
    </div>
  )
}

export default Form_usingReactHookForm

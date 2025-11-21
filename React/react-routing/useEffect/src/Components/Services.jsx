import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'

function Services() {


    const[first , setFirst] = useState('This is a normal day');
    const[second , setSecond] = useState('This is a very much excited day');

  
    useEffect( ()=>{
        console.log('service component is created');

        return ()=>{
            console.log('Service component is deleted');
        }
    } , [second])

//Dekho jab tak humne useEffect ke andar dusra parameter nhi dia tha tab tk voh poore page ko re-render kr rha tha 
//Aur hum chahte the ki sirf update kre uss State ko jo change ho rhi h , toh humne 
//           useEffect( ()=>{} , []) 
//            mai [] yeh wala component add kr dia 
//But ab hum chahte hai ki first ko chalaye tb updation ho aur second ko chhalaye toh re-rendering ho poore ke poore page ki , toh fir uske liye hum kya krenge --->>
//             useEffect( ()=>{} , [second])
//             mai [second] put kr denge 

  return (
    <div>
      <h1 className='text-3xl font-semibold my-10 ml-10'>This is the service ✂️🔨 page</h1>

      <h1 className='pl-10 text-xl'>{first}</h1>
      <button onClick={()=>setFirst('Changed')} className=' ml-10  mt-4 px-6 py-2 rounded-full mb-10 bg-blue-200'>Change normal day</button>

      <h1 className='pl-10 text-xl'>{second}</h1>
      <button onClick={()=>setSecond('Changed')} className=' ml-10 mt-4  px-6 py-2 rounded-full mb-10 bg-red-200'>Change excited day</button>

    </div>
  )
}

export default Services

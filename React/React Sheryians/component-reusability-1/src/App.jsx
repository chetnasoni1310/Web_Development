import React from 'react'

function App() {

  //Jo bhi data use hoga usko yahan rakhenge 
  const data = ['Chetna' , 1 , 2,3 , 4,"5678YOYO"];

  return (
    <div>
      {data.map((elem ,  index)=>(
        <div key ={index} className='text-center px-10 py-5 mt-5 bg-zinc-200 rounded-md w-50 h-10'>
          {elem}
        </div>
      ))}
    </div>
  )
}
export default App

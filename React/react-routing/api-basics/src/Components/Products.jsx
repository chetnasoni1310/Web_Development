import React from 'react'

function Products({productData}) {

    if(productData=='null' || productData.length == 0)
    {
       return <h2>No products added yet</h2>
    }

  return (
    <div className='flex flex-wrap gap-10 justify-center align-center'>
      {
        productData.map((item , index)=>{
          return <div key={index} className='bg-zinc-200 w-[30rem] h-[35rem] rounded-4xl overflow-hidden' >
              <img src={item.image} alt="" className='w-full h-[60%] object-cover'/>
              <h1 className='px-10 text-4xl font-semibold mt-4'>{item.title}</h1>
              <h2 className='px-10 text-xs pt-2 font-semibold  mt-2'>{item.description}</h2>
           </div>
        })
      }
    </div>
  )
}

export default Products

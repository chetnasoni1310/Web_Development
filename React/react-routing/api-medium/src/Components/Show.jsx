import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from '../utils/Axios'


function Show() {

     const [productData , setProductData] = useState([]);

    const getAPI = ()=>{
        const api = '/Products';

        axios
             .get(api)
                .then(products => setProductData(products.data))  
                    .catch(err => console.log(err));
    }
    
   
    const postAPI = ()=>{
        const api = '/Products';

        axios
            .post(api , {
                title : 'Chetna',
                price : '1',
                description:'Cool stuffs',
                image : 'https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=',
                category: 'Human'
            }).then(response => {
                console.log(response)
                setProductData(prev => [...prev, response.data]);
                })
                 .catch(err => console.log(err))
    }

      useEffect( ()=>{
      getAPI();
    },[])

  return (
    <>
    <button onClick={()=>getAPI()} className='ml-4 mt-6 bg-teal-300 px-6 py-2 rounded-full text-xl'>Get Products with API</button>
      <br /> 
      <br />
      <button onClick={()=>postAPI()} className='ml-4 bg-teal-300 px-6 py-2 rounded-full text-xl'>Add Product in API</button>
      <br />
      <br />
      <br />
      <br />
      <br />

    <div className='flex flex-wrap gap-16 justify-center align-center'>
      {
        productData.map((item , index)=>{
          return <div key={index} className='bg-zinc-200 w-120 h-140 rounded-4xl overflow-hidden' >
              <img src={item.image} alt="" className='w-full h-[60%] object-cover'/>
              <h1 className='px-10 text-4xl font-semibold mt-4'>{item.title}</h1>
              <h2 className='px-10 text-xs pt-2 font-semibold  mt-2'>{item.description}</h2>
           </div>
        })
      }
    </div>
    </>
  )
}

export default Show

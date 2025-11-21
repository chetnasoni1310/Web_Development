import React, { useState } from 'react'
import axios from 'axios'
import Products from './Products';

function API_basics() {
    
    const [productData , setProductData] = useState([]);

    const getAPI = ()=>{
        const api = 'https://fakestoreapi.com/Products';

        axios
             .get(api)
                .then(products => setProductData(products.data))  
                    .catch(err => console.log(err));
    }
    
   
    const postAPI = ()=>{
        const api = 'https://fakestoreapi.com/Products';

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

  return (
    <div>
      <button onClick={()=>getAPI()} className='ml-4 mt-6 bg-teal-500 px-6 py-2 rounded-md text-xl'>Get Products with API</button>
      <br />
      <br />
      <hr />
      <br />
      <button onClick={()=>postAPI()} className='ml-4 bg-teal-500 px-6 py-2 rounded-md text-xl'>Add Product in API</button>
      <br />
      <br />
      <div className="productCard">
          <Products productData = {productData} />
      </div>

    </div>
  )
}

export default API_basics

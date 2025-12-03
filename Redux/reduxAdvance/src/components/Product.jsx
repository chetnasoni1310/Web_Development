import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct } from '../store/reducers/productReducer';


function Product() {

  const {products} = useSelector((state) => state.productReducer)
//   const {products} = productReducer;
 
const dispatch  = useDispatch();

  function deleteHandler(cardIndex)
  {
    console.log(cardIndex);
    dispatch(deleteProduct(cardIndex));
  }
  return (
    <div className='cardContainer flex flex-wrap gap-10 my-10'>
      {
        products.map((item , index) => {
            return (
            <div key={item.id} className='relative card w-64 rounded-md bg-zinc-700 text-white px-2'>
                <h1  className='text-xl font-bold mb-6 mt-2'>{item.title}</h1>
                <h3 className='text-sm font-thin leading-[1.4] my-2 opacity-70'>{item.description}</h3>
                <h6 className='text-md font-medium my-2 opacity-90'>Category : {item.category}</h6>
                <h6 className='text-sm font-large my-2 opacity-70'>Price : {item.price}</h6>
                <button onClick={()=> deleteHandler(index)} className='bottom-2 left-2 mt-2 mb-2 px-8 py-2 bg-red-700 rounded-full font-semibold text-md cursor-pointer'>Remove</button>
            </div>
            )
        })
      }
    </div>
  )
}

export default Product

import React, { useContext } from 'react'
import { userContext } from '../utils/Context'
import { useParams } from 'react-router-dom';

function StoreDetail() {

    const {product} = useContext(userContext);
    const {title} = useParams();

    const element = product.find( (item) => item.title === title );
    
  return (
    <div>
      { <h1 className='w-1/5 text-center m-auto bg-blue-200'>{`${element.title} = ${product.filter( item => item.title === title ).length}`}</h1> }
    </div>
  )
}

export default StoreDetail

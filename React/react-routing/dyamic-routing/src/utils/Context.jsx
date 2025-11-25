import React, { createContext, useState } from 'react'

// eslint-disable-next-line react-refresh/only-export-components
export const userContext = createContext();

function Context(props) {

    const [product , setProduct] = useState([
        {
            id:0,
            title:'Shoes',
            name : 'Leather shoes',
            price: '$800',
            brand:'Prada'
        },
        {
            id:1,
            title:'Shirt',
            name : 'Denim Shirt',
            price: '$200',
            brand:'WestSide'
        },
        {
            id:2,
            title:'Bag',
            name : 'Blonde Bag',
            price: '$500',
            brand:'Gucci'
        },
        {
            id:3,
            title:'Bag',
            name : 'Blonde Bag',
            price: '$500',
            brand:'Gucci'
        },
        {
            id:4,
            title:'Bag',
            name : 'Blonde Bag',
            price: '$500',
            brand:'Gucci'
        },
    ])

  return (
    <userContext.Provider value = {{product , setProduct}} >
      {  props.children }
    </userContext.Provider>
  )
}

export default Context

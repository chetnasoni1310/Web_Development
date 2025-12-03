import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      title: "Essence Mascara Lash Princess",
      description:
        "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      category: "beauty",
      price: 9.99,
    },

     {
      "id": 2,
      "title": "Red Nail Polish",
      "description": "The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.",
      "category": "beauty",
      "price": 8.99,
     },

     {
      "id": 4,
      "title": "Red Lipstick",
      "description": "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
      "category": "beauty",
      "price": 12.99,
     },
      {
      id: 3,
      title: "Essence Mascara Lash Princess",
      description:
        "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      category: "beauty",
      price: 9.99,
    },

     {
      "id": 5,
      "title": "Red Nail Polish",
      "description": "The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.",
      "category": "beauty",
      "price": 8.99,
     },

     {
      "id": 6,
      "title": "Red Lipstick",
      "description": "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
      "category": "beauty",
      "price": 12.99,
     },
  ],
};


export const productSlice = createSlice ({
    name : 'products',
    initialState,
    reducers : {
      deleteProduct : (state , action) => {
        // console.log(state , action)
        console.log(action);
        state.products.splice(action.payload , 1)
      }
    },
})

export default productSlice.reducer;

export  const {deleteProduct} =  productSlice.actions ;
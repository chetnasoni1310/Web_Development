import React, { useContext } from "react";
import { userContext } from "../utils/Context";
import { useNavigate, useParams } from "react-router-dom";

function ProductDetails() {
  const { product } = useContext(userContext);
  const { title } = useParams();
  const navigate = useNavigate();

  const element = product.find( (item) => item.title=== title );
//   👉 It means -->>>>>
//  "In the product array, find the object where
// item.title is equal to the title from the URL."

  return (
    <div className="flex flex-col justify-center items-center gap-2">
      {<h1 className="text-2xl font-bold uppercase" >{element.title}</h1>}
      {<h1 className="text-2xl font-md " >{element.name}</h1>}
      {<h1 className="text-2xl font-md " >{element.brand}</h1>}
      {<h1 className="text-2xl font-md underline " >{element.price}</h1>}
      <button onClick={()=> navigate(-1)} className="bg-blue-300 rounded-full px-6 py-2 mt-5 cursor-pointer hover:bg-blue-400">Go Back</button>
    </div>
  );
}

export default ProductDetails;

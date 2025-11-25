import React, { useContext } from "react";
import { userContext } from "../utils/Context";
import { Link } from "react-router-dom";

function Products() {
  const { product } = useContext(userContext);
  return (
    <>
    <h1>This is product page</h1>
    <div className=" pb-2 m-auto text-center text-xl">
      {product.map((item) => (
        <Link
          key={item.id}
          to = {`/products/${item.title}`}
          className="w-1/4 pb-2 mb-4 m-auto block bg-yellow-100 uppercase hover:font-semibold  hover:bg-yellow-200 "
        >
          {item.title}
        </Link>
      ))}

    </div>
    </>
  );
}

export default Products;

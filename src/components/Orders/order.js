import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Review from "../Review/Review";

const Order = () => {
  const { products, initialCart } = useLoaderData();
  const [cart, setCart] = useState(initialCart);
  console.log(cart);

  // const handleRemoveItem = (id) =>{
  //   const remainig = cart.filter(product => product.id !== id)
  //   setCart(remainig);
  //   removeFromDb(id)
  // }

  return (
    <div className="container my-6">
      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-2">
          <h1>THis is order page {products.length} </h1>
          {
              cart.map(product => <Review product={product}  ></Review>)
          }
        </div>

        <div className="productContainer">
          <div className="cart bg-red-500 p-4 text-white h-screen rounded-md">
            <Cart cart={cart}></Cart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;

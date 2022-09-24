import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './Product.css';
const Product = (props) => {
    const {product, handleAddToCart} = props ;
    const {name, price, ratings, seller, img} = product ;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h4>Price : {price}</h4>
            <p>Manufacturer : { seller }</p>
            <p>Ratting : { ratings } stars </p>
            <button onClick={()=> handleAddToCart(product)} > Add to Cart <span> <FaShoppingCart/> </span>  </button>
        </div>
    );
}

export default Product;

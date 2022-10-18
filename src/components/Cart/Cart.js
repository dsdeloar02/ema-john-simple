import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { TrashIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import './Cart.css';
import { quantityContext } from '../../ProductContext/ProductContext';

const Cart = ({cart}) => {
    const { quantity } = useContext(quantityContext);
    console.log(cart)
    let totalPrice = 0 ;
    let totalShipping = 0 ;
    // let quantity = 0;
    for(const product of cart){
        // quantity = quantity + product.quantity;
        totalPrice = totalPrice + product.price * product.quantity ;
        totalShipping = totalShipping + product.shipping * product.quantity ;
    }
    console.log(quantity)
    const taxTotal = parseFloat((totalPrice * 0.1).toFixed(2)) ;
    const grandTotal = totalPrice + totalShipping + taxTotal;
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items {quantity}</p>
            <p>Total Price : $ {totalPrice} </p>
            <p>Total Shipping : $ {totalShipping}</p>
            <p>Total Tax : $ {taxTotal}</p>
            <h5>Grand Total $ {grandTotal.toFixed(2)}</h5>

            <button className='flex py-2 px-3 bg-orange-800 text-white w-full mb-2 justify-center '>Clear Cart <TrashIcon className='h-5 w-5 ml-4 items-center' /> </button>
            <Link to="/order" className='flex py-2 px-3 bg-orange-800 text-white w-full mb-2 justify-center font-Poppins '>Review Order <ArrowRightIcon className='h-5 w-5 ml-4 items-center' /> </Link>
            
        </div>
    );
}

export default Cart;

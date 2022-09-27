import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    let totalPrice = 0 ;
    let totalShipping = 0 ;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        totalPrice = totalPrice + product.price * product.quantity ;
        totalShipping = totalShipping + product.shipping ;
    }
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
        </div>
    );
}

export default Cart;

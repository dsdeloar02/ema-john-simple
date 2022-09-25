import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    let totalPrice = 0 ;
    let totalShipping = 0 ;
    for(const product of cart){
        totalPrice = totalPrice + product.price ;
        totalShipping = totalShipping + product.shipping ;
    }
    const taxTotal = totalPrice * 0.1 ;
    const grandTotal = totalPrice + totalShipping + taxTotal;
    console.log(cart)
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items {cart.length}</p>
            <p>Total Price : $ {totalPrice} </p>
            <p>Total Shipping : $ {totalShipping}</p>
            <p>Total Tax : $ {taxTotal.toFixed(2)}</p>
            <h5>Grand Total $ {grandTotal}</h5>
        </div>
    );
}

export default Cart;

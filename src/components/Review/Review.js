import React from 'react';

const Review = ({product , handleRemoveItem }) => {
    return (
        <div className='grid grid-cols-5 my-3 p-3 border rounded-md'>
            <div>
                <img src={product.img} alt="" />
            </div>
            <div className='col-span-3 ml-2 flex flex-col justify-center'>
                <h3>{product.name}</h3>
                <p>Price : {product.price}</p>
                <p>Quantity : {product.quantity}</p>
            </div>
            <div className='flex flex-col justify-center'>
                <button className='btn btn-danger' >Delete</button>
            </div>
        </div>
    );
}

export default Review;

import React, { createContext, useEffect, useState } from 'react';
import { getStoredCart } from '../utilities/fakedb';

export const quantityContext = createContext();

const ProductContext = ({children}) => {
    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([]);
    useEffect( () => {
        fetch("products.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    useEffect( () => {
        const storedCart = getStoredCart();
        const saveCart = [] ;
        for(const id in storedCart ){
           const  addedProduct = products.find(product => product.id === id);
           if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                saveCart.push(addedProduct);               
           }
        }
        setCart(saveCart);
    }, [products])


    const authInfo = {cart}

    return (
        <div>
            <quantityContext.Provider value={authInfo} >
                {children}
            </quantityContext.Provider>
        </div>
    );
}

export default ProductContext;

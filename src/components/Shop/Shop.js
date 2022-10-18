import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../UserContext/UserContext';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const products = useLoaderData();
    const [cart, setCart] = useState([]);
  
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



    const handleAddToCart = (selectedProduct) => {
        console.log(selectedProduct);
        let newCart = [] ;

        const exist = products.find(product => product.id === selectedProduct.id);
        if(!exist){
            selectedProduct.quantity = 1 ;
            newCart = [...cart, selectedProduct]
        } else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exist.quantity = exist.quantity + 1 ;
            newCart = [...rest, exist]
        }        
        setCart(newCart)
        addToDb(selectedProduct.id)
    }
    return (
        <div className='productsWrapper'>
            <div className="productsContainer">
                {
                    products.map(product => <Product 
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>  )
                }
            </div>
            <div className="porductCartContainer">
                <Cart cart={cart} ></Cart>
            </div>
           
        </div>
    );
}

export default Shop;

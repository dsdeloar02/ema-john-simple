import React, { useEffect, useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { getStoredCart } from '../utilities/fakedb';

const Main = () => {
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

    return (
        <div>
            <Header cart={cart} ></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
}

export default Main;

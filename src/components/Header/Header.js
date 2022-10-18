import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";
import logo from "../../images/Logo.svg";
import "./Header.css";
import { quantityContext } from "../../ProductContext/ProductContext";
const Header = () => {
  const {cart} = useContext(quantityContext);
  let quantity = 0;    
  for(const product of cart){
      quantity = quantity + product.quantity;
  }

  
  // let quantity = 0;
  // useEffect(() => {
  //   for(const product of cart){
  //     quantity = quantity + product.quantity;
  //  }
  // }, [cart])
  // console.log(quantity)
  const [open, setOpen] = useState(false);
  return (
    <nav className="headerWrapper w-full">
      <div className="header">
        <img src={logo} alt="" />
        <div>
          <div onClick={() => setOpen(!open)} className="w-6 h-6 text-red-500 md:hidden">
          {
            open ? <XMarkIcon/> : <Bars3Icon/>
          }
          </div>
          <div className={`duration-500 flex flex-col md:flex md:flex-row absolute md:static bg-[#1C2B35] md:bg-transparent w-full ${ open ? 'right-0' : 'right-[-720px]' } `}>
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/order" className="relative">Order
              <span className="absolute w-5 h-5 bg-orange-600 rounded-full top-[-9px] right-[-18px] flex justify-center" ><small className="text-sm">{quantity}</small></span>
            </Link>
            <Link to="/review">Review</Link>
            <Link to="/login"> Log In </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

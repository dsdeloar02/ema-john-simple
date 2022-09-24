import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.svg";
import "./Header.css";
const Header = () => {
  return (
    <nav className="headerWrapper">
      <div className="header">
        <img src={logo} alt="" />
        <div>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/review">Review</Link>
          <Link to="/login"> Log In </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;

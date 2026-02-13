
import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

function Navbar() {
  return (
    <div className="navbar">
        <nav>
      <Link to="/login">
        Login
      </Link>


      <Link to="/signup">
        Signup
      </Link>

      <Link to="/products">
        Products
      </Link>

      <Link to="/cart">
        Cart
      </Link>
    </nav>
    </div>
    
  );
}

export default Navbar;

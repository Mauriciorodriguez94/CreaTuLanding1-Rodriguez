import React from "react"
import CartWidget from "../CartWidget";
import "./index.css"

function NavBar() {
  return (
    <div className="navbar-container">
      <header>LOGO</header>
      <button>Touch</button>
      <CartWidget />
    </div>
  );
}

export default NavBar;

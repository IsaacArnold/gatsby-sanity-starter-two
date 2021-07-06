import React from "react";
import { Link } from "gatsby";

const Navbar = () => (
  <nav className="navbar">
    <Link to="/#">
      <h1>Besnik</h1>
    </Link>
    <ul className="navbar-ul">
      <li>
        <Link to="/#">Home</Link>
      </li>
      <li>
        <Link to="/#">Portfolio</Link>
      </li>
      <li>
        <Link to="/contact">How it works</Link>
      </li>
      <li>
        <Link to="/#">Team</Link>
      </li>
    </ul>
    <div className="nav-btns">
      <Link to="#" className="btn">
        Login
      </Link>
      <Link to="#" className="btn">
        Sign Up
      </Link>
    </div>
  </nav>
);

export default Navbar;

import React from "react";
import { Link } from "gatsby";

const Navbar = () => (
  <nav className="navbar">
    <div>
      <Link to="/#">
        <h1>Bing</h1>
      </Link>
      <ul className="navbar-ul">
        <li>
          <Link to="/#">About</Link>
        </li>
        <li>
          <Link to="/#">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;

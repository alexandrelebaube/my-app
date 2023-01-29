import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div>
        <img className="logo" src="./images/Group.svg" alt="" />
      </div>
      <div>
        <ul className="nav-menus">
          <li>Services</li>
          <Link to="/about">
            <li>About Us</li>
          </Link>
          <li>Contact Us</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

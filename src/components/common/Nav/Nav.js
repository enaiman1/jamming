import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
     const activeStyle = { color: "#6c41ec", fontSize: "1.3rem"}

  return (
    <nav >
      <ul className="nav justify-content-center">
        {/* <li className="nav-item">
          <NavLink to="/" exact activeStyle={activeStyle}>
            Home 
          </NavLink>
        </li> */}

        <li className="nav-item" >
          <NavLink to="/" activeStyle={activeStyle}>
              Songs
          </NavLink>
         
        </li>

        <li className="nav-item">
          <NavLink to="/trivia" activeStyle={activeStyle}>
            Trivia
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" activeStyle={activeStyle}>
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

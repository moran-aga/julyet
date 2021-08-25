import React from "react";
import "./NavBar.css";
import logo from "../../images/logo.png";

const NavBar = () => {
  const catagories = [
    "בגדי ים ",
    "חזיות ",
    "תחתונים ",
    "הלבשת לילה ",
    "מחטבים",
  ];
  return (
    <div className="navbar">
      <div className="logo-container">
        <img src={logo} id="logo" alt="Julyet Logo" />
      </div>

      <div className="catagories-container">
        <span className="nav-catagory">
          {catagories.map((catagory) => catagory)}
        </span>
      </div>

      <div className="icons-container">
        <i class="fas fa-search nav-icon"></i>
        <i class="far fa-bookmark nav-icon"></i>
        <i class="fas fa-shopping-cart nav-icon"></i>
      </div>
    </div>
  );
};

export default NavBar;

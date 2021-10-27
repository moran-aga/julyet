import React from "react";
import "./NavBar.css";
import logo from "../../images/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const NavBar = () => {
  const catagories = [
    "בגדי ים  ",
    "חזיות  ",
    "תחתונים  ",
    "הלבשת לילה  ",
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
        <SearchIcon className="nav-icon" />
        <BookmarkBorderIcon className="nav-icon" />
        <ShoppingCartIcon className="nav-icon" />
      </div>
    </div>
  );
};

export default NavBar;

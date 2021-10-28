import React from "react";
import "./NavBar.css";
import logo from "../../images/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const NavBar = () => {
  const catagories = [
    "חזיות  ",
    "תחתונים  ",
    "חליפות  ",
    "מחטבים  ",
    "בגדי ים  ",
    "חלוקים ",
    "פרוטזות שד ",
  ];
  return (
    <div className="navbar">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} id="logo" alt="Julyet Logo" />
        </Link>
      </div>

      <ul className={"catagories-container"}>

      <li className="nav-catagory">
          <a href="/outlet" className="nav-catagory">
            OUTLET
          </a>
        </li>

        <li >
          <a href="/breast-prostheses" className="nav-catagory">
            פרוטזות שד
          </a>
        </li>
        <li>
          <a href="/sets" className="nav-catagory" className="nav-catagory">חליפות </a>
        </li>
        <li>
          <a href="/swim-wear" className="nav-catagory">
            בגדי ים
          </a>
        </li>

        <li >
          <a href="/robes" className="nav-catagory">
            חלוקים
          </a>
        </li>
        <li >
          <a href="/night-wear" className="nav-catagory">
            הלבשת לילה
          </a>
        </li>
        <li >
          <a href="/underwear" className="nav-catagory">
            תחתונים
          </a>
        </li>
        <li >
          <a href="/bras" className="nav-catagory">
            חזיות
          </a>
        </li>
      </ul>

      <div className="icons-container">
        <SearchIcon className="nav-icon" />
        <BookmarkBorderIcon className="nav-icon" />
        <Link to="/checkout">
          <ShoppingCartIcon className="nav-icon" />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;

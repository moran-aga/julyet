import React from "react";
import "./Product.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default function Product({ title, image, price, colors }) {
  return (
    <div className="product">
      <img src={image} alt="" />
      <div className="product_info">
        <p className="product_name">{title}</p>
        <p className="product_price">
          <strong>₪</strong>
          <strong>{price}</strong>
        </p>
        <p className="product_colors"></p>
        <p>{colors}</p>
      </div>
      {/* <FavoriteBorderIcon />
      <AddShoppingCartIcon /> */}
    </div>
  );
}

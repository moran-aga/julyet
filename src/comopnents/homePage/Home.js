import React from "react";
import Product from "../product/Product";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <div className="home_row">
          <Product
            title="dress"
            image="https://www.adikastyle.com/media/catalog/product/1/4/14.10.21-2257_1.jpg"
            price={100}
            colors={["blue ", "green "]}
          />
        </div>
      </div>
    </div>
  );
}

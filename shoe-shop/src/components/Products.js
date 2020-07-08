import React from "react";
import shoes from "../shoesData.json";
import { Link } from "react-router-dom";
// import "../App.css";

export const Products = () => {
  const shoe = Object.keys(shoes);
  return (
    <div className="container">
      <h3>New Arrival</h3>
      <div className="main">
        {shoe.map((item) => {
          const shoe = shoes[item];
          return (
            <Link key={item} to={`/${item}`} className="shoeDisplay">
              <h4>{shoe.name}</h4>
              <img src={shoe.img} style={{ height: 150 }} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

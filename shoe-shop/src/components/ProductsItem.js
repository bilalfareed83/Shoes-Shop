import React from "react";
import shoes from "../shoesData.json";
import { useParams, Link } from "react-router-dom";

export const ProductsItem = () => {
  const { id } = useParams();
  const shoe = shoes[id];

  return (
    <div className="container">
      <h3>Prodects Item </h3>
      <div className="shoeSelect">
        <h4>{shoe.name}</h4>
        <img src={shoe.img} style={{ height: 300 }} />
      </div>
      <Link
        to="/products"
        style={{ textDecoration: "none", color: "black", cursor: "pointer" }}
      >
        Back
      </Link>
    </div>
  );
};

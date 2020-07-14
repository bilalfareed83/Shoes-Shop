import React from "react";
import shoes from "../shoesData.json";
import { Link } from "react-router-dom";
import { Slide } from "@material-ui/core";
import Slides from "react-reveal/Slide";
// import "../App.css";

export const Products = () => {
  const shoe = Object.keys(shoes);
  return (
    <div className="container">
      <Slides left>
        <h3 style={{ color: "#2e303e" }}>New Arrival</h3>
      </Slides>

      <Slides right>
        <div className="main">
          {shoe.map((item) => {
            const shoe = shoes[item];
            return (
              <Link key={item} to={`/${item}`} className="shoeDisplay">
                <h4 style={{ color: "#2e303e" }}>{shoe.name}</h4>
                <img
                  className="div-img"
                  src={shoe.img}
                  style={{ height: 400 }}
                />
              </Link>
            );
          })}
        </div>
      </Slides>
    </div>
  );
};

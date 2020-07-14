import React from "react";
import shoes from "../shoesData.json";
import { useParams, Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import Slide from "react-reveal/Slide";

export const ProductsItem = () => {
  const { id } = useParams();
  const shoe = shoes[id];

  return (
    <div className="container">
      <div>
        <Slide right>
          <h3 style={{ color: "#2e303e" }}>Shoe you like</h3>
        </Slide>
      </div>
      <div className="item-div">
        <Slide left>
          <div className="shoeSelect">
            <h4 style={{ color: "#2e303e", padding: "20px" }}>{shoe.name}</h4>
            <img src={shoe.img} style={{ height: 250 }} />
            <br />
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "black",
                cursor: "pointer",
              }}
            >
              <Button variant="outlined" style={{ padding: "10px" }}>
                Add to Cart
              </Button>
            </Link>
          </div>
        </Slide>
        <Slide right>
          <div>
            <h3 style={{ color: "#2e303e" }}>Custom Detail Form</h3>
            <form onSubmit={}>
              <input placeholder="Name" className="input-div" />
              <br />
              <br />
              <input placeholder="Email" className="input-div" />
              <br />
              <br />
              <input placeholder="Mobile" className="input-div" />
              <br />
              <br />
              <input placeholder="Address" className="input-div" />
              <br />
              <br />
              <input placeholder="Qty." className="input-div" />
              <br />
              <br />
              <Button variant="outlined" type="submit">
                Place Order
              </Button>
            </form>
          </div>
        </Slide>
      </div>
      <Slide left>
        <div>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "black",
              cursor: "pointer",
            }}
          >
            <Button variant="outlined">Back</Button>
          </Link>
        </div>
      </Slide>
    </div>
  );
};

import React, { useState } from "react";
import shoes from "../shoesData.json";
import { useParams, Link } from "react-router-dom";
import { Button } from "@material-ui/core";

export const OrderDetail = () => {
  const [order, setOrder] = useState(
    "Congratulation your order is submitted Thank you."
  );

  return (
    <div className="container">
      <h1 style={{ color: "#2e303e" }}>{order}</h1>
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
    </div>
  );
};

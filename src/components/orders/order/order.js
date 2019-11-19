import React from "react";
import { Link } from "react-router-dom";

const order = ({ order }) => {
  return (
    <Link to={"/order/" + order.id}>
      <div
        style={{
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
          paddingTop: "0.5rem",
          height: "auto",
          width: "14rem auto",
          border: "1px solid #555",
          margin: "0.5rem",
          fontSize: "1rem",
          fontWeight: "600",
          cursor: "pointer",
          textDecoration: "none"
        }}
      >
        <ul style={{ listStyle: "none" }}>
          <li>Type: {order.type}</li>
          <li>Price: {order.price}</li>
          <li>Number: {order.number}</li>
          <li>Total: {order.number * order.price}</li>
        </ul>
      </div>
    </Link>
  );
};

export default order;

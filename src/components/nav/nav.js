import React from "react";
import { NavLink } from "react-router-dom";

const nav = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        background: "#222",
        color: "#fff"
      }}
    >
      <h1 style={{ paddingLeft: "2rem", margin: "0" }}>Order'me</h1>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingRight: "2rem"
        }}
      >
        <li style={{ marginRight: "1rem" }}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/add-order">New order</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default nav;

import React, { useState } from "react";
import axios from "../../../axios-orders";

const AddOrders = () => {
  const [typeOrder, setTypeOrder] = useState("");
  const [priceOrder, setPriceOrder] = useState("");
  const [numberOrder, setNumberOrder] = useState("");

  const sendForm = e => {
    e.preventDefault();
    const order = {
      type: typeOrder,
      price: priceOrder,
      number: numberOrder
    };
    axios
      .post("/orders.json", order)
      .then(res => console.log("res", res))
      .catch(err => console.log(err));
  };

  const styleInput = {
    display: "block",
    margin: "auto",
    marginBottom: "0.5rem",
    padding: "0.5rem 1rem",
    outline: "none",
    background: "#333",
    border: "1px solid #555",
    color: "#fff",
    width: "15rem"
  };
  const styleBtn = {
    display: "block",
    margin: "auto",
    width: "17rem",
    padding: "0.5rem",
    background: "#222",
    color: "#fff",
    border: "1px solid #555",
    fontWeight: "600",
    cursor: "pointer"
  };
  return (
    <>
      <form onSubmit={sendForm}>
        <input
          onChange={e => setTypeOrder(e.target.value)}
          style={styleInput}
          placeholder="Type"
          type="text"
        />
        <input
          onChange={e => setPriceOrder(e.target.value)}
          style={styleInput}
          placeholder="Price"
          type="number"
        />
        <input
          onChange={e => setNumberOrder(e.target.value)}
          style={styleInput}
          placeholder="Number"
          type="number"
        />
        <button style={styleBtn}>Add order</button>
      </form>
    </>
  );
};

export default AddOrders;

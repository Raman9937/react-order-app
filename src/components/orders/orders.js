import React from "react";
import Order from "./order/order";

const orders = ({ orders }) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(14rem,1fr))",
      justifyContent: "center",
      alignItems: "center"
    }}
  >
    {orders.map(order => {
      return <Order key={order.id} order={order} />;
    })}
  </div>
);

export default orders;

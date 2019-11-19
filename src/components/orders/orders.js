import React, { Fragment } from "react";
import Order from "./order/order";
import AddOrder from "./addOrder/addOrder";

const orders = ({ orders }) => {
  return (
    <Fragment>
      <AddOrder />
      <hr />
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
    </Fragment>
  );
};

export default orders;

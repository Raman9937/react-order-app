import React from 'react';
import Order from './order/order';

const orders = props => {
  console.log(props.orders);
  return (
    <div>
      {props.orders.map(order => {
        return <Order key={order.id} order={order} />;
      })}
    </div>
  );
};

export default orders;

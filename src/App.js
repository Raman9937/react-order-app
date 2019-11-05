import React, { useEffect, useState } from 'react';
import axios from './axios-orders';
import Orders from './components/orders/orders';

function App() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios
      .get('orders.json')
      .then(res => {
        const orderData = res.data;
        const ordersList = [];
        for (const key in orderData) {
          ordersList.push({
            id: key,
            type: orderData[key].type,
            number: orderData[key].number,
            price: orderData[key].price
          });
        }
        setOrders(ordersList);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>Hello world</h1>
      <Orders orders={orders} />
    </div>
  );
}

export default App;

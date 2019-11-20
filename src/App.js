import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import axios from "./axios-orders";

import Layout from "./components/layout/layout";
import Orders from "./components/orders/orders";
import ShowOrder from "./components/orders/order/showOrder";
import AddOrder from "./components/orders/addOrder/addOrder";
function App() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios
      .get("orders.json")
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
        // setOrders(fakeOrders);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact render={props => <Orders orders={orders} />} />
          <Route exact path="/order/:id" component={ShowOrder} />
          <Route exact path="/add-order" component={AddOrder} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;

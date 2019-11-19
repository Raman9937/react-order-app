import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import axios from "./axios-orders";
import Layout from "./components/layout/layout";
import Orders from "./components/orders/orders";
import ShowOrder from "./components/orders/order/showOrder";

function App() {
  const [orders, setOrders] = useState([]);
  // const fakeOrders = [
  //   {
  //     id: 1,
  //     type: "Pizza",
  //     number: 1,
  //     price: 1.75
  //   },
  //   {
  //     id: 2,
  //     type: "Hamburger",
  //     number: 1,
  //     price: 1.5
  //   },
  //   {
  //     id: 3,
  //     type: "Salad",
  //     number: 1,
  //     price: 0.99
  //   },
  //   {
  //     id: 4,
  //     type: "Bread",
  //     number: 1,
  //     price: 1.2
  //   }
  // ];
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
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;

import React, { useEffect } from "react";
import axios from "../../../axios-orders";

const ShowOrder = props => {
  useEffect(() => {
    if (props.match.params.id) {
      axios
        .get("/orders.json/" + props.match.params.id)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
  }, []);
  return <div>this page will show soon</div>;
};

export default ShowOrder;

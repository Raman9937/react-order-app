import React from 'react';

const order = ({ order }) => {
  return (
    <div className='card'>
      <ul>
        <li>{order.type}</li>
        <li>{order.price}</li>
        <li>{order.number}</li>
      </ul>
    </div>
  );
};

export default order;

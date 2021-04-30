import React from 'react';
import PropTypes from 'prop-types';
import OrderCard from './OrderCard';

function OrdersList({ orders }) {
  return (
    <div className="ordersList">
      {
        orders
          .map((order, index) => (
            <OrderCard
              order={ order }
              orderIndex={ index }
              key={ order.id }
            />))
      }
    </div>
  );
}

export default OrdersList;

OrdersList.propTypes = {
  orders: PropTypes.arrayOf(PropTypes.any).isRequired,
};

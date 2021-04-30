import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import convertData from '../utils/convertData';
import currencyFormat from '../utils/currencyFormat';

export default function OrderCard({ order, orderIndex }) {
  const history = useHistory();
  return (
    <div>

      <button
        data-testid={ `${orderIndex}-order-card-container` }
        key={ `${orderIndex}` }
        type="button"
        onClick={ () => history.push(`/orders/${orderIndex + 1}`) }
      >
        <p data-testid={ `${orderIndex}-order-number` }>
          Pedido
          {' '}
          {orderIndex + 1}
        </p>
        <p data-testid={ `${orderIndex}-order-date` }>
          data:
          {' '}
          {convertData(order.sale_date)}
        </p>
        <p data-testid={ `${orderIndex}-order-total-value` }>
          valor total:
          {' '}
          {currencyFormat(Number(order.total_price))}
        </p>
        <hr />
      </button>
    </div>
  );
}

OrderCard.propTypes = {
  order: PropTypes.shape({
    sale_date: PropTypes.string,
    total_price: PropTypes.string,
  }).isRequired,
  orderIndex: PropTypes.number.isRequired,
};

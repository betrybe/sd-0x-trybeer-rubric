import React from 'react';
import currencyFormat from '../utils/currencyFormat';

const RenderCheckout = (items, reload, setReload) => items
  .map((prod, id) => {
    const prodQty = () => items.filter((e) => e.id === prod.id);
    const qtyLength = prodQty().length;
    return (
      <section key={ id } className="checkout-items">
        <p data-testid={ `${id}-product-qtd-input` }>{qtyLength}</p>
        <p data-testid={ `${id}-product-name` }>{prod.name}</p>
        <p data-testid={ `${id}-product-total-value` }>
          {currencyFormat(qtyLength * prod.price)}
        </p>
        <p data-testid={ `${id}-product-unit-price` }>
          (
          {currencyFormat(+prod.price)}
          {' '}
          un)
        </p>
        <button
          type="button"
          data-testid="0-removal-button"
          className="remove-item"
          onClick={ () => {
            items.splice(items.indexOf(items.find((e) => e.id === prod.id)), 1);
            localStorage.setItem('items', JSON.stringify(items));
            setReload(reload - 1);
          } }
        >
          x
        </button>
      </section>
    );
  });

export default RenderCheckout;

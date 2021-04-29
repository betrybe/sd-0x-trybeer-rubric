import React from 'react';
import PropTypes from 'prop-types';
import currencyFormat from '../utils/currencyFormat';

function ProductCard({ product }) {
  /* - A quantidade do produto deverá conter a tag `data-testid="0-product-qtd"`

- O nome do produto deverá conter a tag `data-testid="0-product-name"`

- O valor total do produto deverá conter a tag `data-testid="0-product-total-value"` */
  return (
    <>
      <p data-testid={ `${product.id - 1}-product-qtd` }>
        quantidade:
        {' '}
        {`${product.productQuantity} und`}
        {' '}
      </p>
      <p data-testid={ `${product.id - 1}-product-name` }>
        {`nome do produto: ${product.productName}`}
      </p>
      <p data-testid={ `${product.id - 1}-product-total-value` }>
        subtotal:
        {' '}
        {currencyFormat(Number(product.productQuantity * product.productPrice))}
      </p>
      <hr />
    </>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  product: PropTypes.shape({
    productName: PropTypes.string.isRequired,
    productQuantity: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    productPrice: PropTypes.string.isRequired,
  }).isRequired,
};

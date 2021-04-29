import React from 'react';
import currencyFormat from '../utils/currencyFormat';

const renderCards = (allProducts, asd, setAsd, itemQty) => allProducts.map(
  (prod, id) => (
    <section className="card-content" key={ id }>
      <img
        className="products-img"
        src={ prod.url_image }
        alt="Foto do Produto"
        data-testid={ `${id}-product-img` }
      />
      <p data-testid={ `${id}-product-price` } className="price">
        {currencyFormat(+prod.price)}
      </p>
      <h4 data-testid={ `${id}-product-name` }>{prod.name}</h4>
      <section className="cards-btn">
        <button
          className="qty-btn"
          data-testid={ `${id}-product-minus` }
          type="button"
          onClick={ () => {
            const items = JSON.parse(localStorage.getItem('items')) || [];
            items.splice(items.indexOf(items.find((e) => e.id === prod.id)), 1);
            localStorage.setItem('items', JSON.stringify(items));
            if (asd > 0) {
              setAsd(asd - 1);
            }
          } }
        >
          -
        </button>
        <p data-testid={ `${id}-product-qtd` } className="p-qty">{itemQty(prod)}</p>
        <button
          className="qty-btn"
          data-testid={ `${id}-product-plus` }
          type="button"
          onClick={ () => {
            const items = JSON.parse(localStorage.getItem('items')) || [];
            items.push(prod);
            localStorage.setItem('items', JSON.stringify(items));
            setAsd(asd + 1);
            console.log(typeof prod.price);
          } }
        >
          +
        </button>
      </section>
    </section>
  ),
);
export default renderCards;

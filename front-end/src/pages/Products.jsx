import React, { useEffect, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import fetchProducts from '../methods/products';
import renderCards from '../components/RenderCards';
import isLogged from '../components/isLogged';
import MenuTop from '../components/MenuTop';
import currencyFormat from '../utils/currencyFormat';
import './Products.css';

const itemQty = (prod) => {
  const items = JSON.parse(localStorage.getItem('items'));
  if (items) {
    const qty = items.filter((e) => e.id === prod.id);
    return qty.length;
  }
  return 0;
};

const timeOut = 3000;

function Products() {
  const route = useHistory();
  const [allProducts, setAllProducts] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [reload, setReload] = useState(0);
  const [onSuccess, setOnSuccess] = useState(false);

  useEffect(() => {
    (async () => setAllProducts(await fetchProducts()))();
  }, []);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    const success = JSON.parse(localStorage.getItem('success'));
    if (success) {
      setTimeout(() => {
        localStorage.removeItem('success');
        localStorage.setItem('items', JSON.stringify([]));
        setReload(reload);
      }, timeOut);
    }
    setOnSuccess(success);
    if (items) {
      const ad = items.map((a) => a.price);
      if (ad !== []) {
        setCartTotal(ad.reduce((e, f) => +e + +f, 0));
        setReload(items.length);
      }
    }
  }, [reload]);
  if (isLogged()) return <Redirect to="/login" />;
  return (
    <>
      <MenuTop title="TryBeer" />
      {onSuccess ? <p>Compra realizada com sucesso!</p> : null}
      <section className="cards-container">
        {renderCards(allProducts, reload, setReload, itemQty)}
        <section className="checkout-prods-container">
          <p data-testid="checkout-bottom-btn-value" className="checkout-value">
            {currencyFormat(cartTotal)}
          </p>
          <button
            type="button"
            className="checkout-btn"
            disabled={ reload === 0 }
            data-testid="checkout-bottom-btn"
            onClick={ () => route.push('/checkout') }
          >
            Ver Carrinho
          </button>
        </section>
      </section>
    </>
  );
}

export default Products;

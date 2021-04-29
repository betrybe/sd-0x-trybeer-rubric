import React, { useEffect, useState } from 'react';
import { Redirect, useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import isLogged from '../components/isLogged';
import RenderCheckout from '../components/RenderCheckout';
import currencyFormat from '../utils/currencyFormat';
import checkoutPost from '../methods/checkout';
import salesProductsInfo from '../utils/salesProductsInfo';
import '../style/Checkout.css';

function Checkout() {
  const [items, setItems] = useState([]);
  const [reload, setReload] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');

  const route = useHistory();

  useEffect(() => {
    const ckItems = JSON.parse(localStorage.getItem('items'));
    if (ckItems) {
      const ad = ckItems.map((a) => a.price);
      setCartTotal(ad.reduce((e, f) => +e + +f, 0));
      setItems(ckItems);
      setReload(ckItems.length);
    }
  }, [reload]);

  if (isLogged()) return <Redirect to="/login" />;
  return (
    <section className="checkout-container">
      <h1 data-testid="top-title">Finalizar pedido</h1>
      {reload === 0
        ? <p>Não há produtos no carrinho</p>
        : RenderCheckout(items, reload, setReload)}
      <div className="total-value-container">
        <p className="total-p">valor total</p>
        <h3 data-testid="order-total-value">
          {currencyFormat(cartTotal)}
        </h3>
      </div>
      <section className="checkout-inputs-container">
        <label htmlFor="street" className="checkout-label">
          Rua
          <input
            className="checkout-inputs"
            data-testid="checkout-street-input"
            type="text"
            name="street"
            onChange={ ({ target }) => setStreet(target.value) }
          />
        </label>
        <label htmlFor="number" className="checkout-label">
          Número da casa
          <input
            className="checkout-inputs"
            data-testid="checkout-house-number-input"
            type="text"
            name="number"
            onChange={ ({ target }) => setNumber(target.value) }
          />
        </label>
      </section>
      <button
        type="button"
        data-testid="checkout-finish-btn"
        className="checkout-finish-btn"
        disabled={ reload === 0 || street.length === 0 || number.length === 0 }
        onClick={ () => {
          route.push('/products');
          localStorage.setItem('success', JSON.stringify(true));
          const SPInfo = salesProductsInfo(items.map((item) => item.id));
          checkoutPost({
            products: SPInfo,
            price: cartTotal,
            address: street,
            number,
            status: 'Pendente',
          });
        } }
      >
        Finalizar Pedido
      </button>
      <Link to="/products" className="keep-shopping">Continuar comprando</Link>
    </section>
  );
}

export default Checkout;

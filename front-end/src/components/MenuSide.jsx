import React from 'react'; import { useHistory, Redirect } from 'react-router-dom';
import './MenuSide.css';

function MenuSide() {
  const route = useHistory(); const user = JSON.parse(localStorage.getItem('user')); try {
    let modifyId = '-my-';
    let urlRoute = '';
    let isClient = true;
    if (user.role && user.role === 'administrator') {
      urlRoute = '/admin'; modifyId = '-'; isClient = false;
    }
    return (
      <div className="side-menu-container">
        { isClient
        && (
          <button
            className="side-btn"
            data-testid="side-menu-item-products"
            type="button"
            onClick={ () => route.push('/products') }
          >
            Produtos
          </button>) }
        <button
          className="side-btn"
          data-testid={ `side-menu-item${modifyId}orders` }
          type="button"
          onClick={ () => route.push(`${urlRoute}/orders`) }
        >
          {isClient ? 'Meus Pedidos' : 'Pedidos'}
        </button>
        <button
          className="side-btn"
          data-testid={ `side-menu-item${modifyId}profile` }
          type="button"
          onClick={ () => route.push(`${urlRoute}/profile`) }
        >
          {isClient ? 'Meu Perfil' : 'Perfil'}
        </button>
        <button
          className="side-btn"
          data-testid="side-menu-item-logout"
          type="button"
          onClick={ () => {
            localStorage.clear();
            route.push('/login');
          } }
        >
          Sair
        </button>
      </div>
    );
  } catch (err) {
    return <Redirect to="/login" />;
  }
}

export default MenuSide;

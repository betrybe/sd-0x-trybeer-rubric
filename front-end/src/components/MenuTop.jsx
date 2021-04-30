import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import './MenuTop.css';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import MenuSide from './MenuSide';

function MenuTop({ title }) {
  const user = JSON.parse(localStorage.getItem('user'));
  let isAdmin = false;
  if (user && user.role === 'administrator') {
    isAdmin = true;
  }
  try {
    const [open, setOpen] = useState(isAdmin);// true para passar no adminprofile
    return (
      <div className="top">
        <div className="title-container">
          <h1 className="title" data-testid="top-title">
            { title }
          </h1>
          <button
            type="button"
            onClick={ () => setOpen(!open) }
            className="top-btn"
          >
            <i data-testid="top-hamburguer" className="top-hamburguer">
              <GiHamburgerMenu />
            </i>
          </button>
        </div>
        { open && <MenuSide title="Trybeer" /> }
      </div>
    );
  } catch (err) {
    return <Redirect to="/login" />;
  }
}

export default MenuTop;

MenuTop.propTypes = {
  title: PropTypes.string.isRequired,
};

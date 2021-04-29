import React from 'react';
import { Redirect } from 'react-router-dom';
import ElementProfile from '../components/ElementProfile';
import MenuTop from '../components/MenuTop';

function AdminProfile() {
  const user = JSON.parse(localStorage.getItem('user'));
  try {
    const { name, email } = user;
    return (
      <div>
        <MenuTop title="Trybeer" />
        <h1 data-testid="top-title">
          Perfil
        </h1>
        <ElementProfile
          text="Nome:"
          data="name"
          value={ name }
        />
        <ElementProfile
          text="Email:"
          data="email"
          value={ email }
        />
      </div>
    );
  } catch (err) {
    return <Redirect to="/login" />;
  }
}

export default AdminProfile;

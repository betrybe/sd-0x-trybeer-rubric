import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import InputProfileName from '../components/InputProfileName';
import InputProfileEmail from '../components/InputProfileEmail';
import editUserName from '../methods/editUserName';
import MenuTop from '../components/MenuTop';

function ClientProfile() {
  const user = JSON.parse(localStorage.getItem('user'));
  const [profile, setProfile] = useState('');
  try {
    const [newName, setNewName] = useState(user.name);
    const { name, email } = user;
    return (
      <div>
        <MenuTop title="Trybeer" />
        <h1 data-testid="top-title">
          Meu perfil
        </h1>
        <InputProfileName
          setValue={ setNewName }
          value={ newName || name }
        />
        <InputProfileEmail
          value={ email }
        />
        <button
          type="button"
          data-testid="profile-save-btn"
          onClick={ async () => setProfile(await editUserName({ name, newName })) }
          disabled={ newName === name }
        >
          Salvar
        </button>
        {profile && <p>Atualização concluída com sucesso</p>}
      </div>
    );
  } catch (err) {
    return <Redirect to="/login" />;
  }
}

export default ClientProfile;

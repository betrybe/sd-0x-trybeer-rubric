import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import InputRegister from './InputRegister';
import '../style/Register.css';

const RegisterForm = ({ state, setState, handleClick }) => {
  const { name,
    email, password, seller, formValidated, messageError, responseError } = state;
  const { setName, setEmail, setPassword, setSeller } = setState;
  return (

    <section className="register-container">
      <h1>Pagina de Registro</h1>
      <InputRegister
        name="name"
        setValue={ setName }
        value={ name }
        label="Nome"
      />
      <InputRegister
        name="email"
        setValue={ setEmail }
        value={ email }
        label="Email"
        type="email"
      />
      <InputRegister
        name="password"
        setValue={ setPassword }
        value={ password }
        label="Senha"
        type="password"
      />
      <InputRegister
        name="seller"
        setValue={ setSeller }
        checked={ seller }
        label="Quero vender"
        type="checkbox"
      />
      <p className="signup-p">
        {messageError
       !== '' || responseError !== '' ? messageError || responseError : null}
      </p>
      <button
        className="signup-btn"
        type="button"
        disabled={ !formValidated }
        data-testid="signup-btn"
        onClick={ async () => handleClick() }
      >
        Cadastrar
      </button>
      <Link
        to="/login"
        className="no-account-btn"
        data-testid="no-account-btn"
      >
        Já tenho conta
      </Link>
    </section>
  );
};
export default RegisterForm;

RegisterForm.propTypes = {
  state: PropTypes.shape(PropTypes.any).isRequired,
  setState: PropTypes.shape(PropTypes.any).isRequired,
  handleClick: PropTypes.func.isRequired,
};

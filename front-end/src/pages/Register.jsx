import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import RegisterForm from '../components/RegisterForm';
import register from '../methods/register';
import { RegisterSchema } from '../validationsSchemas/register';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [seller, setSeller] = useState(false);
  const [formValidated, setFormValidated] = useState(false);
  const [messageError, setMessageError] = useState('');
  const [responseError, setResponseError] = useState('');
  const url = useHistory();

  useEffect(() => {
    const handleChange = async () => {
      try {
        await RegisterSchema.validate({ name, email, password });
        setFormValidated(true);
        setMessageError('');
      } catch (err) {
        setMessageError(err.message);
        console.log(err.message, messageError);
      }
    };
    handleChange();
  }, [name, email, password, messageError]);

  const handleClick = async () => {
    try {
      const response = await register({ name, email, password, seller });
      if (response.message) throw response;
      setResponseError('');
      if (seller) {
        url.push('/admin/orders');
      } else {
        url.push('/products');
      }
    } catch (err) {
      console.log(err.message);
      setResponseError(err.message);
    }
  };

  return (
    <RegisterForm
      state={ {
        name, email, password, seller, formValidated, messageError, responseError } }
      setState={ { setName, setEmail, setPassword, setSeller, setMessageError } }
      handleClick={ handleClick }
    />
  );
}

export default Register;

const { Router } = require('express');
const jwt = require('jsonwebtoken');
const { createOne } = require('../models/UsersService');

const routerRegister = Router();

const jwtConfig = {
  expiresIn: '3h',
  algorithm: 'HS256',
};

const SECRET = 'senha';

routerRegister.post('/', async (req, res, next) => {
  const { name, email, password, seller } = req.body.user;
  const role = seller ? 'administrator' : 'client';  
  
    try {    
    await createOne(name, email, password, role);
    console.log('after');
    const payload = {
      iss: 'Trybeer',
      aud: 'indentity',
      userData: email,
    };
    const token = jwt.sign(payload, SECRET, jwtConfig);
    return res.status(200).json({ user: { name, email, role, token } });
  } catch (err) {
    return next({ status: 400, message: 'E-mail already in database.' });
  }
});

module.exports = routerRegister;
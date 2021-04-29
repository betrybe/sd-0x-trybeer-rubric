const { Router } = require('express');
const { updateName, getAll } = require('../models/UsersService');

const routerProfile = Router();

routerProfile.get('/', async (_req, res) => {
  const users = await getAll();
  res.send(users);
});

routerProfile.post('/', async (req, res) => {
  const { name, newName } = req.body.user;
  try {    
    const [user] = await updateName(name, newName);    
    return res.status(200).json(user);
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = routerProfile;
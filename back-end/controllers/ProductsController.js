const { Router } = require('express');
const { getAll } = require('../models/ProductsModel');

const routerProducts = Router();

routerProducts.get('/', async (_req, res) => {
  const products = await getAll();
  res.status(200).json(products);
});

module.exports = routerProducts;

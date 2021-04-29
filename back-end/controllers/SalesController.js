const { Router } = require('express');

const routerSalesDetails = require('./SalesDetailsController');
const validateToken = require('../middlewares/validateToken');
const { createOne, getAllByUserId } = require('../models/SalesService');

const routerSales = Router();

routerSales.post('/', validateToken, async (req, res) => {
  const { products, price, address, number, status } = req.body.order;
  const { userId } = res.locals;
  const { insertId, date } = await createOne(products,
     { userId, price, address, number, status });
  res.status(201).json({ order: {
    saleId: insertId, userId, price, address, number, status, date,
  } });
});

routerSales.get('/', validateToken, async (req, res) => {
  const { userId } = res.locals;
  const [orders] = await getAllByUserId(userId);
  res.status(200).json({ orders });
});

routerSales.use('/', routerSalesDetails);

module.exports = routerSales;

// {price: 2.2, address: "asd", number: "12", status: "Pendente"}

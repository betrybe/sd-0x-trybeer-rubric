const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// const images = require('../images.tar.gz');
const { routerLogin,
  routerRegister, routerProducts, routerProfile, routerSales, 
  routerSalesAdm } = require('./controllers');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(`${__dirname}/uploads`));

app.get('/', (_req, res) => res.send('Hello World!'));

app.use('/login', routerLogin);
app.use('/products', routerProducts);
app.use('/profile', routerProfile);
app.use('/register', routerRegister);
app.use('/orders', routerSales);
app.use('/admin/orders', routerSalesAdm);

app.use(async (err, _req, res, _next) => {
  console.log(err);
  res.status(err.status).json({ message: err.message });
});

app.listen(port, () => `Running on ${port}`);
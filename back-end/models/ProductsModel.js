const connection = require('./connection');

const getAll = async () => {
  const [products] = await connection.execute(
  'SELECT * FROM products;',
  );
  return products;
};

const getByName = async (name) => {
  const [product] = await connection.execute(
    'SELECT products.id as productId from products WHERE products.name = ?', [name],
  );

  return product;
};

module.exports = {
  getAll, getByName,
};

const connection = require('./connection');

const getAll = async () => {
  const [sales] = await connection.execute(
  'SELECT * FROM sales;',
  );
  return sales;
};

module.exports = {
  getAll,
};

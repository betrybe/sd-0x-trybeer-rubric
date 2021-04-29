const connection = require('./connection');

const getOne = async (saleId) => {
  const [sale] = await connection.query(
   'SELECT s.id as id, s.total_price as saleTotal, p.price as productPrice,'
    + 'sD.quantity as productQuantity,'
    + 'p.name as productName, s.sale_date as saleDate,'
    + 's.status as statusSale'
    + ' FROM sales_products as sD'
    + ' INNER JOIN products as p ON sD.product_id = p.id' 
    + ' INNER JOIN sales as s ON sD.sale_id = s.id WHERE s.id = ? ;', [Number(saleId)],
  );

  return sale;
};

module.exports = {
  getOne,
};
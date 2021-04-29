const mysql = require('mysql2/promise');
require('dotenv').config();

const config = {
  user: process.env.MYSQL_USER,
  host: process.env.HOSTNAME,
  multipleStatements: true,
  password: process.env.MYSQL_PASSWORD,
  database: 'Trybeer',
  };
// console.log('user:', config.user, 'pw:', config.password, 'host', config.host);
const connection = mysql.createPool(config);

module.exports = connection; 

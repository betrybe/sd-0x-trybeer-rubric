const { getPassword } = require('../models/UsersService');

const validatePassword = async (req) => {  
  const { email, password } = req.body.user;
  console.log(email, password);
  const [user] = await getPassword(email);  
  if (password === user.password) return { valid: true };
  const error = new Error('not found');
  error.status = 404;
  throw error;
};

module.exports = validatePassword;
const validateEmail = require('./validateEmail');

const validateRegister = async (req, res, next) => {
  await validateEmail(req, res);
  next();
};

module.exports = validateRegister;

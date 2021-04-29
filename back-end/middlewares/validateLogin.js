const validatePassword = require('./validatePassword');

const validateEmail = require('./validateEmail');

const validateLogin = async (req, res, next) => {
  try {
    await validateEmail(req, res);
    await validatePassword(req, res);    
    next();
  } catch (Err) {
    next(Err);
  }
};

module.exports = validateLogin;
const atob = require('atob');
const { getByEmail } = require('../models/UsersService');

const parseJWT = (token) => {
  try {
    console.log('token', token);
    return JSON.parse(atob(token.split('.')[1]));
  } catch (err) {
    return null;
  }
};

async function validateToken(req, res, next) {
  const token = req.headers.authorization;
  if (!token) return next({ status: 401, message: 'no token' });
  const decode = parseJWT(token);
  if (!decode) return next({ status: 401, message: 'invalid decode' });
  const [user] = await getByEmail(decode.userData);
  if (!user && !user.id) return next({ status: 401, message: 'invalid match of token' });
  res.locals.role = user.role;
  res.locals.userId = user.id;
  return next();
}

module.exports = validateToken;

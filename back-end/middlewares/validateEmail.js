const { getByEmail } = require('../models/UsersService');

async function validateEmail(req, res) {
    const { email } = req.body.user;
    const [user] = await getByEmail(email);
    res.locals.user = user;
}

module.exports = validateEmail;
module.exports = (app) => {
    const users = require('../controllers/user.controller.js');

    const client = '/client'
    app.post(`${client}/sign-up`, users.save);
    app.post(`${client}/login`, users.login);

}
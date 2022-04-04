module.exports = (app) => {
    const users = require('../controllers/user.controller.js');

    // CLIENT
    app.post('/user/sign-up', users.save);
    app.post('/user/login', users.login);
    app.post('/user/logout', users.logout);
    app.get('/user', users.getInfo);

}

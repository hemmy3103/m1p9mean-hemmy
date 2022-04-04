exports.loadAllRoutes = (app) => {
    require('./role.routes')(app);
    require('./user.routes')(app);
}
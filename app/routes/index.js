exports.loadAllRoutes = (app) => {
    require('./user.routes')(app);
}
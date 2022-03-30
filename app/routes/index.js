exports.loadAllRoutes = (app) => {
    require('./status.routes')(app);
    require('./user.routes')(app);
}
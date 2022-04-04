module.exports = (app) => {
    const role = require("../controllers/role.controller.js");
 
    app.get("/role/list", role.findAll);
    app.get("/role/read-one", role.findById);
    app.get("/role/read-criteria", role.find);
    app.post("/role/create", role.save);
    app.patch("/role/update", role.findByIdAndUpdate);
    app.delete("/role/delete", role.findByIdAndRemove);
};

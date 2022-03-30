module.exports = (app) => {
    const status = require("../controllers/status.controller.js");
    const { crud } = require("../models/utils/Util");

    app.get("/status/list", status.findAll);
    app.get("/status/read-one", status.findById);
    app.get("/status/read-criteria", status.find);
    app.post("/status/create", status.save);
    app.patch("/status/update", status.findByIdAndUpdate);
    app.delete("/status/delete", status.findByIdAndRemove);
};

const { gen } = require("../models/utils/Generic");
const Status = require("../models/status.model");

exports.save = (req, res) => {
    req.body.status = 1;
    gen.save(Status, res, req);
};

exports.findAll = (req, res) => {
    gen.findAll(Status, res);
};

exports.find = (req, res) => {
    gen.find(Status, res, req.body);
};

exports.findById = (req, res) => {
    gen.findById(Status, res, req.params.statusId);
};

exports.findByIdAndUpdate = (req, res) => {
    gen.findByIdAndUpdate(Status, res, req.params.statusId, req);
};

exports.findByIdAndRemove = (req, res) => {
    gen.findByIdAndRemove(Status, res, req.params.statusId);
};

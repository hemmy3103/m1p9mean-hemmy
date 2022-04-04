const { gen } = require("../models/utils/Generic");
const Role = require("../models/role.model");

exports.save = (req, res) => {
    gen.save(Role, res, req);
};

exports.findAll = (req, res) => {
    gen.findAll(Role, res);
};

exports.find = (req, res) => {
    gen.find(Role, res, req.body);
};

exports.findById = (req, res) => {
    gen.findById(Role, res, req.params.RoleId);
};

exports.findByIdAndUpdate = (req, res) => {
    gen.findByIdAndUpdate(Role, res, req.params.RoleId, req);
};

exports.findByIdAndRemove = (req, res) => {
    gen.findByIdAndRemove(Role, res, req.params.RoleId);
};

const Generic = require('../models/utils/Generic');
const Token = require('../models/token.model');
const gen = new Generic();
const Util = require('./../models/utils/Util');

exports.logout = (userId) => {
    Token.deleteOne({ userId: userId });
};

exports.saveToken = async (userId) => {
    const token = Util.generateJWT(userId);
    await Token.create({userId: userId, token: token});
    return token;
};

exports.save = (req, res) => {
    const userId = req.body.userId;
    const token = Util.generateJWT(userId);
    req.body = {token: token, userId: userId};
    gen.save(Token, res, req);
};

exports.findAll = (req, res) => {
    gen.findAll(Token, res)
};

exports.find = (req, res) => {
    gen.find(Token, res, req.params.tokenId)
};

exports.findById = (req, res) => {
    gen.findById(Token, res, req.params.tokenId)
};

exports.findByIdAndUpdate = (req, res) => {
    gen.findByIdAndUpdate(Token, res, req.params.tokenId, req);
};

exports.findByIdAndRemove = (req, res) => {
    gen.findByIdAndRemove(Token, res, req.params.tokenId);
};

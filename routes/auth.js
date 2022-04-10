const express = require("express");
const { authService } = require("../services");
const { responseBuilder, tools } = require("../utils");
const router = express.Router();

router.get("/profile", async function (req, res) {
    try {
        const token = tools.extractToken(req.headers.authorization);
        const tokenUtilisateur = await authService.findTokenUser(token);
        authService
        .findProfileUser(tokenUtilisateur.utilisateur)
        .then((result) => {
            res.json(responseBuilder.success(result));
        })
        .catch((error) => {
            res.json(responseBuilder.error(error.message));
        });
    } catch (error) {
        res.json(responseBuilder.error(error.message));
    }
});

router.post("/reset-password", async function (req, res) {
    authService
        .resetPassword()
        .then((result) => {
            res.json(responseBuilder.success(result));
        })
        .catch((error) => {
            res.json(responseBuilder.error(error.message));
        });
});

router.post("/sign-up", async function (req, res) {
    authService
        .inscription(req.body.utilisateur)
        .then((result) => {
            res.json(responseBuilder.success(result));
        })
        .catch((error) => {
            res.json(responseBuilder.error(error.message));
        });
});

router.post("/login", async function (req, res) {
    authService
        .login(req.body.nomUtilisateur, req.body.mdp)
        .then((result) => {
            res.json(responseBuilder.success(result));
        })
        .catch((error) => {
            res.json(responseBuilder.error(error.message));
        });
});

router.delete("/logout", async function (req, res) {
    try {
        const token = tools.extractToken(req.headers.authorization);
        await authService.logout(token);
        res.json(responseBuilder.success("Utilisateur déconnecté"));
    } catch (error) {
        res.json(responseBuilder.error(error.message));
    }
});

module.exports = router;

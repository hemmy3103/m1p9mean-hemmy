const express = require("express");
const { restaurantService, authService } = require("../services");
const { responseBuilder, tools } = require("../utils");
const router = express.Router();

router.get("/", async function (req, res) {
    try {
        const token = tools.extractToken(req.headers.authorization);
        const tokenUtilisateur = await authService.findTokenUser(token);
        restaurantService
            .findRestaurants(tokenUtilisateur.utilisateur, req.body)
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

module.exports = router;

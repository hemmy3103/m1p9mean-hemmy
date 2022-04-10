const commonService = require('./common-service');

const { dbconnect } = require("../utils");
const { PROFILE_CLIENT } = require('../utils/constantes');

async function findRestaurants(utilisateur, params) {
    if (utilisateur.id_profile != PROFILE_CLIENT)
        throw new Error("Pas d'autorisation");
        const db = await dbconnect.getDb();
        const restaurantCollection = db.collection("restaurant");
        const restos = await restaurantCollection.find();
        var restaurants = await restaurantCollection
            .find({
                ...params.crt,
                nom: { $regex: new RegExp(`.*${params.search}.*`), $options: "i" },
            })
            .sort({ nom: 1 })
            .skip((params.pageNumber - 1) * params.nPerPage)
            .limit(params.nPerPage)
            .toArray();
        return restaurants;
}
module.exports = {findRestaurants};
const { ObjectId } = require("mongodb");
const commonService = require("./common-service");
const { PROFILE_RESTAURANT } = require('../utils/constantes');
const { dbconnect } = require("../utils");

// async function findProduits(params){
//     params.crt.id_restaurant = ObjectId(params.crt.id_restaurant);
//     return commonService.find(params, 'produit');
// }

async function findProduits(params) {
    const db = await dbconnect.getDb();
    const produitCollection = db.collection("produit");
    var produits = await produitCollection
        .find({
            ...params.crt,
            nom: { $regex: new RegExp(`.*${params.search}.*`), $options: "i" },
        })
        .sort({ nom: 1 })
        .skip((params.pageNumber - 1) * params.nPerPage)
        .limit(params.nPerPage)
        .toArray();
    return produits;
}

async function saveProduit(utilisateur, produit) {
    if (utilisateur.id_profile != PROFILE_RESTAURANT)
        throw new Error("Pas d'autorisation");
    produit.id_restaurant = new ObjectId(utilisateur.id_restaurant);
    produit.visible = true;
    const db = await dbconnect.getDb();
    const produitCollection = db.collection("produit");
    const result = await produitCollection.insertOne(produit);
    return result.insertedId;
}

async function updateProduit(utilisateur, id_produit, produit) {
    if (utilisateur.id_profile != PROFILE_RESTAURANT)
        throw new Error("Pas d'autorisation");

    const db = await dbconnect.getDb();
    const produitCollection = db.collection("produit");
    const _id = new ObjectId(id_produit);
    delete produit._id;
    const result = await produitCollection.updateOne(
        { _id },
        { $set: produit }
    );
}

async function findOneProduit(crt) {
    const db = await dbconnect.getDb();
    const produitCollection = db.collection("produit");
    var produit = await produitCollection.findOne(crt);
    return produit;
}
module.exports = { findProduits, saveProduit, updateProduit, findOneProduit };

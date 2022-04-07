const { ObjectId } = require('mongodb');
const commonService = require('./common-service');

async function findProduits(params){
    params.crt.id_restaurant = ObjectId(params.crt.id_restaurant);
    return commonService.find(params, 'produit');
}

module.exports = {findProduits};
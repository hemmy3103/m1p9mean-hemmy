function extractToken(authorization){
    if(!authorization) throw new Error("Pas d'autorisation");
    var token = authorization.split(' ')[1];
    return token;
}

module.exports = {extractToken};
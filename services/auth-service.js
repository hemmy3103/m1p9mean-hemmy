const { ObjectId } = require("mongodb");
const { dbconnect } = require("../utils");
const sha1 = require("sha1");
const moment = require("moment");
const { tools } = require("../utils");
const {
    PROFILE_CLIENT,
    PROFILE_RESTAURANT,
    PROFILE_RESPONSABLE,
    PROFILE_LIVREUR,
} = require("../utils/constantes");

async function resetPassword() {
    const nodemailer = require("nodemailer");

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "ekaly.noreply@gmail.com",
            pass: "ekaly123456.noreply",
        },
    });

    const mailOptions = {
        from: "h.ramananjato.dev@gmail.com",
        to: "ramananjatohemmy@gmail.com",
        subject: "Reset password",
        html: "<h2>Code: 90543 </h2>",
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent: " + info.response);
        }
    });
}

async function isValidToken(authorization, code) {
    const error = new Error(`Vous n'avez pas d'authorisation, code: ${code}`);
    if (!authorization) throw error;
    const db = await dbconnect.getDb();
    const tokenExtract = tools.extractToken(authorization);
    const token = await db.collection("token").findOne({ token: tokenExtract });
    const utilisateur = await db
        .collection("utilisateur")
        .findOne({ _id: token?.id_utilisateur });
    const profile = await db
        .collection("profile")
        .findOne({ _id: utilisateur?.id_profile });
    const isValid = token && utilisateur && profile && profile?.code === code;
    if (!isValid) throw error;
}

async function inscription(utilisateur) {
    const db = await dbconnect.getDb();
    const tokenCollection = db.collection("utilisateur");
    await tokenCollection.insertOne({
        nomUtilisateur: utilisateur.nomUtilisateur,
        mdp: sha1(utilisateur.mdp),
        nom: utilisateur.nom,
        prenom: utilisateur.prenom,
        id_profile: new ObjectId(PROFILE_CLIENT),
    });
    return login(utilisateur.nomUtilisateur, utilisateur.mdp, db);
}

async function saveToken(db, utilisateur) {
    var token = sha1(
        utilisateur._id +
            utilisateur.mdp +
            moment().format("YYYY-MM-DD HH:mm:ss.SSS")
    );
    var tokenCollection = db.collection("token");
    await tokenCollection.insertOne({
        id_utilisateur: utilisateur._id,
        token: token,
        date_expiration: moment().add(1, "h").toDate(),
    });
    return token;
}

async function login(nomUtilisateur, mdp) {
    var db = await dbconnect.getDb();
    var uCollection = db.collection("utilisateur");
    var utilisateur = await uCollection.findOne({
        nomUtilisateur,
        mdp: sha1(mdp),
    });
    if (!utilisateur) {
        throw new Error("Identifiant incorrecte");
    }
    var token = await saveToken(db, utilisateur);
    var result = {
        token: token,
        user: utilisateur,
    };

    return result;
}

async function logout(token) {
    var db = await dbconnect.getDb();
    var tokenCollection = db.collection("token");
    await tokenCollection.deleteOne({ token: token });
}

async function findTokenUser(token) {
    var db = await dbconnect.getDb();
    var tokenCollection = db.collection("token_utilisateur");
    var result = await tokenCollection.findOne({
        token: token,
        date_expiration: { $gte: new Date() },
    });
    if (!result) throw new Error("Token Invalide ou expiré");
    return result;
}

async function findProfileUser(utilisateur) {
    if (
        utilisateur.id_profile.toJSON() != new ObjectId(PROFILE_CLIENT) &&
        utilisateur.id_profile.toJSON() != new ObjectId(PROFILE_RESTAURANT) &&
        utilisateur.id_profile.toJSON() != new ObjectId(PROFILE_RESPONSABLE) &&
        utilisateur.id_profile.toJSON() != new ObjectId(PROFILE_LIVREUR)
    ) {
        throw new Error("Pas d'autorisation");
    }
    var db = await dbconnect.getDb();
    var profileCollection = db.collection("profile_utilisateur");
    var result = await profileCollection.findOne({
        nomUtilisateur: utilisateur.nomUtilisateur
    });
    if (!result) throw new Error("Utilisateur non trouvé");
    return result;
}

module.exports = {
    login,
    logout,
    findTokenUser,
    inscription,
    isValidToken,
    resetPassword,
    findProfileUser,
};

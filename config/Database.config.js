class DatabaseConfig {
    url = process.env.MONGO_URL;

    getApp() {
        const express = require('express');
        const bodyParser = require('body-parser');
        const cors = require("cors");

        const app = express();
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());
        app.use(cors({
            origin: [process.env.APP_FULL_URL],
            methods: ['GET','POST','DELETE','PUT']
        }));

        return app;
    }

    connect(bdd) {
        bdd.Promise = global.Promise;
        bdd.connect(this.url, {
            useNewUrlParser: true
        }).then(() => {
            console.log("Successfully connected to the database");
        }).catch(err => {
            console.log('Could not connect to the database. Exiting now...', err);
            process.exit();
        });
    }
}

module.exports = DatabaseConfig;

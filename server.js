require('dotenv').config();
const mongoose = require("mongoose");
const { loadAllRoutes } = require("./app/routes/index.js");
const DatabaseConfig = require("./config/Database.config.js");
const db = new DatabaseConfig();
db.connect(mongoose);

const app = db.getApp();
loadAllRoutes(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
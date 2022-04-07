const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(__dirname + "/dist/m1p9mean-hemmy-front"));
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/m1p9mean-hemmy-front/index.html"));
});
app.listen(process.env.PORT || 8080);

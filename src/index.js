const app = require("./config/custom-express");
const db = require("./infra/database");

db.connect((err) => {
  if (err) {
    console.log("ERRO NA CONEXÃO: " + err);
  } else {
    console.log("CONNECTED");
    app.listen(3000, () => console.log("Server is running! PORT: 3000"));
  }
});

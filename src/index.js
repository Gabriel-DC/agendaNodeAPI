const app = require("./config/custom-express");
const db = require("./infra/database");
const Tabelas = require("./infra/migrations/tabelas");

db.connect((err) => {
  if (err) {
    console.log("ERRO NA CONEXÃO: " + err);
  } else {
    Tabelas.init(db);

    console.log("CONNECTED");
    app.listen(3000, () => console.log("Server is running! PORT: 3000"));
  }
});

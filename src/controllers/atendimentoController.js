const AtendimentoModel = require('../models/AtendimentoModel');

module.exports = (app) => {
  app.get("/atendimentos", (req, res) => {
    res.send("Rota de atendimentos");
  });

  app.post("/atendimentos", (req, res) => {
    const atendimento = req.body;

    AtendimentoModel.adiciona(atendimento, res);
    //res.send('Rota de adicionar atendimento');
  });
};

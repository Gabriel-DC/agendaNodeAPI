const AtendimentoModel = require('../models/AtendimentoModel');

module.exports = (app) => {
  app.get('/atendimentos/:id', (req, res) => {
    const id = parseInt(req.params.id);

    AtendimentoModel.show(id, res);
  })

  app.get("/atendimentos", (req, res) => {

    AtendimentoModel.index(res);

    //res.send("Rota de atendimentos");
  });

  app.post("/atendimentos", (req, res) => {
    const atendimento = req.body;

    AtendimentoModel.store(atendimento, res);
  });
};

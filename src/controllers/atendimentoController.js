module.exports = (app) => {
  app.get("/atendimentos", (req, res) => {
    res.send("Rota de atendimentos");
  });

  app.post("/atendimentos", (req, res) => {
    console.log(req.body);
    res.send('Rota de adicionar atendimento');
  });
};

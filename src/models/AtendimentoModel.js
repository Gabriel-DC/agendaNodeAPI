const moment = require("moment");
const db = require("../infra/database");

class AtendimentoModel {
  adiciona(atendimento, res) {
    const dataCriacao = moment().format("YYYY-MM-DD HH:mm:ss");
    const dataAgendado = moment(atendimento.dataAgendado, "DD/MM/YYYY").format(
      "YYYY-MM-DD"
    );
    const sql = "INSERT INTO atendimentos SET ?";

    const atendimentoDatado = {
      ...atendimento,
      dataCriacao,
      dataAgendado,
    };

    db.query(sql, atendimentoDatado, (err, result) => {
      if (err) {
        res.status(400).json(err);
      } else {
        res.json(result);
      }
    });
  }
}

module.exports = new AtendimentoModel();

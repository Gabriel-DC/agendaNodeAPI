const db = require('../infra/database');

class AtendimentoModel {
  adiciona(atendimento) {
    const sql = "INSERT INTO atendimentos SET ?";

    db.query(sql, atendimento, (err, result) => {
      if(err) {
        console.log(err);
      } else {
        console.log(result);
      }
    })
  }
}

module.exports = new AtendimentoModel;

const moment = require("moment");
const db = require("../infra/database");
const Util = require("../Util/functions");

class AtendimentoModel {
  show(id, res) {
    const sql = "SELECT * FROM atendimentos WHERE id = ?";
    db.query(sql, [id], (err, result) => {
      if (err) {
        res.status(400).json(err);
      } else {
        const [atendimento] = result;
        res.json(atendimento);
      }
    });
  }

  index(res) {
    const sql = "SELECT * FROM atendimentos";

    db.query(sql, (err, result) => {
      if (err) {
        res.status(400).json(err);
      } else {
        res.json(result);
      }
    });
  }

  store(atendimento, res) {
    const dataCriacao = moment().format("YYYY-MM-DD HH:mm:ss");
    const dataAgendado = moment(atendimento.dataAgendado, "DD/MM/YYYY").format(
      "YYYY-MM-DD"
    );

    const dataEhValida = moment(dataAgendado).isSameOrAfter(dataCriacao);
    const clienteEhValido = atendimento.cliente.length >= 3;
    const statusEhValido = !Util.isNullOrEmpty(atendimento.status);
    const servicoEhValido = !Util.isNullOrEmpty(atendimento.servico);
    const petEhValido = !Util.isNullOrEmpty(atendimento.pet);

    const validations = [
      {
        nome: "dataAgendado",
        valido: dataEhValida,
        mensagem: "Data de agendamento deve ser maior ou igual a data atual",
      },
      {
        nome: "cliente",
        valido: clienteEhValido,
        mensagem: "Cliente deve ser maior ou igual a 3 caracteres",
      },
      {
        nome: "status",
        valido: statusEhValido,
        mensagem: "Status não deve ser nulo",
      },
      {
        nome: "servico",
        valido: servicoEhValido,
        mensagem: "Servico não deve ser nulo",
      },
      {
        nome: "pet",
        valido: petEhValido,
        mensagem: "Pet não deve ser nulo",
      },
    ];

    const erros = validations.filter((validation) => !validation.valido);

    const existErros = erros.length;

    if (existErros) {
      res.status(400).json(erros);
      return;
    }

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
        res.status(201).json(result);
      }
    });
  }
}

module.exports = new AtendimentoModel();

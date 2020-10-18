class Tabelas {
    init(connection) {
      this.connection = connection;

      this.criarAtendimentos();
    }

    criarAtendimentos() {
      const sql = `CREATE TABLE IF NOT EXISTS atendimentos (
        id int NOT NULL auto_increment PRIMARY KEY,
        cliente VARCHAR(255) NOT NULL,
        pet VARCHAR(40),
        servico VARCHAR(20) NOT NULL,
        status VARCHAR(20) NOT NULL,
        observacoes TEXT
      );`
      this.connection.query(sql, (err, result) => {
        if(err) {
          console.log(err);
        } else {
          console.log('Tabela atendimentos criada com sucesso!');
        }
      })
    }
}

module.exports = new Tabelas

const db = require('../configs/pg')

const sql_insert =
    `insert into CLIENTE (NOME, EMAIL, ENDERECO, TELEFONE) values ($1, $2, $3, $4)`

const postCliente = async (params) => {
    const {nome, email, endereco, telefone } = params
    await db.query(sql_insert, [nome, email, endereco, telefone])
}

module.exports.postCliente = postCliente   
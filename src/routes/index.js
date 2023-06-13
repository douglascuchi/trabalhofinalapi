const Cliente = require('./cliente')
const Categoria = require('./categoria')
const Produto = require('./produto')
const Pedido = require('./pedido')
const ItensPedido = require('./itenspedido')
const Fornecedor = require('./fornecedor')
const Estoque = require('./estoque')

module.exports = (app) => {
    Cliente(app)
    Categoria(app)
    Produto(app)
    Pedido(app)
    ItensPedido(app)
    Fornecedor(app)
    Estoque(app)
}
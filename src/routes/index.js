const Cliente = require('./cliente')
const Categoria = require('./categoria')
const Produto = require('./produto')
const Pedido = require('./pedido')
const ItensPedido = require('./itenspedido')

module.exports = (app) => {
    Cliente(app)
    Categoria(app)
    Produto(app)
    Pedido(app)
    ItensPedido(app)
}
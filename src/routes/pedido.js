const pedidoController = require('../controllers/pedido');

module.exports = (app) => {
    app.get('/pedido', pedidoController.getPedido)
    app.post('/pedido', pedidoController.postPedido)
    app.delete('/pedido/:id', pedidoController.deletePedido)
    app.put('/pedido/:id', pedidoController.putPedido)
    app.patch('/pedido/:id', pedidoController.patchPedido)
}
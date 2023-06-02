const itensPedidoController = require('../controllers/itenspedido');

module.exports = (app) => {
    app.get('/itenspedido', itensPedidoController.getItensPedido)
    app.post('/itenspedido', itensPedidoController.postItensPedido)
    app.delete('/itenspedido/:id', itensPedidoController.deleteItensPedido)
    app.put('/itenspedido/:id', itensPedidoController.putItensPedido)
    app.patch('/itenspedido/:id', itensPedidoController.patchItensPedido)
}
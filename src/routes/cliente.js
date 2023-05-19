const clienteController = require('../controllers/cliente');

module.exports = (app) => {
    app.post('/cliente', clienteController.postCliente)
}
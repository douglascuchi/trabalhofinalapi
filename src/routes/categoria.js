const categoriaController = require('../controllers/categoria');

module.exports = (app) => {
    app.get('/categoria', categoriaController.getCategoria)
    app.post('/categoria', categoriaController.postCategoria)
    app.delete('/categoria/:id', categoriaController.deleteCategoria)
    app.put('/categoria/:id', categoriaController.putCategoria)
    app.patch('/categoria/:id', categoriaController.patchCategoria)
}
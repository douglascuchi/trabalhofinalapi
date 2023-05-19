let clienteService = require('../services/cliente')

const postCliente = async (req, res, next) => {
    try {
        await clienteService.postCliente(req.body)
            .then(ret => res.status(201).send(ret))
            .catch(err => res.status(500).send(err))
    } catch (err) {
        next(err);
    }
}

module.exports.postCliente = postCliente
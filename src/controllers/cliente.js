let clienteService = require('../services/cliente')

const getCliente = async (req, res, next) => {
    try {
        const retorno = await clienteService.getCliente(req.params)
        res.status(200).json(retorno)
    } catch (err) {
        res.status(500).send(err)
    }
}

const postCliente = async (req, res, next) => {
    await clienteService.postCliente(req.body)
        .then(ret => res.status(201).send(ret))
        .catch(err => res.status(500).send(err.message))
}

const deleteCliente = async (req, res, next) => {
    try {
        await clienteService.deleteCliente(req.params)
        .then(ret => res.status(200).send(ret))
        .catch(err => res.status(500).send(err))
    } catch {
        next(err);
    }
}

const putCliente = async (req, res, next) => {
    try {
        let params = req.body
        params.idcliente = req.params.idcliente
        await clienteService.putCliente(params)
            .then(ret => res.status(200).send(ret))
            .catch(err => res.status(500).send(err)) 
    } catch (err){
        next(err);
    }
}

const patchCliente = async (req, res, next) => {
    try{
        let params = req.body
        params.id = req.params.id
        await clienteService.patchCliente(params)
            .then(ret => res.status(200).send(ret))
            .catch(err => res.status(500).send(err))
    } catch (err){
        next(err);
    }
}

module.exports.getCliente = getCliente
module.exports.postCliente = postCliente
module.exports.deleteCliente = deleteCliente
module.exports.putCliente = putCliente
module.exports.patchCliente = patchCliente
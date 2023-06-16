let itensPedidoService = require('../services/itenspedido')

const getItensPedido = async (req, res, next) => {
    try {
        const retorno = await itensPedidoService.getItensPedido(req.params)
        res.status(200).json(retorno)
    } catch (err) {
        res.status(500).send(err)
    }
}

const postItensPedido = async (req, res, next) => {
    await itensPedidoService.postItensPedido(req.body)
        .then(ret => res.status(201).send(ret))
        .catch(err => res.status(500).send(err.message))
}

const deleteItensPedido = async (req, res, next) => {
    try {
        await itensPedidoService.deleteItensPedido(req.params)
        .then(ret => res.status(200).send(ret))
        .catch(err => res.status(500).send(err))
    } catch {
        next(err);
    }
}

const putItensPedido = async (req, res, next) => {
    try {
        let params = req.body
        params.iditenspedido = req.params.iditenspedido
        await itensPedidoService.putItensPedido(params)
            .then(ret => res.status(200).send(ret))
            .catch(err => res.status(500).send(err)) 
    } catch (err){
        next(err);
    }
}

const patchItensPedido = async (req, res, next) => {
    try{
        let params = req.body
        params.id = req.params.id
        await itensPedidoService.patchItensPedido(params)
            .then(ret => res.status(200).send(ret))
            .catch(err => res.status(500).send(err))
    } catch (err){
        next(err);
    }
}

module.exports.getItensPedido = getItensPedido
module.exports.postItensPedido = postItensPedido
module.exports.deleteItensPedido = deleteItensPedido
module.exports.putItensPedido = putItensPedido
module.exports.patchItensPedido = patchItensPedido
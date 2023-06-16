let pedidoService = require('../services/pedido')

const getPedido = async (req, res, next) => {
    try {
        const retorno = await pedidoService.getPedido(req.params)
        res.status(200).json(retorno)
    } catch (err) {
        res.status(500).send(err)
    }
}

const postPedido = async (req, res, next) => {
    await pedidoService.postPedido(req.body)
        .then(ret => res.status(201).send(ret))
        .catch(err => res.status(500).send(err.message))
}

const deletePedido = async (req, res, next) => {
    try {
        await pedidoService.deletePedido(req.params)
        .then(ret => res.status(200).send(ret))
        .catch(err => res.status(500).send(err))
    } catch {
        next(err);
    }
}

const putPedido = async (req, res, next) => {
    try {
        let params = req.body
        params.idpedido = req.params.idpedido
        await pedidoService.putPedido(params)
            .then(ret => res.status(200).send(ret))
            .catch(err => res.status(500).send(err)) 
    } catch (err){
        next(err);
    }
}

const patchPedido = async (req, res, next) => {
    try{
        let params = req.body
        params.id = req.params.id
        await pedidoService.patchPedido(params)
            .then(ret => res.status(200).send(ret))
            .catch(err => res.status(500).send(err))
    } catch (err){
        next(err);
    }
}

module.exports.getPedido = getPedido
module.exports.postPedido = postPedido
module.exports.deletePedido = deletePedido
module.exports.putPedido = putPedido
module.exports.patchPedido = patchPedido
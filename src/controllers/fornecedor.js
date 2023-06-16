let fornecedorService = require('../services/fornecedor')

const getFornecedor = async (req, res, next) => {
    try {
        const retorno = await fornecedorService.getFornecedor(req.params)
        res.status(200).json(retorno)
    } catch (err) {
        res.status(500).send(err)
    }
}

const postFornecedor = async (req, res, next) => {
    await fornecedorService.postFornecedor(req.body)
        .then(ret => res.status(201).send(ret))
        .catch(err => res.status(500).send(err.message))
}

const deleteFornecedor = async (req, res, next) => {
    try {
        await fornecedorService.deleteFornecedor(req.params)
        .then(ret => res.status(200).send(ret))
        .catch(err => res.status(500).send(err))
    } catch {
        next(err);
    }
}

const putFornecedor = async (req, res, next) => {
    try {
        let params = req.body
        params.idfornecedor = req.params.idfornecedor
        await fornecedorService.putFornecedor(params)
            .then(ret => res.status(200).send(ret))
            .catch(err => res.status(500).send(err)) 
    } catch (err){
        next(err);
    }
}

const patchFornecedor = async (req, res, next) => {
    try{
        let params = req.body
        params.id = req.params.id
        await fornecedorService.patchFornecedor(params)
            .then(ret => res.status(200).send(ret))
            .catch(err => res.status(500).send(err))
    } catch (err){
        next(err);
    }
}

module.exports.getFornecedor = getFornecedor
module.exports.postFornecedor = postFornecedor
module.exports.deleteFornecedor = deleteFornecedor
module.exports.putFornecedor = putFornecedor
module.exports.patchFornecedor = patchFornecedor
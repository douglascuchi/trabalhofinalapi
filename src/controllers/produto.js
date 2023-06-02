let produtoService = require('../services/produto')

const getProduto = async (req, res, next) => {
    try {
        const retorno = await produtoService.getProduto(req.params)
        res.status(201).json(retorno)
    } catch (err) {
        res.status(500).send(err)
    }
}

const postProduto = async (req, res, next) => {
    await produtoService.postProduto(req.body)
        .then(ret => res.status(201).send(ret))
        .catch(err => res.status(500).send(err.message))
}

const deleteProduto = async (req, res, next) => {
    try {
        await produtoService.deleteProduto(req.params)
        .then(ret => res.status(204).send(ret))
        .catch(err => res.status(500).send(err))
    } catch {
        next(err);
    }
}

const putProduto = async (req, res, next) => {
    try {
        let params = req.body
        params.id = req.params.id
        await produtoService.putProduto(params)
            .then(ret => res.status(200).send(ret))
            .catch(err => res.status(500).send(err)) 
    } catch (err){
        next(err);
    }
}

const patchProduto = async (req, res, next) => {
    try{
        let params = req.body
        params.id = req.params.id
        await produtoService.patchProduto(params)
            .then(ret => res.status(200).send(ret))
            .catch(err => res.status(500).send(err))
    } catch (err){
        next(err);
    }
}

module.exports.getProduto= getProduto
module.exports.postProduto = postProduto
module.exports.deleteProduto = deleteProduto
module.exports.putProduto = putProduto
module.exports.patchProduto = patchProduto
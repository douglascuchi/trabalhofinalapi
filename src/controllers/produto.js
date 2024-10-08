let produtoService = require('../services/produto')

const getProduto = async (req, res, next) => {
    try {
        const retorno = await produtoService.getProduto(req.params)
        res.status(200).json(retorno)
    } catch (err) {
        res.status(500).send(err)
    }
}

const getProdutoRifle = async (req, res, next) => {
    try {
        const retorno = await produtoService.getProdutoRifle(req.params)
        res.status(200).json(retorno)
    } catch (err) {
        res.status(500).send(err)
    }
}

const getProdutoPistola = async (req, res, next) => {
    try {
        const retorno = await produtoService.getProdutoPistola(req.params)
        res.status(200).json(retorno)
    } catch (err) {
        res.status(500).send(err)
    }
}

const getProdutoFaca = async (req, res, next) => {
    try {
        const retorno = await produtoService.getProdutoFaca(req.params)
        res.status(200).json(retorno)
    } catch (err) {
        res.status(500).send(err)
    }
}

const getProdutoLuva = async (req, res, next) => {
    try {
        const retorno = await produtoService.getProdutoLuva(req.params)
        res.status(200).json(retorno)
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
        .then(ret => res.status(200).send(ret))
        .catch(err => res.status(500).send(err))
    } catch {
        next(err);
    }
}

const putProduto = async (req, res, next) => {
    try {
        let params = req.body
        params.idproduto = req.params.idproduto
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
module.exports.getProdutoRifle = getProdutoRifle
module.exports.getProdutoPistola = getProdutoPistola
module.exports.getProdutoFaca = getProdutoFaca
module.exports.getProdutoLuva = getProdutoLuva


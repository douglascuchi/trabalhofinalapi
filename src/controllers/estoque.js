let estoqueService = require('../services/estoque')

const getEstoque = async (req, res, next) => {
    try {
        const retorno = await estoqueService.getEstoque(req.params)
        res.status(200).json(retorno)
    } catch (err) {
        res.status(500).send(err)
    }
}

const postEstoque = async (req, res, next) => {
    await estoqueService.postEstoque(req.body)
        .then(ret => res.status(201).send(ret))
        .catch(err => res.status(500).send(err.message))
}

const deleteEstoque = async (req, res, next) => {
    try {
        await estoqueService.deleteEstoque(req.params)
        .then(ret => res.status(200).send(ret))
        .catch(err => res.status(500).send(err))
    } catch {
        next(err);
    }
}

const putEstoque = async (req, res, next) => {
    try {
        let params = req.body
        params.id = req.params.id
        await estoqueService.putEstoque(params)
            .then(ret => res.status(200).send(ret))
            .catch(err => res.status(500).send(err)) 
    } catch (err){
        next(err);
    }
}

const patchEstoque = async (req, res, next) => {
    try{
        let params = req.body
        params.id = req.params.id
        await estoqueService.patchEstoque(params)
            .then(ret => res.status(200).send(ret))
            .catch(err => res.status(500).send(err))
    } catch (err){
        next(err);
    }
}

module.exports.getEstoque = getEstoque
module.exports.postEstoque = postEstoque
module.exports.deleteEstoque = deleteEstoque
module.exports.putEstoque = putEstoque
module.exports.patchEstoque = patchEstoque
let categoriaService = require('../services/categoria')

const getCategoria = async (req, res, next) => {
    try {
        const retorno = await categoriaService.getCategoria(req.params)
        res.status(200).json(retorno)
    } catch (err) {
        res.status(500).send(err)
    }
}

const postCategoria = async (req, res, next) => {
    await categoriaService.postCategoria(req.body)
        .then(ret => res.status(201).send(ret))
        .catch(err => res.status(500).send(err.message))
}

const deleteCategoria = async (req, res, next) => {
    try {
        await categoriaService.deleteCategoria(req.params)
        .then(ret => res.status(200).send(ret))
        .catch(err => res.status(500).send(err))
    } catch {
        next(err);
    }
}

const putCategoria = async (req, res, next) => {
    try {
        let params = req.body
        params.id = req.params.id
        await categoriaService.putCategoria(params)
            .then(ret => res.status(200).send(ret))
            .catch(err => res.status(500).send(err)) 
    } catch (err){
        next(err);
    }
}

const patchCategoria = async (req, res, next) => {
    try{
        let params = req.body
        params.id = req.params.id
        await categoriaService.patchCategoria(params)
            .then(ret => res.status(200).send(ret))
            .catch(err => res.status(500).send(err))
    } catch (err){
        next(err);
    }
}

module.exports.getCategoria = getCategoria
module.exports.postCategoria = postCategoria
module.exports.deleteCategoria = deleteCategoria
module.exports.putCategoria = putCategoria
module.exports.patchCategoria = patchCategoria
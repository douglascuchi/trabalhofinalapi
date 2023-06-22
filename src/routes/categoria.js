const categoriaController = require('../controllers/categoria');

module.exports = (app) => {
    app.get('/categoria', categoriaController.getCategoria
    /*  #swagger.tags = ['Categoria']   
        #swagger.summary = 'Busca lista de categorias.'       
        #swagger.responses[200] = { 
        description: 'Retorno da consulta:',
        schema: {
           "total": 1,
           "categoria": [
                {
                    "idcategoria": 3,
                    "nome": "Rifle",
                     "descricao": "Rifles de precisão"
                }
             ]
        }
        }
    */)
    app.post('/categoria', categoriaController.postCategoria
    /*  #swagger.tags = ['Categoria']
        #swagger.summary = 'Cadastra uma categoria.'
        #swagger.parameters['json'] = {
                in: 'body',
                description: 'Dados para cadastrar uma categoria.',
                type: 'json',
                schema: {
                     nome: "Rifle",
                     descricao: "Rifles de precisão"
                }
        }
    */)
    app.delete('/categoria/:id', categoriaController.deleteCategoria
    /*  #swagger.tags = ['Categoria']
        #swagger.summary = 'Remove uma categoria.',
        #swagger.parameters['id'] = {
                description: "Chave de identificação da categoria (ID).",
                value: "1"
        }
    */)
    app.put('/categoria/:idcategoria', categoriaController.putCategoria
    /*  #swagger.tags = ['Categoria']
         #swagger.summary = 'Atualização completa da categoria.',
         #swagger.parameters['id'] = {
                 description: "Chave de identificação do categoria (ID).",
                 value: "1"
        }
        #swagger.parameters['json'] = {
                in: 'body',
                description: 'Dados para atualizar completamente uma categoria.',
                type: 'json',
                schema: {
                     nome: "Sniper",
                     descricao: "Uma bala basta"
                }
        }
    */)
    app.patch('/categoria/:id', categoriaController.patchCategoria
    /*  #swagger.tags = ['Categoria']
        #swagger.summary = 'Atualização parcial da categoria.',
        #swagger.parameters['id'] = {
                description: "Chave de identificação do categoria (ID).",
                value: "1"
        }
        #swagger.parameters['json'] = {
                in: 'body',
                description: 'Dados para atualizar parcialmente uma categoria.',
                type: 'json',
                schema: {
                     descricao: "Una balita"
                }
        }
    */)
}
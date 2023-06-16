const produtoController = require('../controllers/produto');

module.exports = (app) => {
    app.get('/produto', produtoController.getProduto
    /*  #swagger.tags = ['Produto']   
        #swagger.summary = 'Busca lista de produtos.'       
        #swagger.responses[200] = { 
                description: 'Retorno da consulta:',
                schema: {
                    "total": 1,
                    "produto": [
                        {
                            "idproduto": 4,
                            "nome": "Awp Asiimov",
                            "descricao": "Não tanca",
                            "preco": "780.00",
                            "idcategoria": 3
                        }
                    ]
                }
        }
    */)
    app.post('/produto', produtoController.postProduto
    /*  #swagger.tags = ['Produto']
         #swagger.summary = 'Cadastra um produto.'
         #swagger.parameters['json'] = {
                in: 'body',
                description: 'Dados para cadastrar um produto.',
                type: 'json',
                schema: {
                       nome: "Awp Asiimov",
                       descricao: "Não tanca",
                       preco: "780",
                       idcategoria: "3"
                }
        }
    */)
    app.delete('/produto/:id', produtoController.deleteProduto
    /*  #swagger.tags = ['Produto']
        #swagger.summary = 'Remove um produto.',
        #swagger.parameters['id'] = {
                description: "Chave de identificação do produto (ID).",
                value: "1"
        }
    */)
    app.put('/produto/:idproduto', produtoController.putProduto
    /*  #swagger.tags = ['Produto']
        #swagger.summary = 'Atualização completa do produto.',
        #swagger.parameters['id'] = {
                description: "Chave de identificação do produto (ID).",
                value: "1"
        }
        #swagger.parameters['json'] = {
                in: 'body',
                description: 'Dados para atualizar completamente um produto.',
                type: 'json',
                schema: {
                       idproduto: "1",
                       nome: "AWP Asiimov",
                       descricao: "Mardita",
                       preco: "780",
                       idcategoria: "3"
                }
        }
    */)
    app.patch('/produto/:id', produtoController.patchProduto
    /*  #swagger.tags = ['Produto']
        #swagger.summary = 'Atualização parcial do produto.',
        #swagger.parameters['id'] = {
                description: "Chave de identificação do produto (ID).",
                value: "1"
        }
        #swagger.parameters['json'] = {
                in: 'body',
                description: 'Dados para atualizar parcialmente um produto.',
                type: 'json',
                schema: {
                     "preco": "800"
                }
        }
    */)
}
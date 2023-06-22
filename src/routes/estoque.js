const estoqueController = require('../controllers/estoque');

module.exports = (app) => {
    app.get('/estoque', estoqueController.getEstoque
    /*  #swagger.tags = ['Estoque']   
        #swagger.summary = 'Busca lista de produtos no estoque.'       
        #swagger.responses[200] = { 
                description: 'Retorno da consulta:',
                schema: {
                    "total": 1,
                    "categoria": [
                        {
                            "idestoque": 5,
                            "idproduto": 4,
                            "idfornecedor": 4,
                            "quantidade": 10,
                            "data_entrada": "2023-06-15T03:00:00.000Z"
                        }
                    ]
                }
        }
    */)
    app.post('/estoque', estoqueController.postEstoque
    /*  #swagger.tags = ['Estoque']
         #swagger.summary = 'Cadastra um produto no estoque.'
         #swagger.parameters['json'] = {
                in: 'body',
                description: 'Dados para cadastrar um produto no estoque.',
                type: 'json',
                schema: {
                    idproduto: "4", 
                    idfornecedor: "4", 
                    quantidade: "10",
                    data_entrada: "2023-06-15"
                }
        }
    */)
    app.delete('/estoque/:id', estoqueController.deleteEstoque
    /*  #swagger.tags = ['Estoque']
        #swagger.summary = 'Remove um produto do estoque.',
        #swagger.parameters['id'] = {
                description: "Chave de identificação do estoque (ID).",
                value: "1"
        }
    */)
    app.put('/estoque/:idestoque', estoqueController.putEstoque
    /*  #swagger.tags = ['Estoque']
        #swagger.summary = 'Atualização completa de um produto no estoque.',
        #swagger.parameters['id'] = {
                description: "Chave de identificação do estoque (ID).",
                value: "1"
        }
        #swagger.parameters['json'] = {
                in: 'body',
                description: 'Dados para atualizar completamente um estoque.',
                type: 'json',
                schema: {
                     idproduto: "4", 
                     idfornecedor: "4", 
                     quantidade: "20",
                     data_entrada: "2023-06-15"
                }
        }
    */)
    app.patch('/estoque/:id', estoqueController.patchEstoque
    /*  #swagger.tags = ['Estoque']
        #swagger.summary = 'Atualização parcial do produto no estoque.',
        #swagger.parameters['id'] = {
                description: "Chave de identificação do estoque (ID).",
                value: "1"
        }
        #swagger.parameters['json'] = {
                in: 'body',
                description: 'Dados para atualizar parcialmente do estoque.',
                type: 'json',
                schema: {
                    quantidade: "100"
                }
        }
    */)
}
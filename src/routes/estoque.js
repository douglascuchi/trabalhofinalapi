const estoqueController = require('../controllers/estoque');

module.exports = (app) => {
    app.get('/estoque', estoqueController.getEstoque
    /*  #swagger.tags = ['Estoque']
        #swagger.summary = 'Busca lista de produtos no estoque.'
        */)
    app.post('/estoque', estoqueController.postEstoque
     /*  #swagger.tags = ['Estoque']
         #swagger.summary = 'Cadastra uma categoria.'
         #swagger.parameters['json'] = {
                in: 'body',
                description: 'Dados para cadastrar um produto no estoque.',
                type: 'json',
                schema: {
                    idproduto: "2", 
                    idfornecedor: "2", 
                    quantidade: "50",
                    data_entrada: "05-06-2023"
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
    app.put('/estoque/:id', estoqueController.putEstoque
     /*  #swagger.tags = ['Estoque']
        #swagger.summary = 'Atualização completa do estoque.',
        #swagger.parameters['id'] = {
     description: "Chave de identificação do estoque (ID).",
     value: "1"
        }
        #swagger.parameters['json'] = {
                in: 'body',
                description: 'Dados para atualizar completamente um estoque.',
                type: 'json',
                schema: {
                     idestoque: "3",
                     idproduto: "2", 
                     idfornecedor: "2", 
                     quantidade: "100",
                     data_entrada: "05-06-2023"
                }
            }
        */)
    app.patch('/estoque/:id', estoqueController.patchEstoque
        /*  #swagger.tags = ['Estoque']
        #swagger.summary = 'Atualização parcial do estoque.',
        #swagger.parameters['id'] = {
     description: "Chave de identificação do estoque (ID).",
     value: "1"
        }
        #swagger.parameters['json'] = {
                in: 'body',
                description: 'Dados para atualizar parcialmente do estoque.',
                type: 'json',
                schema: {
                    idestoque: "3", 
                    quantidade: "500"
                }
            }
        */)
}
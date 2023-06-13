const itensPedidoController = require('../controllers/itenspedido');

module.exports = (app) => {
    app.get('/itenspedido', itensPedidoController.getItensPedido
    /*  #swagger.tags = ['Itens do pedido']
        #swagger.summary = 'Busca lista de itens do pedido.'
        */)
    app.post('/itenspedido', itensPedidoController.postItensPedido
     /*  #swagger.tags = ['Itens do pedido']
         #swagger.summary = 'Cadastra um item do pedido.'
         #swagger.parameters['json'] = {
                in: 'body',
                description: 'Dados para cadastrar um item do pedido.',
                type: 'json',
                schema: {
                      idpedido: "1",
                      idproduto: "1",
                      quantidade: "3",
                      preco_unitario: "150",
                      desconto: "10",
                      subtotal: "450",
                      observacao: "Alguma observação sobre o item"
                }
            }
        */)
    app.delete('/itenspedido/:id', itensPedidoController.deleteItensPedido
    /*  #swagger.tags = ['Itens do pedido']
        #swagger.summary = 'Remove um item do pedido.',
        #swagger.parameters['id'] = {
     description: "Chave de identificação do item do pedido (ID).",
     value: "1"
        }
        */)
    app.put('/itenspedido/:id', itensPedidoController.putItensPedido
    /*  #swagger.tags = ['Itens do pedido']
        #swagger.summary = 'Atualização completa do item do pedido.',
        #swagger.parameters['id'] = {
     description: "Chave de identificação do item do pedido (ID).",
     value: "1"
        }
        #swagger.parameters['json'] = {
                in: 'body',
                description: 'Dados para atualizar completamente um item do pedido.',
                type: 'json',
                schema: {
                      iditenspedido: "1",
                      idpedido: "1",
                      idproduto: "1",
                      quantidade: "3",
                      preco_unitario: "150",
                      desconto: "10",
                      subtotal: "450",
                      observacao: "Alguma observação sobre o item"
                }
            }
        */)
    app.patch('/itenspedido/:id', itensPedidoController.patchItensPedido
     /*  #swagger.tags = ['Itens do pedido']
        #swagger.summary = 'Atualização parcial do item do pedido.',
        #swagger.parameters['id'] = {
     description: "Chave de identificação do item do pedido (ID).",
     value: "1"
        }
        #swagger.parameters['json'] = {
                in: 'body',
                description: 'Dados para atualizar parcialmente um item do pedido.',
                type: 'json',
                schema: {
                     iditenspedido: "1",
                     quantidade: "3",
                     preco_unitario: "150"
                }
            }
        */)
}
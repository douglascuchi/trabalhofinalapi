const itensPedidoController = require('../controllers/itenspedido');

module.exports = (app) => {
    app.get('/itenspedido', itensPedidoController.getItensPedido
    /*  #swagger.tags = ['Itens do pedido']   
        #swagger.summary = 'Busca lista de itens do pedido.'       
        #swagger.responses[200] = { 
                description: 'Retorno da consulta:',
                schema: {
                    "total": 1,
                    "itensPedido": [
                        {
                            "iditenspedido": 5,
                            "idpedido": 3,
                            "idproduto": 4,
                            "quantidade": 1,
                            "preco_unitario": "800.00",
                            "desconto": "0.00",
                            "subtotal": "800.00",
                            "observacao": "Venda para cliente douglas"
                        }
                    ]
                }
        }
    */)
    app.post('/itenspedido', itensPedidoController.postItensPedido
    /*  #swagger.tags = ['Itens do pedido']
         #swagger.summary = 'Cadastra um item do pedido.'
         #swagger.parameters['json'] = {
                in: 'body',
                description: 'Dados para cadastrar um item do pedido.',
                type: 'json',
                schema: {
                      idpedido: "3",
                      idproduto: "4",
                      quantidade: "1",
                      preco_unitario: "800",
                      desconto: "0",
                      subtotal: "800",
                      observacao: "Venda para cliente douglas"
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
    app.put('/itenspedido/:iditenspedido', itensPedidoController.putItensPedido
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
                      idpedido: 3,
                      idproduto: 4,
                      quantidade: 1,
                      preco_unitario: "800.00",
                      desconto: "0.00",
                      subtotal: "800.00",
                      observacao: "Venda para cliente douglas eduardo cuchi"
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
                     observacao: "Venda para cliente douglas eduardo cuchi cliente fiel"
                }
        }
    */)
}
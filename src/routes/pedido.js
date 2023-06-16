const pedidoController = require('../controllers/pedido');

module.exports = (app) => {
    app.get('/pedido', pedidoController.getPedido
    /*  #swagger.tags = ['Pedido']   
        #swagger.summary = 'Busca lista de pedidos.'       
        #swagger.responses[200] = { 
                description: 'Retorno da consulta:',
                schema: {
                    "total": 1,
                    "pedido": [
                        {
                            "idpedido": 3,
                            "idcliente": 4,
                            "data_pedido": "2023-06-15T03:00:00.000Z",
                            "total": "800.00",
                            "status": "finalizado",
                            "forma_pagamento": "Pix"
                        }
                    ]
                }
        }
    */)
    app.post('/pedido', pedidoController.postPedido
    /*  #swagger.tags = ['Pedido']
         #swagger.summary = 'Cadastra um pedido.'
         #swagger.parameters['json'] = {
                in: 'body',
                description: 'Dados para cadastrar um pedido.',
                type: 'json',
                schema: {
                      idcliente: "4",
                      data_pedido: "2023-06-15",
                      total: "800",
                      status: "finalizado",
                      forma_pagamento: "Pix" 
                }
            }
    */)
    app.delete('/pedido/:id', pedidoController.deletePedido
    /*  #swagger.tags = ['Pedido']
        #swagger.summary = 'Remove um pedido.',
        #swagger.parameters['id'] = {
                description: "Chave de identificação do pedido (ID).",
                value: "1"
        }
    */)
    app.put('/pedido/:idpedido', pedidoController.putPedido
    /*  #swagger.tags = ['Pedido']
        #swagger.summary = 'Atualização completa do pedido.',
        #swagger.parameters['id'] = {
                description: "Chave de identificação do pedido (ID).",
                value: "1"
        }
        #swagger.parameters['json'] = {
                in: 'body',
                description: 'Dados para atualizar completamente um pedido.',
                type: 'json',
                schema: {
                       idcliente: "4",
                       data_pedido: "2023-06-15",
                       total: "800",
                       status: "finalizado",
                       forma_pagamento: "Cartão" 
                }
        }
    */)
    app.patch('/pedido/:id', pedidoController.patchPedido
    /*  #swagger.tags = ['Pedido']
        #swagger.summary = 'Atualização parcial do pedido.',
        #swagger.parameters['id'] = {
                description: "Chave de identificação do pedido (ID).",
                value: "1"
        }
        #swagger.parameters['json'] = {
                in: 'body',
                description: 'Dados para atualizar parcialmente um pedido.',
                type: 'json',
                schema: {
                     data_pedido: "01-06-2023"
                }
        }
    */)
}
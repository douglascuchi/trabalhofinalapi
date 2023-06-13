const pedidoController = require('../controllers/pedido');

module.exports = (app) => {
    app.get('/pedido', pedidoController.getPedido
    /*  #swagger.tags = ['Pedido']
        #swagger.summary = 'Busca lista de pedidos.'
        */)
    app.post('/pedido', pedidoController.postPedido
    /*  #swagger.tags = ['Pedido']
         #swagger.summary = 'Cadastra um pedido.'
         #swagger.parameters['json'] = {
                in: 'body',
                description: 'Dados para cadastrar um pedido.',
                type: 'json',
                schema: {
                      idcliente: "1",
                      data_pedido: "01-06-2023",
                      total: "300",
                      status: "finalizado",
                      forma_pagamento: "pix" 
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
    app.put('/pedido/:id', pedidoController.putPedido
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
                       idpedido: "1",
                       idcliente: "1",
                       data_pedido: "01-06-2023",
                       total: "200",
                       status: "finalizado",
                       forma_pagamento: "pix" 
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
                     idpedido: "1",
                     data_pedido: "01-06-2023"
                }
            }
        */)
}
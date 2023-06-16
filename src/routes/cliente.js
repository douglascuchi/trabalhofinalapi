const clienteController = require('../controllers/cliente');

module.exports = (app) => {
    app.get('/cliente', clienteController.getCliente       
    /*  #swagger.tags = ['Cliente']   
        #swagger.summary = 'Busca lista de clientes'       
        #swagger.responses[200] = { 
                description: 'Retorno da consulta:',
                schema: {
                    "total": 1,
                    "cliente": [
                        {
                            "idcliente": 4,
                            "nome": "Douglas Eduardo Cuchi",
                            "email": "douglas@live.com",
                            "endereco": "Av. São Paulo",
                            "telefone": "(49) 988690705",
                            "numero": 2793,
                            "bairro": "Pioneiro",
                            "complemento": "Esquina",
                            "municipio": "Pinhalzinho",
                            "cep": 89870000,
                            "uf": "SC"
                        }
                    ]
                }
        }   
    */)
    app.post('/cliente', clienteController.postCliente
    /*  #swagger.tags = ['Cliente']
        #swagger.summary = 'Cadastra um cliente.'
        #swagger.parameters['json'] = {
                in: 'body',
                description: 'Dados para cadastrar um cliente.',
                type: 'json',
                schema: {
                    nome: "Douglas Eduardo Cuchi",
                    email: "douglaszer0@live.com",
                    endereco: "Av. São Paulo",
                    telefone: "49988690705",
                    numero: "2793",
                    bairro: "Pioneiro", 
                    complemento: "Esquina", 
                    municipio: "Pinhalzinho",
                    cep: "89870000", 
                    uf: "SC"
                }
        }
    */)
    app.delete('/cliente/:id', clienteController.deleteCliente
    /*  #swagger.tags = ['Cliente']
        #swagger.summary = 'Remove um cliente.',
        #swagger.parameters['id'] = {
                description: "Chave de identificação do cliente (ID).",
                value: "1"
        }
    */)
    app.put('/cliente/:idcliente', clienteController.putCliente
    /*  #swagger.tags = ['Cliente']
        #swagger.summary = 'Atualização completa do cliente.',
        #swagger.parameters['id'] = {
                description: "Chave de identificação do cliente (ID).",
                value: "1"
        }
        #swagger.parameters['json'] = {
                in: 'body',
                description: 'Dados para atualizar completamente um cliente.',
                type: 'json',
                schema: {
                    nome: "Douglas Eduardo Cuchi",
                    email: "douglaszer0@live.com",
                    endereco: "Avenida não sei",
                    telefone: "988654893",
                    numero: "1234",
                    bairro: "Pioneiro", 
                    complemento: "Esquina", 
                    municipio: "Saudades",
                    cep: "89868000", 
                    uf: "SC"
                }
        }
    */)
    app.patch('/cliente/:id', clienteController.patchCliente
    /*  #swagger.tags = ['Cliente']
        #swagger.summary = 'Atualização parcial do cliente.',
        #swagger.parameters['id'] = {
                description: "Chave de identificação do cliente (ID).",
                value: "1"
        }
        #swagger.parameters['json'] = {
                in: 'body',
                description: 'Dados para atualizar parcialmente um cliente.',
                type: 'json',
                schema: {
                      municipio: "Pinhalzinho",
                      cep: "89870000"
                }
        }
    */)
}
const fornecedorController = require('../controllers/fornecedor');

module.exports = (app) => {
    app.get('/fornecedor', fornecedorController.getFornecedor
    /*  #swagger.tags = ['Fornecedor']   
        #swagger.summary = 'Busca lista de fornecedor.'       
        #swagger.responses[200] = { 
                description: 'Retorno da consulta:',
                schema: {
                    "total": 1,
                    "fornecedor": [
                        {
                            "idfornecedor": 4,
                            "nome": "João",
                            "cnpj": "01254658965214",
                            "telefone": "49855421457",
                            "email": "joao@gmail.com",
                            "endereco": "Rua tal"
                        }
                    ]
                }
        }
    */)
    app.post('/fornecedor', fornecedorController.postFornecedor
    /*  #swagger.tags = ['Fornecedor']
        #swagger.summary = 'Cadastra um Fornecedor.'
         #swagger.parameters['json'] = {
                in: 'body',
                description: 'Dados para cadastrar um fornecedor.',
                type: 'json',
                schema: {
                    nome: "João",
                    cnpj: "01254658965214",
                    telefone: "49855421457",
                    email: "joao@gmail.com",
                    endereco: "Rua tal"
                }
        }
    */)
    app.delete('/fornecedor/:id', fornecedorController.deleteFornecedor
    /*  #swagger.tags = ['Fornecedor']
        #swagger.summary = 'Remove um fornecedor.',
        #swagger.parameters['id'] = {
                description: "Chave de identificação do fornecedor (ID).",
                value: "1"
        }
    */)
    app.put('/fornecedor/:idfornecedor', fornecedorController.putFornecedor
    /*  #swagger.tags = ['Fornecedor']
        #swagger.summary = 'Atualização completa do fornecedor.',
        #swagger.parameters['id'] = {
                description: "Chave de identificação do fornecedor (ID).",
                value: "1"
        }
        #swagger.parameters['json'] = {
                in: 'body',
                description: 'Dados para atualizar completamente um fornecedor',
                type: 'json',
                schema: {
                    nome: "Douglas", 
                    cnpj: "01245454587858", 
                    telefone: "49988690705",
                    email: "doug@gmail.com",
                    endereco: "não sei"
                }
        }
    */)
    app.patch('/fornecedor/:id', fornecedorController.patchFornecedor
    /*  #swagger.tags = ['Fornecedor']
        #swagger.summary = 'Atualização parcial do fornecedor.',
        #swagger.parameters['id'] = {
                description: "Chave de identificação do fornecedor (ID).",
                value: "1"
        }
        #swagger.parameters['json'] = {
                in: 'body',
                description: 'Dados para atualizar parcialmente um fornecedor.',
                type: 'json',
                schema: {
                    email: "douglaszer0@gmail.com"
                }
        }
    */)
}
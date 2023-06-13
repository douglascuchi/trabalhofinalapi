const fornecedorController = require('../controllers/fornecedor');

module.exports = (app) => {
    app.get('/fornecedor', fornecedorController.getFornecedor
        /*  #swagger.tags = ['Fornecedor']
        #swagger.summary = 'Busca lista de fornecedor.'
        */)
    app.post('/fornecedor', fornecedorController.postFornecedor
        /*  #swagger.tags = ['Fornecedor']
        #swagger.summary = 'Cadastra um Fornecedor.'
         #swagger.parameters['json'] = {
                in: 'body',
                description: 'Dados para cadastrar um fornecedor.',
                type: 'json',
                schema: {
                    idfornecedor: 1,
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
    app.put('/fornecedor/:id', fornecedorController.putFornecedor
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
                    idfornecedor: "2",
                    nome: "Pablo", 
                    cnpj: "01254658965214", 
                    telefone: "49855421457",
                    email: "joao@gmail.com",
                    endereco: "Rua tal"
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
                    idfornecedor: "2",
                    email: "joao1234@gmail.com"
                }
            }
        */)
}
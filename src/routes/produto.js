const produtoController = require('../controllers/produto');

module.exports = (app) => {
    app.get('/produto', produtoController.getProduto
     /*  #swagger.tags = ['Produto']
        #swagger.summary = 'Busca lista de produtos.'
        */)
    app.post('/produto', produtoController.postProduto
    /*  #swagger.tags = ['Produto']
         #swagger.summary = 'Cadastra um produto.'
         #swagger.parameters['json'] = {
                in: 'body',
                description: 'Dados para cadastrar um produto.',
                type: 'json',
                schema: {
                       nome: "AK-47 Rebelde",
                       descricao: "Poderosa",
                       preco: "150",
                       idcategoria: "1"
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
    app.put('/produto/:id', produtoController.putProduto
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
                       descricao: "Uma bala basta",
                       preco: "200",
                       idcategoria: "2"
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
                     idproduto: "1",
                     nome: "USP-S Córtex",
                     descricao: "Pistola com silenciador"
                }
            }
        */)
}
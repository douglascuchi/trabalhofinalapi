const swaggerAutogen = require('swagger-autogen' )('pt-BR');
const doc = {
    info: {
        version: "1.0.0",
        title: "API TRABALHO FINAL",
        description: "Documentação da API"
    },
    host: `localhost:3000`,
    basePath: "",
    schemes: ['http'], 
    consumes: ['application/json'],
    produces: ['application/json'],
}

const outputFile = './src/docs/swagger.yaml'; 
const endpointsFiles = [
    './src/routes/cliente.js',
    './src/routes/categoria.js',
    './src/routes/produto.js',
    './src/routes/pedido.js',
    './src/routes/itenspedido.js',
    './src/routes/fornecedor.js',
    './src/routes/estoque.js'
]; 

swaggerAutogen(outputFile, endpointsFiles, doc); 

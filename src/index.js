const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
require('./services/swagger')

let domains = ['http://localhost:9000', 'http://localhost:3000']
const corsOptions = {
    origin: function (origin, callback) {
        if (domains.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error(`Not allowed by CORS? ${origin} // ${domains}`))
        }
    }, 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS', 
    credentials: true   
}


app.use(cors(corsOptions))

require('./routes')(app)
app.get('/', (req, res) => { res.send('API'); });

app.use('/v1/docs', express.static('src/views'))
app.use('/docs/swagger.yaml', express.static('src/docs/swagger.yaml'))

app.listen(3000, () => {
    console.log(`Aplicação rodando na porta ${3000}`);

});
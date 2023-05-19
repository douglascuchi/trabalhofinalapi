const express = require('express')
const app = express()

require('./routes')(app)
app.get('/', (req, res) => { res.send('API'); });

app.listen(3000, () => {
    console.log(`Aplicação rodando na porta ${3000}`);
});
const db = require('../configs/pg')

//Get
const sql_get =
    `select idcliente,
            nome,
            email,
            endereco,
            telefone,
            numero,
            bairro,
            complemento,
            municipio,
            cep,
            uf
       from cliente`

const getCliente = async () => {
    let cliente = {}
    await db.query(sql_get)
        .then(ret => cliente = { total: ret.rows.length, cliente: ret.rows })
        .catch(err => cliente = err.stack)
    return cliente
}

//Post
const sql_insert =
    `insert into cliente (nome, email, endereco, telefone, numero, bairro, complemento, municipio, cep, uf)
         values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`

const postCliente = async (params) => {
    const {nome, email, endereco, telefone, numero, bairro, complemento, municipio, cep, uf } = params
    await db.query(sql_insert, [nome, email, endereco, telefone, numero, bairro, complemento, municipio, cep, uf])
}

//Delete
const sql_delete =
    `delete from cliente
      where idcliente = $1`

const deleteCliente = async (params) => {
    const { id } = params
    await db.query(sql_delete, [id])
}

//Put
const sql_put =
    `update cliente
        set nome = $2,
            email = $3,
            endereco = $4,
            telefone = $5,
            numero = $6,
            bairro = $7,
            complemento = $8,
            municipio = $9, 
            cep = $10,
            uf = $11
      where idcliente = $1`

const putCliente = async (params) => {
    const { idcliente, nome, email, endereco, telefone, numero, bairro, complemento, municipio, cep, uf} = params
    return await db.query(sql_put, [idcliente, nome, email, endereco, telefone, numero, bairro, complemento, municipio, cep, uf])
}

//Patch
const sql_patch = 
    `update cliente
        set `

const patchCliente = async (params) => {
    let fields = ''
    let binds = []
    binds.push(params.id)
    let countParams = 1
    if (params.nome){
        countParams ++
        fields += ` nome = $${countParams} `
        binds.push(params.nome)
    }
    if (params.email){
        countParams ++ 
        fields += (fields?',':'') + ` email = $${countParams} `
        binds.push(params.email)
    }
    if (params.endereco){
        countParams ++
        fields += (fields?',':'') + ` endereco = $${countParams} `
        binds.push(params.endereco)
    }
    if (params.telefone){
        countParams ++
        fields += (fields?',':'') + ` telefone = $${countParams} `
        binds.push(params.telefone)
    }
    if (params.numero){
        countParams ++
        fields += (fields?',':'') + ` numero = $${countParams} `
        binds.push(params.numero)
    }
    if (params.bairro){
        countParams ++
        fields += (fields?',':'') + ` bairro = $${countParams} `
        binds.push(params.bairro)
    }
    if (params.complemento){
        countParams ++
        fields += (fields?',':'') + ` complemento = $${countParams} `
        binds.push(params.complemento)
    }
    if (params.municipio){
        countParams ++
        fields += (fields?',':'') + ` municipio = $${countParams} `
        binds.push(params.municipio)
    }
    if (params.cep){
        countParams ++
        fields += (fields?',':'') + ` cep = $${countParams} `
        binds.push(params.cep)
    }
    if (params.uf){
        countParams ++
        fields += (fields?',':'') + ` uf = $${countParams} `
        binds.push(params.uf)
    }
    let sql = sql_patch + fields + ' where idcliente = $1 '
    return await db.query(sql, binds)
}

    
module.exports.getCliente = getCliente
module.exports.postCliente = postCliente  
module.exports.deleteCliente = deleteCliente 
module.exports.putCliente = putCliente 
module.exports.patchCliente = patchCliente 

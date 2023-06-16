const db = require('../configs/pg')

//Get
const sql_get =
    `select idfornecedor,
            nome,
            cnpj,
            telefone,
            email,
            endereco
       from fornecedor`

const getFornecedor = async () => {
    let fornecedor = {}
    await db.query(sql_get)
        .then(ret => fornecedor = { total: ret.rows.length, fornecedor: ret.rows })
        .catch(err => fornecedor = err.stack)
    return fornecedor
}

//Post
const sql_insert =
    `insert into fornecedor (nome, cnpj, telefone, email, endereco)
         values ($1, $2, $3, $4, $5)`

const postFornecedor = async (params) => {
    const {nome, cnpj, telefone, email, endereco } = params
    await db.query(sql_insert, [nome, cnpj, telefone, email, endereco])
}

//Delete
const sql_delete =
    `delete from fornecedor
      where idfornecedor = $1`

const deleteFornecedor = async (params) => {
    const { id } = params
    await db.query(sql_delete, [id])
}

//Put
const sql_put =
    `update fornecedor
        set nome = $2,
            cnpj = $3,
            telefone = $4,
            email = $5,
            endereco = $6
      where idfornecedor = $1`

const putFornecedor = async (params) => {
    const {idfornecedor, nome, cnpj, telefone, email, endereco} = params
    return await db.query(sql_put, [idfornecedor, nome, cnpj, telefone, email, endereco])
}

//Patch
const sql_patch = 
    `update fornecedor
        set `

const patchFornecedor = async (params) => {
    let fields = ''
    let binds = []
    binds.push(params.id)
    let countParams = 1
    if (params.nome){
        countParams ++
        fields += ` nome = $${countParams} `
        binds.push(params.nome)
    }
    if (params.cnpj){
        countParams ++ 
        fields += (fields?',':'') + ` cnpj = $${countParams} `
        binds.push(params.cnpj)
    }
    if (params.telefone){
        countParams ++
        fields += (fields?',':'') + ` telefone = $${countParams} `
        binds.push(params.telefone)
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
    let sql = sql_patch + fields + ' where idfornecedor = $1 '
    return await db.query(sql, binds)
}

    
module.exports.getFornecedor = getFornecedor
module.exports.postFornecedor = postFornecedor  
module.exports.deleteFornecedor = deleteFornecedor 
module.exports.putFornecedor = putFornecedor 
module.exports.patchFornecedor = patchFornecedor 

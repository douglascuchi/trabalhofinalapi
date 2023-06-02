const db = require('../configs/pg')

//Get
const sql_get =
    `select idproduto,
            nome,
            descricao,
            preco,
            idcategoria
       from produto`

const getProduto = async () => {
    let produto = {}
    await db.query(sql_get)
        .then(ret => produto = { total: ret.rows.length, produto: ret.rows })
        .catch(err => produto = err.stack)
    return produto
}

//Post
const sql_insert =
    `insert into produto (nome, descricao, preco, idcategoria) values ($1, $2, $3, $4)`

const postProduto = async (params) => {
    const { nome, descricao, preco, idcategoria } = params
    await db.query(sql_insert, [nome, descricao, preco, idcategoria])
}

//Delete
const sql_delete =
    `delete from produto
      where idproduto = $1`

const deleteProduto = async (params) => {
    const { id } = params
    await db.query(sql_delete, [id])
}

//Put
const sql_put =
    `update produto
        set nome = $2,
            descricao = $3,
            preco = $4,
            idcategoria = $5
      where idproduto = $1`

const putProduto = async (params) => {
    const { idproduto, nome, descricao, preco, idcategoria } = params
    return await db.query(sql_put, [idproduto, nome, descricao, preco, idcategoria])
}

//Patch
const sql_patch = 
    `update produto
        set `

const patchProduto = async (params) => {
    let fields = ''
    let binds = []
    binds.push(params.idproduto)
    let countParams = 1
    if (params.nome){
        countParams ++
        fields += ` nome = $${countParams} `
        binds.push(params.nome)
    }
    if (params.descricao){
        countParams ++ 
        fields += (fields?',':'') + ` descricao = $${countParams} `
        binds.push(params.descricao)
    }
    if (params.preco){
        countParams ++
        fields += (fields?',':'') + ` preco = $${countParams} `
        binds.push(params.preco)
    }
    if (params.idcategoria){
        countParams ++
        fields += (fields?',':'') + ` idcategoria = $${countParams} `
        binds.push(params.idcategoria)
    }
    let sql = sql_patch + fields + ' where idproduto = $1 '
    return await db.query(sql, binds)
}

    
module.exports.getProduto = getProduto
module.exports.postProduto = postProduto  
module.exports.deleteProduto = deleteProduto 
module.exports.putProduto = putProduto 
module.exports.patchProduto = patchProduto 

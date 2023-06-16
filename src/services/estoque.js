const db = require('../configs/pg')

//Get
const sql_get =
    `select idestoque,
            idproduto,
            idfornecedor,
            quantidade,
            data_entrada
       from estoque`

const getEstoque = async () => {
    let estoque = {}
    await db.query(sql_get)
        .then(ret => estoque = { total: ret.rows.length, estoque: ret.rows })
        .catch(err => estoque = err.stack)
    return estoque
}

//Post
const sql_insert =
    `insert into estoque (idproduto, idfornecedor, quantidade, data_entrada) values ($1, $2, $3, $4)`

const postEstoque = async (params) => {
    const {idproduto, idfornecedor, quantidade, data_entrada} = params
    await db.query(sql_insert, [idproduto, idfornecedor, quantidade, data_entrada])
}

//Delete
const sql_delete =
    `delete from estoque
      where idestoque = $1`

const deleteEstoque = async (params) => {
    const { id } = params
    await db.query(sql_delete, [id])
}

//Put
const sql_put =
    `update estoque
        set idproduto = $2,
            idfornecedor = $3,
            quantidade = $4,
            data_entrada = $5
      where idestoque = $1`


const putEstoque = async (params) => {
    const { idestoque, idproduto, idfornecedor, quantidade, data_entrada } = params
    return await db.query(sql_put, [idestoque, idproduto, idfornecedor, quantidade, data_entrada])
}

//Patch
const sql_patch = 
    `update estoque
        set `

const patchEstoque = async (params) => {
    let fields = ''
    let binds = []
    binds.push(params.id)
    let countParams = 1
    if (params.idproduto){
        countParams ++
        fields += ` idproduto = $${countParams} `
        binds.push(params.idproduto)
    }
    if (params.idfornecedor){
        countParams ++ 
        fields += (fields?',':'') + ` idfornecedor = $${countParams} `
        binds.push(params.idfornecedor)
    }
    if (params.quantidade){
        countParams ++ 
        fields += (fields?',':'') + ` quantidade = $${countParams} `
        binds.push(params.quantidade)
    }
    if (params.data_entrada){
        countParams ++ 
        fields += (fields?',':'') + ` data_entrada = $${countParams} `
        binds.push(params.data_entrada)
    }
    let sql = sql_patch + fields + ' where idestoque = $1 '
    return await db.query(sql, binds)
}

module.exports.getEstoque = getEstoque
module.exports.postEstoque = postEstoque  
module.exports.deleteEstoque = deleteEstoque 
module.exports.putEstoque = putEstoque 
module.exports.patchEstoque = patchEstoque 

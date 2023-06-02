const db = require('../configs/pg')

//Get
const sql_get =
    `select itens_pedido,
            idpedido,
            idproduto,
            quantidade,
            preco_unitario
       from itens_pedido`

const getItensPedido = async () => {
    let itensPedido = {}
    await db.query(sql_get)
        .then(ret => itensPedido = { total: ret.rows.length, itensPedido: ret.rows })
        .catch(err => itensPedido = err.stack)
    return itensPedido
}

//Post
const sql_insert =
    `insert into itens_pedido (idpedido, idproduto, quantidade, preco_unitario) values ($1, $2, $3, $4)`

const postItensPedido = async (params) => {
    const { idpedido, idproduto, quantidade, preco_unitario } = params
    await db.query(sql_insert, [idpedido, idproduto, quantidade, preco_unitario])
}

//Delete
const sql_delete =
    `delete from itens_pedido
      where iditenspedido = $1`

const deleteItensPedido = async (params) => {
    const { id } = params
    await db.query(sql_delete, [id])
}

//Put
const sql_put =
    `update itens_pedido
        set idpedido = $2,
            idproduto = $3,
            quantidade = $4,
            preco_unitario = $5
      where iditenspedido = $1`

const putItensPedido = async (params) => {
    const { iditenspedido, idpedido, idproduto, quantidade, preco_unitario } = params
    return await db.query(sql_put, [iditenspedido, idpedido, idproduto, quantidade, preco_unitario])
}

//Patch
const sql_patch = 
    `update itens_pedido
        set `

const patchItensPedido = async (params) => {
    let fields = ''
    let binds = []
    binds.push(params.iditenspedido)
    let countParams = 1
    if (params.idpedido){
        countParams ++
        fields += ` idpedido = $${countParams} `
        binds.push(params.idpedido)
    }
    if (params.idproduto){
        countParams ++ 
        fields += (fields?',':'') + ` idproduto = $${countParams} `
        binds.push(params.idproduto)
    }
    if (params.quantidade){
        countParams ++
        fields += (fields?',':'') + ` quantidade = $${countParams} `
        binds.push(params.quantidade)
    }
    if (params.preco_unitario){
        countParams ++
        fields += (fields?',':'') + ` preco_unitario = $${countParams} `
        binds.push(params.preco_unitario)
    }
    let sql = sql_patch + fields + ' where iditenspedido = $1 '
    return await db.query(sql, binds)
}

    
module.exports.getItensPedido = getItensPedido
module.exports.postItensPedido = postItensPedido  
module.exports.deleteItensPedido = deleteItensPedido 
module.exports.putItensPedido = putItensPedido 
module.exports.patchItensPedido = patchItensPedido 

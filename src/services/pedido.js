const db = require('../configs/pg')

//Get
const sql_get =
    `select pedido,
            idcliente,
            data_pedido,
            total
       from pedido`

const getPedido = async () => {
    let pedido = {}
    await db.query(sql_get)
        .then(ret => pedido = { total: ret.rows.length, pedido: ret.rows })
        .catch(err => pedido = err.stack)
    return pedido
}

//Post
const sql_insert =
    `insert into pedido (idcliente, data_pedido, total) values ($1, $2, $3)`

const postPedido = async (params) => {
    const { idcliente, data_pedido, total } = params
    await db.query(sql_insert, [idcliente, data_pedido, total])
}

//Delete
const sql_delete =
    `delete from pedido
      where idpedido = $1`

const deletePedido = async (params) => {
    const { id } = params
    await db.query(sql_delete, [id])
}

//Put
const sql_put =
    `update pedido
        set idcliente = $2,
            data_pedido = $3,
            total = $4
      where idpedido = $1`

const putPedido = async (params) => {
    const { idpedido, idcliente, data_pedido, total } = params
    return await db.query(sql_put, [idpedido, idcliente, data_pedido, total])
}

//Patch
const sql_patch = 
    `update pedido
        set `

const patchPedido = async (params) => {
    let fields = ''
    let binds = []
    binds.push(params.idpedido)
    let countParams = 1
    if (params.idcliente){
        countParams ++
        fields += ` idcliente = $${countParams} `
        binds.push(params.idcliente)
    }
    if (params.data_pedido){
        countParams ++ 
        fields += (fields?',':'') + ` data_pedido = $${countParams} `
        binds.push(params.data_pedido)
    }
    if (params.total){
        countParams ++
        fields += (fields?',':'') + ` total = $${countParams} `
        binds.push(params.total)
    }
    let sql = sql_patch + fields + ' where idpedido = $1 '
    return await db.query(sql, binds)
}

    
module.exports.getPedido = getPedido
module.exports.postPedido = postPedido  
module.exports.deletePedido = deletePedido 
module.exports.putPedido = putPedido 
module.exports.patchPedido = patchPedido 

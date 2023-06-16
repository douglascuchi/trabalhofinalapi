const db = require('../configs/pg')

//Get
const sql_get =
    `select idpedido,
            idcliente,
            data_pedido,
            total,
            status,
            forma_pagamento
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
    `insert into pedido (idcliente, data_pedido, total, status, forma_pagamento) values ($1, $2, $3, $4, $5)`

const postPedido = async (params) => {
    const { idcliente, data_pedido, total, status, forma_pagamento } = params
    await db.query(sql_insert, [idcliente, data_pedido, total, status, forma_pagamento])
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
            total = $4,
            status = $5,
            forma_pagamento = $6
      where idpedido = $1`

const putPedido = async (params) => {
    const { idpedido, idcliente, data_pedido, total, status, forma_pagamento } = params
    return await db.query(sql_put, [idpedido, idcliente, data_pedido, total, status, forma_pagamento])
}

//Patch
const sql_patch = 
    `update pedido
        set `

const patchPedido = async (params) => {
    let fields = ''
    let binds = []
    binds.push(params.id)
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
    if (params.status){
        countParams ++
        fields += (fields?',':'') + ` status = $${countParams} `
        binds.push(params.status)
    }
    if (params.forma_pagamento){
        countParams ++
        fields += (fields?',':'') + ` forma_pagamento = $${countParams} `
        binds.push(params.forma_pagamento)
    }
    let sql = sql_patch + fields + ' where idpedido = $1 '
    return await db.query(sql, binds)
}

    
module.exports.getPedido = getPedido
module.exports.postPedido = postPedido  
module.exports.deletePedido = deletePedido 
module.exports.putPedido = putPedido 
module.exports.patchPedido = patchPedido 

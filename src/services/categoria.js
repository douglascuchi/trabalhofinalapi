const db = require('../configs/pg')

//Get
const sql_get =
    `select idcategoria,
            nome,
            descricao
       from categoria`

const getCategoria = async () => {
    let categoria = {}
    await db.query(sql_get)
        .then(ret => categoria = { total: ret.rows.length, categoria: ret.rows })
        .catch(err => categoria = err.stack)
    return categoria
}

//Post
const sql_insert =
    `insert into categoria (nome, descricao) values ($1, $2)`

const postCategoria = async (params) => {
    const {nome, descricao } = params
    await db.query(sql_insert, [nome, descricao])
}

//Delete
const sql_delete =
    `delete from categoria
      where idcategoria = $1`

const deleteCategoria = async (params) => {
    const { id } = params
    await db.query(sql_delete, [id])
}

//Put
const sql_put =
    `update categoria
        set nome = $2,
            descricao = $3
      where idcategoria = $1`

const putCategoria = async (params) => {
    const { idcategoria, nome, descricao } = params
    return await db.query(sql_put, [idcategoria, nome, descricao])
}

//Patch
const sql_patch = 
    `update categoria
        set `

const patchCategoria = async (params) => {
    let fields = ''
    let binds = []
    binds.push(params.idcategoria)
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
    let sql = sql_patch + fields + ' where idcategoria = $1 '
    return await db.query(sql, binds)
}

module.exports.getCategoria = getCategoria
module.exports.postCategoria = postCategoria  
module.exports.deleteCategoria = deleteCategoria 
module.exports.putCategoria = putCategoria 
module.exports.patchCategoria = patchCategoria 

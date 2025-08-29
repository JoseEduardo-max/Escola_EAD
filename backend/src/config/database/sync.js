const connection = require ('./connection')

require('../../models/usuarioModel')


connection.sync({alter:true})
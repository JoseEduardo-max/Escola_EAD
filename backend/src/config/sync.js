const connection = require ('./database/connection')

require('../models/usuarioModel')


connection.sync({alter:true})
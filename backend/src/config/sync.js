const connection = require ('./database/connection')

require('../models/usuarioModel')
require('../models/aulaModel');


connection.sync({alter:true})
const connection = require ('./database/connection')

require('../models/usuarioModel')
require('../models/aulaModel');
require('../models/moduloModel');


connection.sync({alter:true})
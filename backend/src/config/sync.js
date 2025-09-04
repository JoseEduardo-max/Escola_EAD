const connection = require ('./database/connection')

require('../models/usuarioModel')
require('../models/aulaModel');
require('../models/moduloModel');
require('../models/certificadoModel');

connection.sync({alter:true})
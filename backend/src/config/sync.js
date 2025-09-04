const connection = require ('./database/connection')

require('../models/usuarioModel')
require('../models/aulaModel');
require('../models/moduloModel');
require('../models/certificadoModel');
require('../models/CursoModel')

connection.sync({alter:true})
const connection = require ('../config/database/connection')
const { DataTypes } = require('sequelize')

//commit

let UserModel = connection.define('usuarios', {
    nome: {
        type: DataTypes.STRING(50),
        allowNull: false
    }, 
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    senha: {
        type: DataTypes.STRING(300),
        allowNull: false
    },
    criado_em: { 
        type: DataTypes.DATE, 
        allowNull: false, 
        defaultValue: DataTypes.NOW 
    },
    categoria: { 
        type: DataTypes.STRING(50), 
        allowNull: false, 
        defaultValue: "aluno" // valor padrão
    }
}, {
    tableName: "usuarios",
    timestamps: false // <--- impede Sequelize de tentar usar createdAt/updatedAt
 
});

module.exports = UserModel;
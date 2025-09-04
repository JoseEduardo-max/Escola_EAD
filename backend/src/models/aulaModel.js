const connection = require('../config/database/connection');
const { DataTypes } = require('sequelize');

const AulaModel = connection.define('aulas', {
    titulo: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    video_url: {
        type: DataTypes.STRING(300),
        allowNull: false
    },
    modulo_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    ordem: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    duracao: {
        type: DataTypes.STRING(300),
        allowNull: true
    },
    criado_em: { 
        type: DataTypes.DATE, 
        allowNull: false, 
        defaultValue: DataTypes.NOW 
    }
}, {
    tableName: 'aulas',
    timestamps: false
});

module.exports = AulaModel;

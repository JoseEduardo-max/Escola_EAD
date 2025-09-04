const connection = require('../config/database/connection');
const { DataTypes } = require('sequelize');

const CertificadoModel = connection.define('certificados', {
    aluno_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    curso_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    data_emissao: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    codigo: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    }
}, {
    tableName: 'certificados',
    timestamps: false
});

module.exports = CertificadoModel;

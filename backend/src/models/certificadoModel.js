const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Certificado = sequelize.define("Certificado", {
  aluno_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  curso_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  emitido_em: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  codigo_certificado: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  tableName: "certificados", 
  timestamps: false,
});

module.exports = Certificado;

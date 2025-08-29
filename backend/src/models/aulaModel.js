const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Aula = sequelize.define("Aula", {
  modulo_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  video_url: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ordem: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  duracao: {
    type: DataTypes.STRING,
    allowNull: true,
  }
}, {
  tableName: "aulas", 
  timestamps: false,  
});

module.exports = Aula;

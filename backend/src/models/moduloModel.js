const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Modulo = sequelize.define("Modulo", {
  curso_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ordem: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  tableName: "modulos",
  timestamps: false,  
});

module.exports = Modulo;

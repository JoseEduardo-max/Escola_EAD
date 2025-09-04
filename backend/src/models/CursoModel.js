const connection = require ('../config/database/connection')
const { DataTypes } = require('sequelize')


const CursoModel = connection.define("cursos", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  titulo: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  imagem_capa: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  publico_alvo: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  categoria: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  
}, {
  tableName: "cursos",
  timestamps: true,          // Sequelize vai criar/usar createdAt e updatedAt
  createdAt: "criado_em",    // mapeia createdAt -> criado_em
  updatedAt: "atualizado_em" // mapeia updatedAt -> atualizado_em
});




module.exports = CursoModel;

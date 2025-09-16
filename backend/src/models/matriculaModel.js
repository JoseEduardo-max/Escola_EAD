const connection = require("../config/database/connection");
const { DataTypes } = require("sequelize");

const MatriculaModel = connection.define(
  "matriculas",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    aluno_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "alunos", key: "id" },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    curso_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "cursos", key: "id" },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    criado_em: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    tableName: "matriculas",
    timestamps: false,
  }
);

module.exports = MatriculaModel;


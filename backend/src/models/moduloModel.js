import connection from '../config/database/connection.js';
import { DataTypes } from 'sequelize';

const ModuloModel = connection.define('modulos', {
  curso_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  titulo: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  ordem: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  criado_em: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'modulos',
  timestamps: false,
});

export default ModuloModel;

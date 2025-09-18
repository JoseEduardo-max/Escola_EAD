import connection from '../config/database/connection.js';
import { DataTypes } from 'sequelize';

const CertificadoModel = connection.define('certificados', {
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
    defaultValue: DataTypes.NOW,
  },
  codigo_certificado: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
}, {
  tableName: 'certificados',
  timestamps: false,
});

export default CertificadoModel;

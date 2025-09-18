// server.js
import express from 'express';
import dotenv from 'dotenv';
import connection from './config/database/connection.js';

// AdminJS
import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import AdminJSSequelize from '@adminjs/sequelize';

dotenv.config();

// Registrar adapter do Sequelize
AdminJS.registerAdapter(AdminJSSequelize);

const app = express();
app.use(express.json());

// ===========================
// ROTAS EXISTENTES
// ===========================
import Users from './routes/usuariosRoute.js';
import Aulas from './routes/aulaRoute.js';
import Modulos from './routes/moduloRoute.js';
import Certificados from './routes/certificadoRoute.js';
import Cursos from './routes/cursoRoutes.js';
import Matriculas from './routes/matriculasRoute.js';

app.use('/users', Users);
app.use('/aulas', Aulas);
app.use('/modulos', Modulos);
app.use('/certificados', Certificados);
app.use('/cursos', Cursos);
app.use('/matriculas', Matriculas);

// ===========================
// IMPORTAR TODOS OS MODELS
// ===========================
// Isso garante que o AdminJS reconheça as tabelas
import './models/usuarioModel.js';
import './models/cursoModel.js';
import './models/moduloModel.js';
import './models/aulaModel.js';
import './models/matriculaModel.js';
import './models/certificadoModel.js';

// ===========================
// CONFIGURAR ADMINJS
// ===========================
const adminJs = new AdminJS({
  databases: [connection], // Sequelize já tem todos os models registrados
  rootPath: '/admin',
});

const adminRouter = AdminJSExpress.buildRouter(adminJs);
app.use(adminJs.options.rootPath, adminRouter);

// ===========================
// SUBIR SERVIDOR
// ===========================
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`);
  console.log(`AdminJS disponível em http://localhost:${PORT}/admin`);
});

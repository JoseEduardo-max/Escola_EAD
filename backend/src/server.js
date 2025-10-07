import express from 'express';
import dotenv from 'dotenv';
import connection from './config/database/connection.js';

import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import AdminJSSequelize from '@adminjs/sequelize';

dotenv.config();

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
import './models/usuarioModel.js';
import './models/cursoModel.js';
import './models/moduloModel.js';
import './models/aulaModel.js';
import './models/MatriculaModel.js';
import './models/certificadoModel.js';

// ===========================
// CONFIGURAR ADMINJS
// ===========================
const adminJs = new AdminJS({
  databases: [connection], 
  rootPath: '/admin',
});

const adminRouter = AdminJSExpress.buildRouter(adminJs);
app.use(adminJs.options.rootPath, adminRouter);

// ===========================
// CONFIGURAR SWAGGER
// ===========================
import swaggerUi from 'swagger-ui-express';
import fs from 'fs';
import yaml from 'yaml';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Caminho absoluto para o arquivo openapi.yaml
const openapiPath = path.join(__dirname, '../docs/openapi.yaml');

// Lê e converte o YAML em objeto JS
const file = fs.readFileSync(openapiPath, 'utf8');
const swaggerDocument = yaml.parse(file);

// Rota da documentação
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

console.log(`📄 Swagger disponível em http://localhost:${process.env.PORT || 3000}/api-docs`);


// ===========================
// SUBIR SERVIDOR
// ===========================
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`);
  console.log(`AdminJS disponível em http://localhost:${PORT}/admin`);
});

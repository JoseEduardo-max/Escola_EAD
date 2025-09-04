const express = require('express');
const app = express();
app.use(express.json());


const Users = require('./routes/usuariosRoute');
app.use('/Users', Users);


const Aulas = require('./routes/aulaRoute');
app.use('/aulas', Aulas);

const Modulos = require('./routes/moduloRoute');
app.use('/modulos', Modulos);


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`O servidor está rodando na porta ${PORT}`);
});

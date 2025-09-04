const express = require('express');
const app = express();
app.use(express.json());

// rota de usuários
const Users = require('./routes/usuariosRoute');
app.use('/Users', Users);

// rota de aulas
const Aulas = require('./routes/aulaRoute');
app.use('/aulas', Aulas);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`O servidor está rodando na porta ${PORT}`);
});

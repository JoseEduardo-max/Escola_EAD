const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Rota de teste
app.get('/apiteste', (req, res) => {
  res.send('API da Escola de Cursos Online está rodando! 🎓');


});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

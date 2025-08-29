const express = require('express');
const cors = require('cors');
require('dotenv').config();
const aulaRoutes = require("./routes/aulaRoutes");
const sequelize = require("./config/db"); 

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/apiteste', (req, res) => {
  res.send('API da Escola de Cursos Online está rodando! 🎓');
});

app.use(aulaRoutes);

sequelize.authenticate()
  .then(() => {
    console.log("✅ Conexão com o banco estabelecida via Sequelize!");
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch(err => {
    console.error("❌ Erro ao conectar no banco:", err);
  });

const express = require('express')
const app = express()
app.use(express.json())



const Users = require('../src/routes/usuariosRoute');
app.use('/Users', Users);



const PORT = 3000
app.listen(PORT, () => {
    console.log(`O servidor está rodando na porta ${PORT}`)
})

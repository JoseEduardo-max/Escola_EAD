const mysql2 = require('mysql2/promise');

require('dotenv').config();

async function executar(sql) {
    let conexao = await mysql2.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    });

    let [results] = await conexao.query(sql);

    return results;
}

module.exports = {executar};
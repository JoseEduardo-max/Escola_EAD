// src/config/database/connection.js
import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config();

const connection = new Sequelize({
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  dialect: "mysql"
});

export default connection;

/* eslint-disable no-undef */
import { Sequelize } from "sequelize";
import { config } from "dotenv";
// import path from 'path';
import mysql2 from 'mysql2'; // Import mysql2 as ES module

config();

const db = new Sequelize({
    username: 'root',
    password: process.env.DB_PASS,
    database:process.env.DB_NAME,
    port:process.env.DB_PORT,
    dialect: 'mysql',
    dialectModule: mysql2, // Use mysql2 as the dialect module

});


try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
}
  

export default db;
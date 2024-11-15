import express from 'express';
import db from './config/dbConfig.js';

const app = express();
const PORT = 5000;



db;




app.listen(PORT,()=>{
    console.log(`running on port ${PORT}`);
});
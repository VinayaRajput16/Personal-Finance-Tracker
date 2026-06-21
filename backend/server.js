import express from 'express';
import dotenv from 'dotenv';
import app from './src/app.js';
import db from './src/config/db.js';

dotenv.config();

const port = process.env.PORT;

db();

app.listen(port, ()=>{
    console.log(`The server is listning on ${port}`);
})

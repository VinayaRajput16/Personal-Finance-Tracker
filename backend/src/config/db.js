import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const db = async ()=>{
    try{
        await mongoose.connect(process.env.DB_URI);
        const conn = mongoose.connection;
        console.log(`MongoDB connected: ${conn.host}`);
    }catch(error){
        console.log('Error connecting to database', error);
    }
}

export default db;
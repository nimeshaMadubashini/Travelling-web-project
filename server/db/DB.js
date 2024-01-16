const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config();
const MONGODB_URL=process.env.MANGODB_URL;
const db=async () =>{
    try {
        const connect =await mongoose.connect(MONGODB_URL);
        console.info(`Mongo DB Connected to: ${connect.connection.host}`)
    }catch (error){
        console.error("Mongo DB connect Error",error)
    }
}
module.exports=db;
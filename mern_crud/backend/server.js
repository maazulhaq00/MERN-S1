// imports
// const express = require("express");
import express from 'express';
import dotenv from 'dotenv';
import connectToDb from './config/connectToDb.js';
import productRouter from './routers/productRouter.js';


dotenv.config()


// create express app
const app = express();
app.use(express.json())

connectToDb();

app.use('/products', productRouter)

// start app / server
app.listen(process.env.PORT, ()=>{
    console.log(`Server running at http://localhost:${process.env.PORT}`);
})


/*

npm init --y
npm install express
npm run dev
npm install dotenv

*/
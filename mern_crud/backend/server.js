// imports
// const express = require("express");
import express from 'express';
import dotenv from 'dotenv';
import connectToDb from './config/connectToDb.js';
import Product from './modals/product.js'

dotenv.config()


// create express app
const app = express();
app.use(express.json())

connectToDb();

// API TO CREATE PRODUCT
app.post("/products", async (req, res)=>{

    // let pname = req.body.name;
    // let pprice = req.body.pprice;
    // let pdesc = req.body.pdesc;

    let {pname, pprice, pdesc} = req.body;

    const product = await Product.create({
        pname,
        pprice,
        pdesc
    })

    res.json({product})
})

// API TO GET ALL PRODUCTS
app.get("/products", async (req, res)=> {

    const products = await Product.find();

    res.json({products})
})

// API TO GET PRODUCT BY ID
app.get("/products/:pid", async (req, res)=> {

    const pid = req.params.pid;

    const product = await Product.findById(pid);

    res.json({product})
})


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
// require('dotenv').config({path: './env'})

import dotenv from "dotenv";
import connectDB from './db/index.js';
import express from "express";

dotenv.config({path: './env'});

const app = express();

const port = process.env.PORT || 8000;

connectDB()
.then( () => {
    app.listen(port, () => {
        console.log(`Server is running at port ${port}`);
    })
})
.catch( (err) => {
    console.log("MongoDB connection failed !!! ", err);
})





/*
import express from "express";
const app = express();

( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        
        app.on("error", (error) => {
            console.log("Error: ", error);
            throw error;            
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("Error: ", error);
        throw error;
    }
} )()

*/
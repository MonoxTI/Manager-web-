require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const host = 'localhost';
const port = 8000;

app.use(express.json());

mongoose.connect(process.env.URL);

const db = mongoose.connction;
db.on('error', (err)=> console.error("MonogDB error",err));

const schema = monogodb.schema({
    PropertyName: {
        type: String,
        required: true
    },
    Location: {
        type: String,
        required: true
    },
    Rent: {
        type: Number,
        required: true
    },
    Rates: {
         type: Number,
        
    },
    levy: {
        type: Number,
        required: true
    },
    Type: {
        type: String,
        required: true
    }
})
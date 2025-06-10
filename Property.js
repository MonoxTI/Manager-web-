require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const host = 'localhost';
const port = 8000;

app.use(express.json());

mongoose.connect(process.env.URL);

const db = mongoose.connction;
db.
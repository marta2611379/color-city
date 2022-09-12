var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose');

// import express from 'express';
// import cors from 'cors';
// import bodyParser from 'body-parser';
// import mongoose from 'mongoose';
const app = express();
const router = require('./src/common/api.js')

app.use(cors());
app.use(bodyParser.json());


app.use('/', router);

mongoose.connect('mongodb+srv://marta2611379:19988991mM@cluster0.tfhuw1n.mongodb.net/?retryWrites=true&w=majority')
const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});

app.listen(4000, () => console.log(`Express server running on port 4000`));



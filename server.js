const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const PORT = 8000;
require('dotenv').config();

let db,
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'expenses';

MongoClient.connect(dbConnectionStr, {useUnifiedTopology: true})
    .then(client =>{
        console.log(`Connected to ${dbName} Database...`);
        db = client.db(dbName);
    })


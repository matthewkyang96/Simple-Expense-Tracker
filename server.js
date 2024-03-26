const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const PORT = 8000;
require('dotenv').config();

let db,
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'expense';
    dbCollectionName = 'expenses'

MongoClient.connect(dbConnectionStr, {useUnifiedTopology: true})
    .then(client =>{
        console.log(`Connected to ${dbName} Database...`);
        db = client.db(dbName);
    })

app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', async(req, res)=>{
    const expenseItems = await db.collection(dbCollectionName).find().toArray();
    const runningTotal = expenseItems.reduce((accum,curr) => accum += Number(curr.amount), 0);
    res.render('index.ejs', {documents: expenseItems, runningTotal: runningTotal})
});

app.post('/addExpense', (req, res) => {
    const transactionAmount = req.body.transactionAmount;
    const transactionDate = req.body.transactionDate;
    const transactionCategory = req.body.transactionCategory;
    const transactionDescription = req.body.transactionDescription;
    db.collection(dbCollectionName).insertOne({
        amount: transactionAmount,
        date: transactionDate,
        category: transactionCategory,
        description: transactionDescription
    })
    .then(result =>{
        console.log('Expense Added');
        res.redirect('/');
    })
    .catch(err => console.log(err));
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log((`Server Running on Port ${PORT}...`));
})
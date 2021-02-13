const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors');
const url = 'mongodb://localhost/AlienDBex';

const app = express();

mongoose.connect(url, {useNewUrlParser:true, useUnifiedTopology: true});
const con = mongoose.connection;

con.on('open', () => {
    console.log('connected...');
})

app.use(express.json());
app.use(cors());

const alienRouter = require('./routes/aliens');
app.use('/api/aliens', alienRouter);

app.listen(9000, () => {
    console.log('Server started');
})
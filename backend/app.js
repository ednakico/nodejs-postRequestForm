const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors');
const url = 'mongodb://localhost/userDB';

const app = express();

mongoose.connect(url, {useNewUrlParser:true, useUnifiedTopology: true});
const con = mongoose.connection;

con.on('open', () => {
    console.log('connected...');
})

app.use(express.json());
app.use(cors());

const userRouter = require('./routes/users');
app.use('/api/users', userRouter);

app.listen(9000, () => {
    console.log('Server started');
})
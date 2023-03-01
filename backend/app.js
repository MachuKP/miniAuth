const express = require('express');
const dotenv = require('dotenv').config();
// need  when send body
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { errorHandler } = require('./middleware/errorMiddleware')
// const session = require('express-session');

const authRoute = require('./routes/user');

const port = process.env.PORT || 3000
const mongoUri = process.env.MONGODB_URI

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api/user', authRoute)

app.use(errorHandler)

mongoose
    .connect(mongoUri)
    .then(result => {
        app.listen(port, () => {
            console.log('serve is running on port' + port)
        })
    })
    .catch(err => {
        console.log(err)
    })


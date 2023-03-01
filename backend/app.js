const express = require('express');
const dotenv = require('dotenv').config();
// need  when send body
const bodyParser = require('body-parser');
const connectDB = require('./config/connectDB')
const { errorHandler } = require('./middleware/errorMiddleware')

const authRoute = require('./routes/user');

const port = process.env.PORT || 3000

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api/user', authRoute)

app.use(errorHandler)

connectDB();

app.listen(port, () => {
    console.log('serve is running on port ' + port)
})

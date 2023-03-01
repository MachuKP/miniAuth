const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        const connect = mongoose.connect(process.env.MONGO_URI)
        console.log("connected mongo db")
    } catch (err) {
        console.log(err)
    }
}

module.exports = connectDB;
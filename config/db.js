const mongoose = require('mongoose')
const config = require('config');
const db = config.get('MONGODB_URI');
require('./default.json')

const connectDB = async() => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true
        })
        console.log('MongoDB Connected...')
    } catch (err) {
        console.error(err.message);
        process.exit(1);
        // Exit process with failure
    }
}

module.exports = connectDB
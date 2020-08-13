const mongoose = require('mongoose')
const config = require('config');
const db = config.get('mongoURI');
require('./default.json')

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || db, {
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
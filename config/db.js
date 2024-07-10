const mongoose = require('mongoose')

const ConnectDB = async() => {
    try {
        const URL = process.env.MongoLink
        await mongoose.connect(URL)
        console.log('Database is connected')
    } catch (error) {
        console.log(error)
    }
}

module.exports = ConnectDB;
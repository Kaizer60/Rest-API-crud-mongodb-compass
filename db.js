const mongoose = require('mongoose')
const dbUri = 'mongodb://myDB:1234@localhost:27017/?authMechanism=DEFAULT'

mongoose.set('strictQuery', false)

module.exports = () => {
    return mongoose.connect(dbUri,
        { useNewUrlParser: true, useUnifiedTopology: true})
}
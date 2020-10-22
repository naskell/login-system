const mongoose = require('mongoose')
//const Book = require('./book')
// MongoDB or NoSQL
const userSchema = new mongoose.Schema({
    userName: {
      type: String,
      required: true
    },
    hashedPassword: {
        type: String,
        required: true
    }
  })

module.exports = mongoose.model('User', advertiserSchema) // name of the table in the database
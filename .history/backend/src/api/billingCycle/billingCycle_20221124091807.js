const restful = require('node-restful')
const mongoose = restful.mongoose

const creditSchema = new mongoose.Schema({
    name:{type: String, required: true},
    value: {type: Number, min: 0, required: true}
})

const debSchema = new mongoose.Schema({
    name: {type: String, required: true}
})




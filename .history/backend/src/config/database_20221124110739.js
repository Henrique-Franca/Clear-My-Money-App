const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/mymoney')


mongoose.Error.menssages = "O atributo {PATH} é obrigatório."
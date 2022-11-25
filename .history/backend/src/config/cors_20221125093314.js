module.exports = (req, res, next) =>{
    res.header('Access-Control-Allow-Origing', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATH, DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, X_Requested-With, Content-Type, Accept')
    next()
}
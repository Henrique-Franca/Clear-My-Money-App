const express = require('express')

 module.exports = function(server){

    //Definir a URL base para todas as rotas
    const router = express.Router()
    server.use('/api', router)

    //Rotas de Ciclo de pagamento 
    const BillingCycle = require('../api/billingCycles/billingCycleService')
    BillingCycle.register(router, 'billingCycles')
 }

//  const express = require('express')

// module.exports = function(server) {

//     // Definir URL base para todas as rotas 
//     const router = express.Router()
//     server.use('/api', router)

//     // Rotas de Ciclo de Pagamento 
//     const BillingCycle = require('../api/billingCycle/billingCycleService')
//     BillingCycle.register(router, '/billingCycles')
// }
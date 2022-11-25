const BillingCycle = require('./billingCycle')

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({new: true, runValidators: true})

BillingCycle.route('count', (req, res, next)=>{
    BillingCycle.count((error, value) =>{
        if(error){
            res.status(500).json({errors: [error]})
        }else {
            res.json({value})
        }
    })
})

BillingCycle.route('summary', (req, res, next)=>{
    res.send('ok')
})

module.exports = BillingCycle  
const billingCycle = require('./billingCycle')
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
    billingCycle.aggregate({
        $project:{credit: {$sum: "$credits.value"}, debt:{$sum: "$debts.value"}}
    },{
        $grup: {_id:null, credit: {$sum: "$credit"}, debt:{$sum: "$debt"}}
    },{
        $project: {_id: 0, credit: 1, debt: 1}
    },(error,result)=>{
        if(error){
            res.status(500).json({errors:[error]})
        }else {
            res.json
        }
    })
})

module.exports = BillingCycle  
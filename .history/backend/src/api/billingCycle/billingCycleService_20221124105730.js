const BillingCycle = require('./billingCycle')

BillingCycle.method(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({new: true, runValidators: true})

module.exports = BillingCycle  
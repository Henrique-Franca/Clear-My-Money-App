import React from "react";
import {Router,Route,Redirect,hashHistory} from 'react-router'

import Dashboard from "../dashboard/dashboard";
import BillingCycle from "../billingCycle/billingCycle";


export default props=>(
    <Router history={hashHistory}>
        <Route path='/' component={Dashboard}/> 
        <Route path='/billingCiclyes' component={BiilingCiclye}/>
        <Redirect from='*' to='/'
    </Router>
)





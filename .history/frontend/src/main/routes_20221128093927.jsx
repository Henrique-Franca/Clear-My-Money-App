import React from "react";
import {Router,Route,Redirect,hashHistory, IndexRoute} from 'react-router'

import Dashboard from "../dashboard/dashboard";
import BillingCycle from "../billingCycle/billingCycle";
import App from "./app";


export default props=>(
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Dashboard}/>
            <Route path='/billingCiclyes' component={BillingCycle}/>
        </Route> 
        <Redirect from='*' to='/'/>
    </Router>
)





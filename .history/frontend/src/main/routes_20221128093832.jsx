import React from "react";
import {Router,Route,Redirect,hashHistory, IndexRoute} from 'react-router'

import Dashboard from "../dashboard/dashboard";
import BillingCycle from "../billingCycle/billingCycle";
import App from "./app";


export default props=>(
    <Router history={hashHistory}>
        <Route path='/' component={Dashboard}>


        </Route>

        <Route path='/billingCiclyes' component={BillingCycle}/>
        <Redirect from='*' to='/'/>
    </Router>
)





import React from "react";
import {Router,Route,Redirect,hashHistory} from 'react-router'

import Dashboard from "../dashboard/dashboard";
import BillingCycle from "../billingCycle/billingCycle";
import dashboard from "../dashboard/dashboard";


export default props=>(
    <Router history={hashHistory}>
        <Route path='/' component={dashboard}
    </Router>
)





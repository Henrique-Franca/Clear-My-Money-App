import React from "react";
import ReactDOM  from "react-dom";
import {createStore} from 'redux'
import {Provider} from 'redux'

import Routes from './main/routes'
import Reducers from './main/reducers'

ReactDOM.render(
    <Routes />
, document.getElementById('app'))




import React from "react";
import ReactDOM  from "react-dom";
import {applyMiddleware,createStore} from 'redux'
import {Provider} from 'react-redux'

import promise from 'redux-promise'

import Routes from './main/routes'
import Reducers from './main/reducers'

const store = applyMiddleware(promise)(createStore)(Reducers)
ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>
    
, document.getElementById('app'))




import React from "react";
import ReactDOM  from "react-dom";
import {applyMiddleware,createStore} from 'redux'
import {Provider} from 'react-redux'

import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import Routes from './main/routes' 
import Reducers from './main/reducers'

const devTools = window.__REDUX_DEVTOOLS_EXTENCION__ 
        &&  window.__REDUX_DEVTOOLS_EXTENCION__()
const store = applyMiddleware(multi,thunk,promise)(createStore)(Reducers, devTools)
ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>
    
, document.getElementById('app'))




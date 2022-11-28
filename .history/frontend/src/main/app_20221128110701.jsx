//import '../common/template/dependencies'
import React from 'react'

 import Header from '../common/template/header'
 import sideBar from '../common/template/sideBar'
// import Footer from '../common/template/footer'

export default props => (
    <div className='wrapper'>
        <Header />
        <sideBar />
        <div className='content-wrapper'> 
            {props.children}
        </div>
        
    </div>
)

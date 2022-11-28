//import '../common/template/dependencies.js'
import React from 'react'

 import Header from '../common/template/header'
 import SideBar from '../common/template/sideBar.jsx'
// import Footer from '../common/template/footer'

export default props => (
    <div className='wrapper'>
        <Header />
        <SideBar />
        <div className='content-wrapper'> 
            {props.children}
        </div>
        
    </div>
)

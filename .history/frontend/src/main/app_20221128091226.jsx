import '../common/tamplate/denpendencies'
import React from "react";

import Header from '../common/tamplate/header';
import SideBar from '../common/tamplate/sidebar';
import Footer from '../common/tamplate/footer';

export default props=>(
    <div className="wrapper">
        <Header/>
        <SideBar/>
        <div className="content-wrapper">
            <h1>Conteudo</h1>
        </div>
        <Footer/>
    </div>
)


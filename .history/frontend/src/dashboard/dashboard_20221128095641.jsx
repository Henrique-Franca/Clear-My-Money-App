import React, {Component} from "react";

import ContentHeader from "../common/tamplate/contentHeader";
import Content from "../common/tamplate/content";

class Dashboard extends Component{
    render(){
        return(
            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0'/>
                <Content>
                    Dashboard
                </Content>
            </div>
        )
    }

}



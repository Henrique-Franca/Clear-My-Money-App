import React, {Component} from "react";

import ContentHeader from "../common/template/contentHeader";
import Content from "../common/template/content";
import ValueBox from "../common/widget/valueBox";

class Dashboard extends Component{
    render(){
        return(
            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0'/>
                <Content>
                    <ValueBox cols='12 4' color='green' icon='bank'
                        value='R$ 10' text='Total  de Créditos'/>
                    <ValueBox cols='12 4' color='red' icon='credtit-card'
                        value='R$ 10' text='Total de Débitos'/>
                </Content>
            </div>
        )
    }

}

export default Dashboard


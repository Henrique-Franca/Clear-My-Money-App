import React, {Component} from "react";

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from "../common/tab/tabs";
import TabsHeader from "../common/tab/tabsHeader";
import TabsContent from "../common/tab/tabsContent";
import TabHearder from "../common/tab/tabHeader";


class BillingCycle extends Component{

    render(){
        return(
            <div>

                <ContentHeader title='Ciclos de Pagamentos' small='Cadastro' />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHearder label='Listar' icon='bars' target='tabList'/>
                            <TabHearder label='Incluir' icon='plus' target='tabCreate'/>
                            <TabHearder label='Alterar' icon='pencil' target='tabUpdate'/>
                            <TabHearder label='Excluir' icon='trash-o' target='tabDelete'/>

                        </TabsHeader>
                        <TabsContent>
                            
                        </TabsContent>
                    </Tabs>
                </Content>

            </div>
        )
    }


}

export default BillingCycle






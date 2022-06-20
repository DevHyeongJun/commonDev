import React, { Component } from 'react';

import HeaderComponent from "../../component/layout/header/HeaderComponent.jsx";
import ListView from "../../component/common/list/ListView.jsx";
import {RequestAPI} from "../../api/requsetApI.js";

export default class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            list : [
                {html : <> test </>},
                {html : <> test </>},
                {html : <> test </>},
                {html : <> test </>}
            ]
        }
        RequestAPI.getLayerList();
    }
    
    
    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState) {
    }

    state = {
      
    }

    render() {
   
        return (
            <div>
                <div className="top">
                    <HeaderComponent />
                </div>
                <div className="middle">
                    <ListView list={this.state.list}/>
                    <div>test</div>
                </div>
            </div>
        )
    }
}

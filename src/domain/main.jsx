import React,{ Component } from 'react';

import HeaderComponent from "../component/layout/header/HeaderComponent.jsx";
import LayerRoute from "./layerRoute.jsx";
import TestPage from "./test.jsx";

export default class Main extends Component {

    constructor(props) {
        super(props);
    }
    

    render() {
        return (
            <div class="wrap">
                
                <div className="top">
                    <HeaderComponent />
                </div>
                <div className="middle">
                    {/* <div className="side">
                    test
                    </div> */}
                    <div className="main">
                        <div className={'main_tit'}><h1>프로젝트 Helper - 레이어 등록</h1></div>
                        <LayerRoute />
                    </div>
                </div>
            </div>
        )
    }
}

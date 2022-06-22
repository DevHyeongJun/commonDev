import React,{ Component } from 'react';

import HeaderComponent from "../component/layout/header/HeaderComponent.jsx";
import LayerRoute from "./layerRoute.jsx";

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
                    <LayerRoute />
                </div>
            </div>
        )
    }
}

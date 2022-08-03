import React,{ Component } from 'react';

import HeaderComponent from "../component/layout/header/HeaderComponent.jsx";
import LayerRoute from "./layerRoute.jsx";
import { action } from "../redux/actions/index";
import { connect } from "react-redux";

class Main extends Component {

    constructor(props) {
        super(props);
    }

    gnbMenu = [
        {
            name : "프로젝트",
            path : 'project'
        },
        {
            name : "개발",
            path : 'develop'
        }
    ];

    state = {
        page : this.gnbMenu[0].path
    }
   

    handlerGnbChange = (path) => {
        
        action.modPage(path);
    };
    
    render() {
        return (
            <div class="wrap">
                
                <div className="top">
                    <HeaderComponent active={this.state.page} gnbMenu={this.gnbMenu} onClick={this.handlerGnbChange}/>
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

const mapStateToProps = state => {
    return { 
      page: state.articles
    };
  };

const List = connect(mapStateToProps)(Main);

export default Main;
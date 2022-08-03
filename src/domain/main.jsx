import React,{ Component } from 'react';
import { connect } from 'react-redux';

import HeaderComponent from "../component/layout/header/HeaderComponent.jsx";
import LayerRoute from "./layerRoute.jsx";
import { pageActions } from "../redux/reducers/pageSlice";
import { store } from "../redux/store/index"


class Main extends Component {

    constructor(props) {
        super(props);

        this.gnbMenu = [
            {
                name : "프로젝트",
                path : 'project'
            },
            {
                name : "개발",
                path : 'develop'
            }
        ];
    }

    handlerGnbChange = (path) => {
        store.dispatch(pageActions.setPage(path));
    };
    
    render() {
        
        const {userId} = store.getState();
console.log(store.getState())
        return (
            <div class="wrap">
                <div className="top">
                    <HeaderComponent pageName={userId} gnbMenu={this.gnbMenu} onClick={this.handlerGnbChange}/>
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

function mapStateToProps(state) {
    return { page: state.page }
}

export default connect(mapStateToProps)(Main);
import React, { Component } from 'react';

import HeaderComponent from "../../component/layout/header/HeaderComponent.jsx";
import ListView from "../../component/common/list/ListView.jsx";
import {RequestAPI} from "../../api/requsetApI.js";

export default class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            list : []
        }
    }
    
    createListItem = (obj) => {
        console.log(1);
        const {ischk, lyrnm, srid, tblnm, tblschema, type } = obj;

        return (
            <div style={{display:'flex', height:'40px', lineHeight:'40px'}}>
                <div style={{flex:1}}><input type="checkbox" /></div>
                <div style={{flex:3}}><span>{tblnm}</span></div>
                <div style={{flex:4}}>
                    <input type="text" value={lyrnm} style={{width:'90%'}}/>
                    <button onClick={this.handleLayerAdd.bind(obj)}>저장</button>
                </div>
            </div>
        )
    }

    handleLayerAdd = (ee, obj) => {
        console.log(obj, ee);
    }

    componentDidMount() {
        RequestAPI.getLayerList({}, (res)=>{
            const { resultCode, result } = res;
            let list = [];
                
            if ( resultCode === 0 ) {
                
                result.map((obj) => {
                    list.push({html : this.createListItem(obj)});
                });

            } else {
                console.log('error');
            }

            this.setState({list});

        });
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
                </div>
            </div>
        )
    }
}

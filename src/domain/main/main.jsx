import React, { Component } from 'react';

import HeaderComponent from "../../component/layout/header/HeaderComponent.jsx";
import ListView from "../../component/common/list/ListView.jsx";
import {RequestAPI} from "../../api/requsetApI.js";

export default class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            list : [],
            dburl : '10.1.73.14:5432/xeus-gangwon-hwandonghae-v2',
            dbid : 'postgres',
            dbpw: 'geomex12#',
            isDbconn: false
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
        // RequestAPI.getLayerList({}, (res)=>{
        //     const { resultCode, result } = res;
        //     let list = [];
                
        //     if ( resultCode === 0 ) {
                
        //         result.map((obj) => {
        //             list.push({html : this.createListItem(obj)});
        //         });

        //     } else {
        //         console.log('error');
        //     }

        //     this.setState({list});

        // });
    }
    handlerDbconn = () => {
        const { dburl, dbid, dbpw} = this.state;

        RequestAPI.initDbConn({dburl, dbid, dbpw}, (result) => {
            console.log(result != null && result.resultCode == 0);
            this.setState({isDbconn: result != null && result.resultCode == 0 });
        });
    }

    handlerGetList = () => {
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
   
    render() {
        const {dburl, dbid, dbpw, isDbconn, list } = this.state;
        return (
            <div>
                <div className="top">
                    <HeaderComponent />
                </div>
                <div className="middle">
                    <div className="dbconn">
                        <span>
                            <label>URL</label>
                            <input type="text" onChange={(e)=> {  this.setState({dburl: e.target.value })}} placeholder='127.0.0.1:5432/xeus_db' value={dburl}/>
                        </span>
                        <span>
                            <label>id</label>
                            <input type="text" onChange={(e)=> {  this.setState({dbid: e.target.value })}} placeholder='postgres'/>
                        </span>
                        <span>
                            <label>passward</label>
                            <input type="text" onChange={(e)=> {  this.setState({dbpw: e.target.value })}} placeholder='postgres'/>
                        </span>
                        <button onClick={this.handlerDbconn}> 연결 </button>
                    </div>
                    <div>
                        <p>DB 정보 : {`${dburl} ${dbid} ${dbpw}`}</p>
                        {
                            (isDbconn ?
                            <><button onClick={this.handlerGetList}>목록 조회</button></>
                            :
                            <></>)
                        }
                   
                    </div>
                    {
                        (isDbconn && list.length > 0 ? 
                            <ListView list={this.state.list}/>
                            :
                            ( isDbconn ? 
                                <></>
                                :
                                <div className="empty">
                                    DB 연결을 해주셔야 합니다.
                                </div>
                            )
                         
                        )
                    }
                </div>
            </div>
        )
    }
}

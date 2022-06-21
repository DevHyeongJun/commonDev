import React, { Component } from 'react';

import HeaderComponent from "../../component/layout/header/HeaderComponent.jsx";
import ListView from "../../component/common/list/ListView.jsx";
import {RequestAPI} from "../../api/requsetApI.js";

export default class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            list : [],//112.217.147.140:5410
            dburl : '112.217.147.140:5410/xeus-gangwon-hwandonghae-v2',
            dbid : 'postgres',
            dbpw: 'geomex12#',
            isDbconn: false
        }
    }
    
    createListItem = (obj) => {
        console.log(1);
        const {ischk, lyrnm, srid, tblnm, tblschema, type } = obj;

        return (
            <div key={tblnm} style={{display:'flex', height:'40px', lineHeight:'40px'}}>
                <div style={{flex:1}}><input type="checkbox" /></div>
                <div style={{flex:4}}><span>{tblnm}</span></div>
                <div style={{flex:5}}>
                    <input type="text" value={lyrnm} style={{width:'50%'}}/>
                    <button onClick={this.handleLayerAdd.bind(this, obj)}>저장</button>
                </div>
            </div>
        )
    }

    getInitLayerList = () => {
        RequestAPI.getLayerList({}, (res)=>{
            const { resultCode, result } = res;
            let list = [];
                
            if ( resultCode === 0 ) {
                
                result.map((obj) => {
                    console.log('2');
                    list.push({html : this.createListItem(obj)});
                });

            } else {
                console.log('error');
            }
            console.log(list);
            this.setState({list});

        });
    }

    /**
 * DB 연결 버튼 핸들러
 *  - 수정 필요함 pool 관리
 */
    handlerDbconn = () => {
        const { dburl, dbid, dbpw} = this.state;

        RequestAPI.initDbConn({dburl, dbid, dbpw}, (result) => {
            console.log(result != null && result.resultCode == 0);
            this.setState({isDbconn: result != null && result.resultCode == 0 });
        });
    }


    /**
     * 레이어 리스트 조회 핸들러
     */
    handlerGetList = () => {
        this.getInitLayerList();
    }

    handleLayerAdd = (obj, e) => {

        RequestAPI.addLayer(obj, (res)=>{

            const { resultCode, result } = res;
                
            if ( resultCode === 0 ) {
                //레이어 갱신...!
                this.getInitLayerList();

            } else {
                console.log('error');
            }
        });
        /**  ischk: false
             lyrnm: null
            srid: 5186
            tblnm: "asset_cctv_install"
            tblschema: "xeus"
            type: "POINT"*/ 
        
  
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
                            <input type="text" onChange={(e)=> {  this.setState({dbid: e.target.value })}} placeholder='postgres' value={dbid}/>
                        </span>
                        <span>
                            <label>passward</label>
                            <input type="text" onChange={(e)=> {  this.setState({dbpw: e.target.value })}} placeholder='postgres' value={dbpw}/>
                        </span>
                        <button onClick={this.handlerDbconn}> 연결 </button>
                    </div>

                    <div>
                        <p>
                            DB 정보 : {`${dburl} ${dbid} ${dbpw}`}
                            {
                                (isDbconn ? 
                                    <span style={{display:'inline-block', width:'20px', height:'20px', borderRadius:'50%', background:'blue'}}></span>
                                    :
                                    <span style={{display:'inline-block', width:'20px', height:'20px', borderRadius:'50%', background:'red'}}></span>
                                )
                            }
                        </p>
                        
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

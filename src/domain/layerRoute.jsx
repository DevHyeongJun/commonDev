import React,{ Component } from 'react';

import HeaderComponent from "../component/layout/header/HeaderComponent.jsx";
import ListView from "../component/common/list/ListView.jsx";
import {HjButton} from "../component/common/HjComponent.js";
import {RequestAPI} from "../api/requsetApI.js";

export default class LayerRoute extends Component {

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
        const {ischk, lyrnm, srid, tblnm, tblschema, type, mgrseq } = obj;
        let lyrNmValue = lyrnm;
        return (
            
            <div style={{display:'flex', height:'40px', lineHeight:'40px'}}>
               
                <div style={{width:'200px'}}><span>{tblnm}</span></div>
                <div>
                    <input type="text" id={`lyr_add_${mgrseq}`} name={mgrseq} defaultValue={lyrNmValue} style={{width:'90%'}}/>
                </div>
                <div>
                    {
                        (ischk ?
                            <>
                                <HjButton onClick={this.handleLayerMod.bind(this, obj)}>수정</HjButton>
                                <HjButton onClick={this.handleLayerRemove.bind(this, obj)}>삭제</HjButton>
                            </>
                            :
                            <HjButton onClick={this.handleLayerAdd.bind(this, obj)}>저장</HjButton>
                        )
                    }
                </div>
            </div>
        )
    }

    initLayerList = () => {
        
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

    handleLayerRemove = (obj, e) => {

        RequestAPI.removeLayer(obj, (res)=>{
            const { resultCode, result } = res;
            
            if ( resultCode === 0 ) {
                alert('삭제 되었습니다.');
            } else {
                console.log('error');
            }

            this.initLayerList();

        });
    }

    handleLayerMod = (obj, e) => {

        obj.lyrnm = document.getElementById(`lyr_add_${obj.mgrseq}`).value;
        
        RequestAPI.modLayer(obj, (res)=>{
            const { resultCode, result } = res;
            
            if ( resultCode === 0 ) {
                alert('수정 되었습니다.');
            } else {
                console.log('error');
            }

            this.initLayerList();

        });
    }

    handleLayerAdd = (obj, e) => {

        obj.lyrnm = document.getElementById(`lyr_add_${obj.mgrseq}`).value;

        RequestAPI.addLayer(obj, (res)=>{
            const { resultCode, result } = res;
            
            if ( resultCode === 0 ) {
                alert('등록 되었습니다. GIS 서버에 갱신은 수동으로 부탁드립니다.');
            } else {
                console.log('error');
            }

            this.initLayerList();

        });
    }

    handlerDbconn = () => {
        const { dburl, dbid, dbpw} = this.state;

        RequestAPI.initDbConn({dburl, dbid, dbpw}, (result) => {
            console.log(result != null && result.resultCode == 0);
            this.setState({isDbconn: result != null && result.resultCode == 0 });
        });
    }

    handlerGetList = () => {
        this.initLayerList();
    }

    render() {
        const {dburl, dbid, dbpw, isDbconn, list } = this.state;
        return (
            <>
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
                    <HjButton onClick={this.handlerDbconn}> 연결 </HjButton>
                    <div>
                        <p>DB 정보 : {`${dburl} ${dbid} ${dbpw}`}</p>
                        {
                            (isDbconn ?
                            <><HjButton onClick={this.handlerGetList}>목록 조회</HjButton></>
                            :
                            <></>)
                        }
                
                    </div>
                </div>
                {
                    (isDbconn && list.length > 0 ? 
                        <ListView width="800px" list={this.state.list}/>
                        :
                        ( isDbconn ? 
                            <></>
                            :
                            <div>
                                
                            </div>
                            // <div className="empty">
                            //     DB 연결을 해주셔야 합니다.
                            // </div>
                        )
                        
                    )
                }
            </> 
        )
    }
}

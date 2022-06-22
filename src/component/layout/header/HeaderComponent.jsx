import React, { Component } from 'react';

/**
 *  ROUTE 를 사용해야함.
 */
 export default class HeaderComponent extends Component {

    constructor(props) {
        super(props);
    }
    
    gnbMenu = [
        {
            name : "레이어 등록",
            path : 'layer'
        },
        {
            name : "GIS REST 요청",
            path : 'gisrest'
        }
    ];
    
    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState) {
    }

    state = {
      
    }

    render() {
        const {gnbMenu} = this;
      
        return (
            <div className="header">
                {
                    gnbMenu.map((item, i)=>
                       <button style={this.buttonStyle} key={i}>{item.name}</button>
                    )
                }
            </div>
        )
    }
}

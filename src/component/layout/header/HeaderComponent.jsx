import React, { Component } from 'react';

/**
 * 리스트뷰 아이템 컴포넌트
 */
 export default class HeaderComponent extends Component {

    constructor(props) {
        super(props);
    }
    
    gnbMenu = [
        {
            name : "레이어 등록",
            page : ""
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

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
            name : "프로젝트 Helper",
            path : 'project'
        },
        {
            name : "개발 Helper",
            path : 'develop'
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
                <span className="gnb_tit">HJ Toy Project</span>
                <span>
                {
                    gnbMenu.map((item, i)=>
                       <button className={i == 0 ? 'active' : ''} style={this.buttonStyle} key={i}>{item.name}</button>
                    )
                }
                </span>
         
            </div>
        )
    }
}

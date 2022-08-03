import React, { Component } from 'react';

/**
 *  헤더 영역
 */
export default class HeaderComponent extends Component {

    constructor(props) {
        super(props);
    }
    
    defaultProps = {
        gnbMenu : [
            {
                name : "프로젝트",
                path : 'project'
            },
        ],
        onClick : () => {}
    }

    render() {

        return (
            <div className="header">
                <span className="gnb_tit">HJ Toy Project</span>
                <span>
                {
                    this.props.gnbMenu.map((item, i)=>
                       <button className={item.path === this.props.pageName ? 'active' : ''} style={this.buttonStyle} key={i} onClick={this.props.onClick.bind(this, item.path)}>{item.name}</button>
                    )
                }
                </span>
            </div>
        )
    }
}

import React, { Component } from 'react';
import { action } from "../../../redux/actions/index";
import { connect } from "react-redux";

/**
 *  ROUTE 를 사용해야함.
 */
class _HeaderComponent extends Component {

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

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState) {
    }


    render() {

        const pageName = action.getPage();
        return (
            <div className="header">
                <span className="gnb_tit">HJ Toy Project</span>
                <span>
                {
                    this.props.gnbMenu.map((item, i)=>
                       <button className={item.path === pageName ? 'active' : ''} style={this.buttonStyle} key={i} onClick={this.props.onClick.bind(this, item.path)}>{item.name}</button>
                    )
                }
                </span>
         
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { 
      page: state.page
    };
  };

const HeaderComponent = connect(mapStateToProps)(_HeaderComponent);

export default HeaderComponent;
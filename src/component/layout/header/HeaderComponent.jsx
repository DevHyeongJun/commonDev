import React, { Component } from 'react';
import { store } from "../../../redux/store/index";
import { pageActions } from "../../../redux/reducers/pageSlice";
import { connect } from 'react-redux';

/**
 *  ROUTE 를 사용해야함.
 */
class HeaderComponent extends Component {

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

        const {page} = store.getState().page;
        return (
            <div className="header">
                <span className="gnb_tit">HJ Toy Project</span>
                <span>
                {
                    this.props.gnbMenu.map((item, i)=>
                       <button className={item.path === page ? 'active' : ''} style={this.buttonStyle} key={i} onClick={this.props.onClick.bind(this, item.path)}>{item.name}</button>
                    )
                }
                </span>
         
            </div>
        )
    }
}

function mapStateToProps(state) {
  return { page: state.page }
}
//이걸 꼭 써줘야 하는걸까?
export default connect(mapStateToProps)(HeaderComponent);
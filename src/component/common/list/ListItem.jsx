import React, { Component } from 'react';

/**
 * 리스트뷰 아이템 컴포넌트
 */
 export default class ListItem extends Component {

    constructor(props) {
        super(props);
    }

    defaultProps = {
        html : <></>
    }
    
    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState) {
        
    }

    state = {
      
    }

    render() {
        const {children} = this.props;
      
        return (
            <div className="">
                { children }
            </div>
        )
    }
}

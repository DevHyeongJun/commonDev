import React, { Component } from 'react';

/**
 * 공통 버튼
 */
 export default class HjButton extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {children} = this.props;
      
        return (
            <span>
                <button className='hj_btn' {...this.props}>{ children }</button>
            </span>
        )
    }
}

import React, { Component } from 'react';

import ListItem from './ListItem';

export default class ListView extends Component {

    constructor(props) {
        super(props);
    }
    
    defaultProps = {
        list : [] //리스트 표출용 내부 알아서~ 
    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState) {
    }

    state = {
      
    }

    render() {
        const {list} = this.props;
      
        return (
            <div>
                {
                    list.map((item, i)=>
                       <ListItem key={i}>{item.html}</ListItem>
                    )
                }
            </div>
        )
    }
}

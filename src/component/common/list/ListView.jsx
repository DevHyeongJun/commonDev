import React, { Component } from 'react';

import ListItem from './ListItem';

export default class ListView extends Component {

    constructor(props) {
        super(props);
        this.defaultProps = {
            list : [] //리스트 표출용 내부 알아서~ 
            , width: '100%'
           
        }

        this.listDivStyle = {
            width: this.props.width
            , margin: '0 auto'
        }
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
                <div style={this.listDivStyle}>
                {
                    list.map((item, i)=>
                       <ListItem key={i}>{item.html}</ListItem>
                    )
                }
                </div>
            </div>
        )
    }
}

import React,{ Component } from 'react';

export default class TestPage extends Component {

    constructor(props) {
        super(props);

    }
    
    render() {
      
        return (
            <>
                <div className="testTable">
                    <table>
                        <thead>
                            <tr>
                                <th>날짜</th>
                                <th>시간</th>
                                <th>수치</th>
                                <th>지수</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>06/27</td>
                                <td>오전</td>
                                <td>0.56~0.99</td>
                                <td><button>좋음</button></td>
                            </tr>
                            <tr>
                                <td>06/27</td>
                                <td>오전</td>
                                <td>0.56~0.99</td>
                                <td><button>좋음</button></td>
                            </tr>
                            <tr>
                                <td>06/27</td>
                                <td>오전</td>
                                <td>0.56~0.99</td>
                                <td><button>좋음</button></td>
                            </tr>
                            <tr>
                                <td>06/27</td>
                                <td>오전</td>
                                <td>0.56~0.99</td>
                                <td><button>좋음</button></td>
                            </tr>
                            <tr>
                                <td>06/27</td>
                                <td>오전</td>
                                <td>0.56~0.99</td>
                                <td><button>좋음</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </> 
        )
    }
}

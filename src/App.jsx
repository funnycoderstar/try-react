import React, { Component } from 'react';
// import List from './components/List';

// import List1 from './components/List1';
// import List2 from './components/List2';
import List3 from './components/List3';

import Welcome from './components/Welcome';
import Goodbye from './components/Goodbye';
import Child from './components/Child';

// App can't be stateless component
// const list = [
//     {
//         text: '题目一',
//     },
//     {
//         text: '题目二',
//     },
// ];
export default class App extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            isShowList3: false,
        };
    }
    showConponent = () => {
        this.setState({
            isShowList3: true,
        });
    }
    hideConponent = () => {
        this.setState({
            isShowList3: false,
        });
    }
    render() {
        return (
            <div>
                {/* <List
                    list={list}
                /> */}
                {/* <List1 />
                <List2 /> */}
                <Welcome />
                <Goodbye />
                <Child name="Sara" />
                <button onClick={this.showConponent}>显示Lists组件</button>
                {
                    this.state.isShowList3 ?
                        <List3 hideConponent={this.hideConponent} />
                    :
                    null
                }

            </div>
        );
    }
}

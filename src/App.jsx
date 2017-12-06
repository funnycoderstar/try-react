import React, { Component } from 'react';
// import List from './components/List';

// import List1 from './components/List1';
// import List2 from './components/List2';

import Welcome from './components/Welcome';
import Goodbye from './components/Goodbye';

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
            </div>
        );
    }
}

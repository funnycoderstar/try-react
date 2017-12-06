import React, { Component } from 'react';

export default (WrappedComponent) => {
    class NewComponent extends Component {
        constructor() {
            super();
            this.state = {
                username: 'funnycoderstar',
            };
        }
        render() {
            return <WrappedComponent username={this.state.username} />;
        }
    }
    return NewComponent;
};

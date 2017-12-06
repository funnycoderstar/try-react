import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapWithUsername from './wrapWithUsername';

class Goodbye extends Component {
    static propTypes = {
        username: PropTypes.string,
    }
    render() {
        return (
            <div>
                goodbye <span style={{ color: 'blue' }}>{this.props.username}</span>
            </div>
        );
    }
}
Goodbye = wrapWithUsername(Goodbye); // eslint-disable-line
export default Goodbye;

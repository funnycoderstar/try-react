import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wrapWithUsername from './wrapWithUsername';

class Welcome extends Component {
    static propTypes = {
        username: PropTypes.string,
    }
    render() {
        return (
            <div>
                welcome <span style={{ color: 'red' }}>{this.props.username}</span>
            </div>
        );
    }
}
Welcome = wrapWithUsername(Welcome); // eslint-disable-line
export default Welcome;

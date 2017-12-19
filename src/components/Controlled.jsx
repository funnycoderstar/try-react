import React, { Component } from 'react';

class Controlled extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            name: 'xingxing',
            age: 18,
        };
    }
    handleChange = (name, e) => {
        const { value } = e.target;
        this.setState({
            [name]: value,
        });
    }
    render() {
        const { name, age } = this.state;
        return (
            <div>
                <input type="text" value={name} onChange={this.handleChange.bind(this, 'name')} />
                <input type="text" value={age} onChange={e => this.handleChange('age', e)} />
            </div>
        );
    }
}

export default Controlled;

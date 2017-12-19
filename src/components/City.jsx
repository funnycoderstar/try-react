import React, { Component } from 'react';

import city from '../util/city';


class City extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            json: city.cityData,
            index: {
                provinceIndex: -1,
                cityIndex: -1,
            },
            city: '',
            county: '',
        };
    }
    provinceOption = () => this.state.json.map((array, index) => (<option key={index} data-index={index}>{array.name}</option>))
    cityOption = () => {
        if (this.state.index.provinceIndex === -1) {
            return false;
        }
        return this.state.json[this.state.index.provinceIndex].city.map((array, index) => (<option key={index} data-index={index}>{array.name}</option>));
    }
    countyOption = () => {
        if (this.state.index.cityIndex === -1) {
            return false;
        }
        return this.state.json[this.state.index.provinceIndex].city[this.state.index.cityIndex].area.map((array, index) => (<option key={index} data-index={index}>{array}</option>));
    }
    provinceChange = (event) => {
        const e = event.target;
        this.state.index.provinceIndex = e.options[e.selectedIndex].getAttribute('data-index');
        this.state.index.cityIndex = -1;
        this.setState({
            city: this.cityOption(),
            county: this.countyOption(),
        });
        this.refs.city.value = '-1';
        this.refs.county.value = '-1';
    }
    cityChange = (event) => {
        const e = event.target;
        this.state.index.cityIndex = e.options[e.selectedIndex].getAttribute('data-index');
        this.setState({
            county: this.countyOption(),
        });
        this.refs.county.value = '-1';
    }
    render() {
        const style = {
            margin: '0 3px',
            padding: '2px 6px',
            fontSize: '14px',
        };
        return (
            <span>
                <select name={this.props.provinceName ? this.props.provinceName : 'province'} style={style} onChange={this.provinceChange}>
                    <option key="-1" value="-1" data-index="-1">省份</option>
                    {this.provinceOption()}
                </select>
                <select name={this.props.cityName ? this.props.cityName : 'city'} style={style} onChange={this.cityChange} ref="city">
                    <option key="-1" value="-1" data-index="-1">地级市</option>
                    {this.state.city}
                </select>
                <select name={this.props.countyName ? this.props.countyName : 'county'} style={style} ref="county">
                    <option key="-1" value="-1" data-index="-1">市、县级市</option>
                    {this.state.county}
                </select>
            </span>
        );
    }
}

export default City;

/**
 * author: Jeffrey Lanters
 * App Component imports and exports important
 * components and services of the app. First
 * entry point for components.
 */

import React, { Component } from 'react';
import { ApiService } from '../services/APIService';
import { UserService } from '../services/UserService';

module.exports.UserService = new UserService();

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Jeffrey"
        };
        module.exports.AppInstance = this;
    }
    componentDidMount() {
        console.log("App component did mount!");
    }
    onChangeName () {
        var name = prompt("New name?");
        if (name != null) {
            this.setState({
                name: name
            });
        }
    }
    render() {
        return ( 
            <div className="app">
                <p>Hello <b>{this.state.name}</b>!</p>
                <button onClick={this.onChangeName.bind(this)}>
                    Change name
                </button>
            </div>
        )
    }
}
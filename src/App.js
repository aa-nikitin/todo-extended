import React, { Component } from 'react';
import './App.css';
import Lists from './containers/lists';
import ToDo from './containers/todo';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Lists />
                <ToDo />
            </div>
        );
    }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Lists from './containers/lists';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Lists />
            </div>
        );
    }
}

export default App;

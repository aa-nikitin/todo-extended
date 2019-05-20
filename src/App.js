import React, { Component } from 'react';
import './App.css';
import Lists from './containers/lists';
import ToDo from './containers/todo';
import EditList from './containers/editList';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Lists />
                <ToDo />
                <EditList />
            </div>
        );
    }
}

export default App;

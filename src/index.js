import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store.js';
import { Provider } from 'react-redux';
import { DragDropContextProvider } from 'react-dnd';
import TouchBackend from 'react-dnd-touch-backend';

ReactDOM.render(
    <Provider store={store}>
        <DragDropContextProvider
            backend={TouchBackend({ enableMouseEvents: true })}
        >
            <App />
        </DragDropContextProvider>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

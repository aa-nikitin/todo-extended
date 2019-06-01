import { Component } from 'react';
import ReactDOM from 'react-dom';

import './style.css';

class ModalLists extends Component {
    el = document.createElement('div');

    componentDidMount() {
        if (this.props.children) {
            document.body.appendChild(this.el);
            this.el.id = 'modal-lists';
        }
    }
    componentWillUnmount() {
        document.body.removeChild(this.el);
    }
    render() {
        return ReactDOM.createPortal(this.props.children, this.el);
    }
}

export default ModalLists;

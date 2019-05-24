import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import EditListForm from '../edit-list-form';
import './style.css';

class ModalListForm extends Component {
    static propTypes = {
        list: PropTypes.shape({
            name: PropTypes.string,
            img: PropTypes.string,
            descr: PropTypes.string
        }),
        activeListForEdit: PropTypes.func,
        editListAction: PropTypes.func,
        idList: PropTypes.number
    };
    static defaultProps = {
        list: { name: '', img: '', descr: '' },
        activeListForEdit: () => {},
        editListAction: () => {},
        idList: 0
    };
    state = {
        nameList: this.props.list.name,
        imgList: this.props.list.img,
        descrList: this.props.list.descr
    };
    el = document.createElement('div');
    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    };
    componentDidMount() {
        document.body.appendChild(this.el);
        this.el.id = 'pop-up';
    }
    componentWillUnmount() {
        document.body.removeChild(this.el);
    }
    render() {
        const { activeListForEdit, editListAction, idList } = this.props;
        return ReactDOM.createPortal(
            <EditListForm
                activeListForEdit={activeListForEdit}
                editListAction={editListAction}
                onChange={this.handleChange}
                paramsList={{
                    name: this.state.nameList,
                    img: this.state.imgList,
                    descr: this.state.descrList
                }}
                idList={idList}
            />,
            this.el
        );
    }
}

export default ModalListForm;

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { activeListForEdit } from '../../actions';
import './style.css';

class Modal extends Component {
    el = document.createElement('div');

    componentDidMount() {
        if (this.props.children) {
            document.body.appendChild(this.el);
            this.el.id = 'pop-up';
        }
    }
    componentWillUnmount() {
        document.body.removeChild(this.el);
    }
    render() {
        return ReactDOM.createPortal(this.props.children, this.el);
    }
}

const editList = ({ editList, activeListForEdit }) => {
    console.log(editList);
    return editList ? (
        <Modal>
            {editList ? (
                <div className="edit-list">
                    <input
                        className="edit-list__field"
                        placeholder="Имя списка"
                        // onChange={onChange}
                        // value={listName}
                        // onKeyPress={addList}
                    />
                    <input
                        className="edit-list__field"
                        placeholder="Путь к картинке"
                        // onChange={onChange}
                        // value={listName}
                        // onKeyPress={addList}
                    />
                    <textarea
                        className="edit-list__descr"
                        placeholder="Описание"
                    />
                    <div className="edit-list__buttons">
                        <button className="button edit-list__button">
                            Сохранить
                        </button>
                        <button
                            className="button edit-list__button"
                            onClick={() => activeListForEdit(0)}
                        >
                            Закрыть
                        </button>
                    </div>
                </div>
            ) : (
                ''
            )}
        </Modal>
    ) : (
        ''
    );
};

const mapStateToProps = ({ editList }) => ({
    editList
});

export default connect(
    mapStateToProps,
    { activeListForEdit }
)(editList);

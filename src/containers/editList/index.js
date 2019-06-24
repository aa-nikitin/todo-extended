import React, { Component } from 'react';
import { connect } from 'react-redux';
import { activeListForEdit, editList } from '../../actions';
import ModalListForm from '../../components/modal-list-form';
import './style.css';

class EditList extends Component {
    activeList = () => {
        const { editList, lists } = this.props;
        const activeList = [...lists].filter(
            element => element.id === editList
        );
        return activeList[0];
    };
    render() {
        const { editList, activeListForEdit, editListAction } = this.props;
        return editList ? (
            <ModalListForm
                activeListForEdit={activeListForEdit}
                editListAction={editListAction}
                list={this.activeList()}
                idList={editList}
            />
        ) : (
            ''
        );
    }
}

export { EditList };

const mapStateToProps = ({ lists, editList }) => ({
    lists,
    editList
});

export default connect(
    mapStateToProps,
    { activeListForEdit, editListAction: editList }
)(EditList);

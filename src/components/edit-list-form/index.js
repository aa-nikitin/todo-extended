import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const EditListForm = ({
    activeListForEdit,
    editListAction,
    onChange,
    paramsList,
    idList
}) => {
    const { name, img, descr } = paramsList;
    return (
        <div className="edit-list">
            <input
                className="edit-list__field"
                placeholder="Имя списка"
                value={name}
                onChange={onChange}
                name="nameList"
            />
            <input
                className="edit-list__field"
                placeholder="Путь к картинке"
                onChange={onChange}
                name="imgList"
                value={img}
            />
            <textarea
                className="edit-list__descr"
                placeholder="Описание"
                onChange={onChange}
                name="descrList"
                value={descr}
            />
            <div className="edit-list__buttons">
                <button
                    onClick={() => {
                        editListAction(idList, paramsList);
                        activeListForEdit(0);
                    }}
                    className="button edit-list__button"
                >
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
    );
};
EditListForm.propTypes = {
    activeListForEdit: PropTypes.func,
    editListAction: PropTypes.func,
    onChange: PropTypes.func,
    paramsList: PropTypes.shape({
        name: PropTypes.string,
        img: PropTypes.string,
        descr: PropTypes.string
    }),
    idList: PropTypes.number
};

EditListForm.defaultProps = {
    activeListForEdit: () => {},
    editListAction: () => {},
    onChange: () => {},
    paramsList: { name: '', img: '', descr: '' },
    idList: 0
};

export default EditListForm;

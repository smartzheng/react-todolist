import React, {Fragment} from 'react';
import {connect} from 'react-redux'
import './TodoList.css'
import TodoItem from "./TodoItem";
import {addTodoItemAction, deleteTodoItemAction, getChangeInputAction} from "./store/actionCreator";

const TodoList = (props) => {

    const {inputValue, list, handleInputChange, handleSubmit, handleItemDelete} = props;

    return (
        <Fragment>
            <label htmlFor={'insertArea'}>输入内容</label>
            <input
                className={'input'}
                value={inputValue}
                onChange={handleInputChange}/>
            <button
                className={'submit'}
                onClick={handleSubmit}>
                提交
            </button>
            <ul>
                {list.map((item, index) => {
                    return getTodoItem(item, index)
                })}
            </ul>
        </Fragment>
    );

    function getTodoItem(item, index) {
        return <TodoItem
            content={item}
            index={index}
            deleteItem={handleItemDelete}
            key={index}/>;
    }
};

const mapStateToProps = (state) => ({
    inputValue: state.inputValue,
    list: state.list
});

const mapDispatchToProps = (dispatch) => ({
    handleInputChange: (e) => {
        dispatch(getChangeInputAction(e.target.value));
    },
    handleSubmit: () => {
        dispatch(addTodoItemAction());
    },
    handleItemDelete: (index) => {
        dispatch(deleteTodoItemAction(index));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

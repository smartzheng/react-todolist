import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import './TodoList.css'
import TodoItem from "./TodoItem";
import {
    addTodoItemAction,
    deleteTodoItemAction,
    getChangeInputAction,
    getTodoListAction
} from "./store/actionCreator";

class TodoList extends Component {
    state = {
        list: [],
        inputValue: ''
    };

    componentDidMount() {
        this.props.getTotoList()
    };

    render() {
        const {inputValue, list, handleInputChange, handleSubmit, handleItemDelete} = this.props;
        console.log('render');
        return <Fragment>
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
                    return <TodoItem
                        content={item}
                        index={index}
                        deleteItem={handleItemDelete}
                        key={index}/>;
                })}
            </ul>
        </Fragment>
    };
};

const mapStateToProps = (state) => {
    return ({
        inputValue: state.inputValue,
        list: state.list
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        handleInputChange: (e) => {
            dispatch(getChangeInputAction(e.target.value));
        },
        handleSubmit: () => {
            dispatch(addTodoItemAction());
        },
        handleItemDelete: (index) => {
            dispatch(deleteTodoItemAction(index));
        },
        getTotoList: () => {
            dispatch(getTodoListAction());
        }
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

import React, {Component, Fragment} from 'react';
import './App.css'
import TodoItem from "./TodoItem";
import store from "./store";
import {addTodoItemAction, deleteTodoItemAction, getChangeInputAction} from "./store/actionCreator";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.input = React.createRef();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        store.subscribe(this.handleStoreChange);
    }

    render() {
        return (
            <Fragment>
                <label htmlFor={'insertArea'}>输入内容</label>
                <input
                    className={'input'}
                    ref={this.input}
                    value={this.state.inputValue}
                    onChange={this.handleInputChange}/>
                <button
                    className={'submit'}
                    onClick={this.handleSubmit}>
                    提交
                </button>
                <ul>
                    {this.state.list.map((item, index) => {
                        return this.getTodoItem(item, index)
                    })}
                </ul>
            </Fragment>
        )
    };

    getTodoItem(item, index) {
        return <TodoItem
            content={item}
            index={index}
            deleteItem={this.handleItemDelete}
            key={index}/>;
    }

    handleInputChange() {
        store.dispatch(getChangeInputAction(this.input.current.value));
    };

    handleStoreChange() {
        this.setState(store.getState());
    };

    handleSubmit() {
        store.dispatch(addTodoItemAction());
    };

    handleItemDelete(index) {
        store.dispatch(deleteTodoItemAction(index));
    }
}

export default App;

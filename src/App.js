import React, {Component, Fragment} from 'react';
import './App.css'

import TodoItem from "./TodoItem";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        };
        this.input = React.createRef();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
                <TodoItem content={'test'}/>
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
        const value = this.input.current.value;
        this.setState(() => ({
            inputValue: value
        }))
    };

    handleSubmit() {
        if (this.state.inputValue) {
            this.setState((prevState) => ({
                list: [...prevState.list, prevState.inputValue],
                inputValue: ''
            }))
        } else {
            alert("请输入内容")
        }
    };

    handleItemDelete(index) {
        this.setState((prevState) => {
            const list = [...prevState.list];
            list.splice(index, 1);
            return {list}
        })
    }
}

export default App;

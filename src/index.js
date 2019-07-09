import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import TodoList from './TodoList';
import reducer from "./store/reducer";

const store = createStore(reducer);
render(
    <Provider store={store}>
        <TodoList/>
    </Provider>,
    document.getElementById('root')
);

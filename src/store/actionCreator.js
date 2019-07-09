import {
    ADD_TODO_ITEM,
    ADD_TODO_LIST,
    CHANGE_INPUT_VALUE,
    DELETE_TODO_ITEM,
    GET_TODO_LIST
} from "./actionTypes";

export function getChangeInputAction(value) {
    return {
        type: CHANGE_INPUT_VALUE,
        value
    };
};

export function deleteTodoItemAction(index) {
    return {
        type: DELETE_TODO_ITEM,
        index
    };
};

export function addTodoItemAction() {
    return {
        type: ADD_TODO_ITEM,
    };
};

export function getTodoListAction() {
    return {
        type: GET_TODO_LIST,
    };
};

export function addTodoListAction(list) {
    return {
        type: ADD_TODO_LIST,
        list
    };
};
import {ADD_TODO_ITEM, CHANGE_INPUT_VALUE, DELETE_TODO_ITEM} from "./actionTypes";

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
import {put, takeEvery} from 'redux-saga/effects'
import {GET_TODO_LIST} from "./actionTypes";
import {addTodoListAction} from "./actionCreator";
import axios from "axios";

function* initTodoList() {
    try {
        const res = yield axios.get('http://mock-api.com/2vzMjvgG.mock/api/todolist');
        yield put(addTodoListAction(res.data.list));
    } catch (e) {
        console.log('网络请求失败');
        //alert('网络请求失败');
    }
}

function* sagas() {
    yield takeEvery(GET_TODO_LIST, initTodoList);
}

export default sagas;
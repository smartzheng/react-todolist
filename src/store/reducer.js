import {ADD_TODO_ITEM, CHANGE_INPUT_VALUE, DELETE_TODO_ITEM} from "./actionTypes";

const defaultState = {
    inputValue: '',
    list: []
};
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_INPUT_VALUE: {
            const newState = JSON.parse(JSON.stringify(state));
            newState.inputValue = action.value;
            return newState;
        }
        case ADD_TODO_ITEM: {
            if (state.inputValue) {
                const newState = JSON.parse(JSON.stringify(state));
                newState.list.push(newState.inputValue);
                newState.inputValue = '';
                return newState;
            } else {
                alert("请输入内容");
                break;
            }
        }
        case DELETE_TODO_ITEM: {
            const newState = JSON.parse(JSON.stringify(state));
            newState.list.splice(action.index, 1);
            return newState;
        }

        default : {
            return state
        }
    }
};
export default reducer;
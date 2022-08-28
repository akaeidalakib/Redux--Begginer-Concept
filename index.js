
const { createStore } = require("redux");

const INCREMENT = "INCREMENT";
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";
const DECREMENT = "DECREMENT";
const RESET = "RESET";
const ADD_USER = "ADD_USER";

const initialState = {
    users: ["akib"],
    count: 1,
};

const incrementAction = () => {
    return {
        type: INCREMENT,
    };
};

const decrementAction = () => {
    return {
        type: DECREMENT,
    };
};

const resetAction = () => {
    return {
        type: RESET,
    };
};
const addUserAction = (user) => {
    return {
        type: ADD_USER,
        payload: user,
    };
};
const incrementActionByValue = (value) => {
    return {
        type: INCREMENT_BY_VALUE,
        payload: value,
    };
};

const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            };
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1,
            };
        case RESET:
            return {
                ...state,
                count: 0,
            };
        case ADD_USER:
            return {
                users: [...state.users, action.payload]
                ,
                count: state.count + 1,
            };
        case INCREMENT_BY_VALUE:
            return {
                ...state,
                count: state.count + action.payload,
            };

        default:
            state;
    }
}

const store = createStore(countReducer);
store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(addUserAction("zihad"))

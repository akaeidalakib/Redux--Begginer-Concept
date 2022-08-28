// api link https://jsonplaceholder.typicode.com/todos

const { default: axios } = require("axios");
const { createStore, applyMiddleware } = require("redux");
const thunk = require("redux-thunk").default

const GET_TODOS_REQUEST = "GET_TODOS_REQUEST";
const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
const GET_TODOS_FAILED = "GET_TODOS_FAILED";
const AXIOS_API = "https://jsonplaceholder.typicode.com/todos";
// state
const initialState = {
    todos: [],
    isloading: false,
    error: null,
}
// action
const getTodosRequest = () => {
    return {
        type: GET_TODOS_REQUEST,
    }
};
const getTodosFailed = (error) => {
    return {
        type: GET_TODOS_FAILED,
        payload: error,
    }
};
const getTodosSuccess = (todos) => {
    return {
        type: GET_TODOS_SUCCESS,
        payload: todos,
    }
};
//reducers
const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TODOS_REQUEST:

            return {
                ...state,
                isloading: true,
            };
        case GET_TODOS_SUCCESS:

            return {
                ...state,
                isloading: false,
                todos: action.payload
            };
        case GET_TODOS_FAILED:

            return {
                ...state,
                isloading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};

// api fetch action
const fetchData = () => {
    return (dispatch) => {
        dispatch(getTodosRequest());
        axios
            .get(AXIOS_API)
            .then((res) => {
                const todos = res.data
                const title = todos.map(todo => todo.title)
                dispatch(getTodosSuccess(title));
            })
            .catch((err) => {
                const errorMessage = err.message;
                dispatch(getTodosFailed(errorMessage));
            });
    };
};
//store

const store = createStore(todosReducer, applyMiddleware(thunk));

store.subscribe(() => {
    console.log(store.getState());

});

store.dispatch(fetchData());
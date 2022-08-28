const { createStore, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");
// producvariable
const ADD_PRODUCT = "ADD_PRODUCT";
const GET_PRODUCT = "GET_PRODUCT";


// product state
const initialProductState = {
    products: ["sugar", "salt"],
    numberOfPd: 2,
};

// product management
const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
};
const getProduct = () => {
    return {
        type: GET_PRODUCT,
    }
};

const productReducer = (state = initialProductState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:

            return {
                products: [...state.products, action.payload],
                numberOfPd: state.numberOfPd + 1,
            };
        case GET_PRODUCT:

            return {
                ...state,
            };

        default:
            return state;
    }
};


// create store
const store = createStore(productReducer, applyMiddleware(logger));
store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(addProduct("apple"));


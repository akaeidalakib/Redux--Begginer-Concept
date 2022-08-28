const { createStore, combineReducers } = require("redux");
// producvariable
const ADD_PRODUCT = "ADD_PRODUCT";
const GET_PRODUCT = "GET_PRODUCT";

// cart variable
const ADD_CART = "ADD_CART";
const GET_CART = "GET_CART";

// product state
const initialProductState = {
    products: ["sugar", "salt"],
    numberOfPd: 2,
};
const initialCartState = {
    cart: ["sugar"],
    numberOfPd: 1,
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
// cart management
const addCart = (product) => {
    return {
        type: ADD_CART,
        payload: product
    }
};
const getCart = () => {
    return {
        type: GET_CART,
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
//cart reducer
const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
        case ADD_CART:

            return {
                cart: [...state.cart, action.payload],
                numberOfPd: state.numberOfPd + 1,
            };
        case GET_CART:

            return {
                ...state,
            };

        default:
            return state;
    }
};
// manage multiple reducer
const rootReducer = combineReducers({
    pdR: productReducer,
    cartR: cartReducer,
});
// create store
const store = createStore(rootReducer);
store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(addProduct("apple"));
store.dispatch(addCart("apple"));

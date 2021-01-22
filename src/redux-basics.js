// import redux
const redux = require('redux');

// createStore is a function but I don't want to execute it yet
const createStore = redux.createStore;

// Reducer
// a reducer always retrieves two arguments: the state and the action
const rootReducer = (state, action) => {
    // this reducer just returns the old state
    return state;
}

// Store
// => a store must be initialized with a reducer
// => the reducer is the ONLY thing that is allowed to update the state
const store = createStore(rootReducer);

// log the current state
console.log(store.getState());

// Dispatching Action

// Subscription

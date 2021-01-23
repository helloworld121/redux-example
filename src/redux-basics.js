// import redux
const redux = require('redux');

// init the initial state, that will be used to init the store
const initialState = {
    counter: 0
};


// createStore is a function but I don't want to execute it yet
const createStore = redux.createStore;


// Reducer
// a reducer always retrieves two arguments: the state and the action
// to init the state with the default value
//   => we pass it using js (ES6) syntax to init state with a default value
const rootReducer = (state = initialState, action) => {
    // Attention STATE MUST be immutable

    if(action.type === 'INCREMENT_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1
        }
    } else if(action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value
        }
    }

    return state;
}


// Store
// => a store must be initialized with a reducer
// => the reducer is the ONLY thing that is allowed to update the state
const store = createStore(rootReducer);

// log the current state
console.log(store.getState());



// Subscription
// we want to get notified if something changed
// => a subscription gets triggered as soon as the state updates
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
})



// Dispatching Action
// dispatching an action requires an argument containing an object with the parameter 'type'
//   => 'type' identifies the action that will be executed
store.dispatch({type: 'INCREMENT_COUNTER'});

// it is also possible pass some payload
// => all other properties are free ONLY 'type' MUST exist
store.dispatch({type: 'ADD_COUNTER', value:10 });

console.log(store.getState());


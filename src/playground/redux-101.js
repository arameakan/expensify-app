import { createStore } from "redux";

// Action generator - function that returns action objects. Objects are creating in one place (action generators) and get called many times - store.dispatch("action generator")

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy
});

const setCount = ({ count } = {}) => ({
  type: "SET",
  count
});

const resetCount = () => ({
  type: "RESET"
});

// ---------------------------------
// End of Action Generators

// --------------------------------
// Reducers
// 1. Reducers are pure functions - same input/ same output
// 2. Never change state or action. Instead return new object that represetns new state

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy
      };
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy
      };
    case "SET":
      return {
        count: action.count
      };
    case "RESET":
      return {
        count: 0
      };
    default:
      return state;
  }
};

const store = createStore(countReducer);

// this store.subscribe() function gets called every time that store changes
store.subscribe(() => {
  console.log(store.getState());
});

// Action - object that gets sent to the store

// Increment the count
store.dispatch(incrementCount({ incrementBy: 5 }));

// this function doesn't show changes although the store (aka the state) changes
/*
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});
unsubscribe();
*/

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 101 }));

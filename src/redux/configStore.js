import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { fakeFB } from "./reducers/fakeFB";
import { phimReducer } from "./reducers/phimReducer";

const rootReducer = combineReducers({
    fakeFB,
    phimReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));
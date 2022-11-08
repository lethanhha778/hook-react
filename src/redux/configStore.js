import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { fakeFB } from "./reducers/fakeFB";
import { phimReducer } from "./reducers/phimReducer";
import { QLNDReducer } from "./reducers/qLNDReducer";

const rootReducer = combineReducers({
    fakeFB,
    phimReducer,
    QLNDReducer
   
})

export const store = createStore(rootReducer, applyMiddleware(thunk));
import {combineReducers, createStore} from "redux";
import chartsReducer from "./charts-reducer";


let reducers = combineReducers({
    chartsPage: chartsReducer,
});

let store = createStore(reducers);

window.store = store;


export default store;
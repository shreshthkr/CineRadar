import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { reducer as movieReducer } from "./Movie/reducer";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
    movieReducer
});


export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))



import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as movieReducer } from "./Movie/reducer";


const rootReducer = combineReducers({
    movieReducer
});


export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))



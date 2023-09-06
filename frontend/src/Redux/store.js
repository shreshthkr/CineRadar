import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { reducer as movieReducer } from "./Movie/reducer";
import {reducer as trendingTvreducer} from "./Tv Show/reducer";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
    movieReducer,
    trendingTvreducer
});


export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))



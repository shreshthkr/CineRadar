import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { reducer as movieReducer } from "./Movie/reducer";
import { popularReducer } from "./Movie/reducer";
import {reducer as trendingTvreducer} from "./Tv Show/reducer";
import { popularTvReducer } from "./Tv Show/reducer";
import { detailReducer,castReducer } from "./Movie/reducer";

import thunk from "redux-thunk";


const rootReducer = combineReducers({
    movieReducer,
    trendingTvreducer,
    popularReducer,
    popularTvReducer,
    detailReducer,
    castReducer,
});


export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))



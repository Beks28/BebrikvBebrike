import { combineReducers } from "redux";
import mainReducer from './reducers/mainReducer'
import searchReducer from './reducers/searchReducer'
import detailsReducer from "./reducers/detailsReducer";
import loaderReducer from "./reducers/loaderReducer";

const rootReducer = combineReducers({
    main: mainReducer,
    loader: loaderReducer,
    search: searchReducer,
    details: detailsReducer,
    
})
export default rootReducer

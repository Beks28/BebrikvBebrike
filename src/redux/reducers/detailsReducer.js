import { act } from "react-dom/test-utils";
import { SEARCH_DETAILS } from "../actions/types";

const initialState = {
    data: {}
}

const detailsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEARCH_DETAILS: 
            return {...state, data:action.payload}
        default:
            return state    
    }
}

export default detailsReducer
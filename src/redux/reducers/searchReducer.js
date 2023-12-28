import { SEARCH_COCKTAILS } from "../actions/types";

const initialState = {
    data: []
}

const searchReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch(type) {
        case SEARCH_COCKTAILS:
            return {...state, data:payload}
        default:
            return state    
    }
};

export default searchReducer;
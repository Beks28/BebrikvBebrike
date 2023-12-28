
import { LIST_COCKTAILS, LIST_CATEGORIES } from "../actions/types";

const initialState = {
  data: [],
  categories: [],
  category: "",
};

const mainReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch(type) {
    case LIST_COCKTAILS:
        return {...state, data: payload.data, category: payload.value}
    case LIST_CATEGORIES:
        return {...state, categories: payload.data}    
    default:
        return state    
  }
};

export default mainReducer;

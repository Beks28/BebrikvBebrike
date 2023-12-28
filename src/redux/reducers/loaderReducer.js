import { LOADING, FULLFILLED, ERROR } from "../actions/types";

const initialState = {
  isLoading: false,
  error: null,
};

const loaderReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOADING:
      console.log("check");
      return { ...state, isLoading: true, error: null };
    case FULLFILLED:
      return { ...state, isLoading: false, error: null };
    case ERROR:
      return { ...state, isLoading: false, error: payload };
    default:
      return state;
  }
};

export default loaderReducer;

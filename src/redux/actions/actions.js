import axios from "axios";
import {
  CATEGORIES_LIST,
  GET_COCKTAILS,
  GET_DETAILS_API,
  SEARCH_COCKTAILS_API,
} from "../../config";
import {
  LIST_CATEGORIES,
  LIST_COCKTAILS,
  SEARCH_COCKTAILS,
  SEARCH_DETAILS,
} from "./types";
import { LOADING_ACTION, FULLFILLED_ACTION, ERROR_ACTION } from "./actionCheck";

export const getCocktailsAsync = (value = "Ordinary_Drink") => {
  return async (dispatch) => {
    dispatch(LOADING_ACTION());
    try {
      const response = await axios.get(GET_COCKTAILS + value);
      console.log(response);
      dispatch(FULLFILLED_ACTION());
      dispatch({
        type: LIST_COCKTAILS,
        payload: {
          data: response.data.drinks,
          value,
        },
      });
    } catch (e) {
      dispatch(ERROR_ACTION(e.message));
    }
  };
};

export const getCategoriesAsync = () => {
  return async (dispatch) => {
    dispatch(LOADING_ACTION());
    try {
      const response = await axios.get(CATEGORIES_LIST);
      dispatch(FULLFILLED_ACTION());
      dispatch({
        type: LIST_CATEGORIES,
        payload: {
          data: response.data.drinks,
        },
      });
    } catch (e) {
      dispatch(ERROR_ACTION(e.message));
    }
  };
};

export const searchCocktailsAsync = (value = "") => {
  return async (dispatch) => {
    dispatch(LOADING_ACTION());
    try {
      const response = await axios.get(SEARCH_COCKTAILS_API + value);
      console.log(response);
      dispatch(FULLFILLED_ACTION());
      dispatch({
        type: SEARCH_COCKTAILS,
        payload: response.data.drinks,
      });
    } catch (e) {
      dispatch(ERROR_ACTION(e.message));
    }
  };
};

export const getDetailsAsync = (id) => {
  return async (dispatch) => {
    dispatch(LOADING_ACTION);
    dispatch(FULLFILLED_ACTION());
    try {
      const response = await axios.get(GET_DETAILS_API + id);
      console.log(response);
      dispatch({
        type: SEARCH_DETAILS,
        payload: response.data.drinks[0],
      });
    } catch (e) {
      dispatch(ERROR_ACTION(e.message));
    }
  };
};

import { CLEAR_STATE, ERROR, FULLFILLED, LOADING } from "./types";


///////////////////////////////////////

export const LOADING_ACTION = () => ({type: LOADING})

export const FULLFILLED_ACTION = () => ({type: FULLFILLED})

export const ERROR_ACTION = (error) => ({type: ERROR, payload: error})


export const CLEAR_STATE_ACTION = () => ({type: CLEAR_STATE})

//////////////////////////////////////////
import { SET_USER_NAME, SET_USER_AGE } from "../types/userTypes";

export const setUserName = (name) => ({ type: SET_USER_NAME, payload: name });
export const setUserAge = (age) => ({ type: SET_USER_AGE, payload: age });

import { SET_USER_NAME, SET_USER_AGE } from "../types/userTypes";
export const userReducer = (state = { name: 'shiva', age: 0 }, action) => {
  switch (action.type) {
    case SET_USER_NAME:
      return { ...state, name: action.payload };
    case SET_USER_AGE:
      return { ...state, age: action.payload };
    default:
      return state;
  }
};
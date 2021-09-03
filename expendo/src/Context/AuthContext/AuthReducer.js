import { SET_TOKEN, SET_USER } from "../../types";
const AuthReducer = (state, action) => {
  switch (action.type) {
    default: {
      return { ...state };
    }
    case SET_TOKEN: {
      localStorage.setItem("token", action.payload);
      return {
        ...state,
      };
    }
    case SET_USER: {
      return {
        ...state,
        user: action.payload,
      };
    }
  }
};

export default AuthReducer;

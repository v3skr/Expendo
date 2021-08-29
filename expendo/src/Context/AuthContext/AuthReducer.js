import { SET_TOKEN, SET_LOADING, REMOVE_LOADING } from "../../types";
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
  }
};

export default AuthReducer;

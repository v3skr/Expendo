import { SET_TOKEN } from "../../types";
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

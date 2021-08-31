import {
  TOGGGLE_EDIT,
  ADD_EXPENSE,
  SET_EDIT,
  REMOVE_EDIT,
  UPDATE,
  DELETE,
  SET_EXPENSES,
  SET_LOADING,
  REMOVE_LOADING,
  REMOVE_TOKEN,
  SET_PROPMT,
  TOGGLE_OVERLAY,
  SET_TYPE,
  SET_PAYLOAD
} from "../../types";
const ExpenseReducer = (state, action) => {
  switch (action.type) {
    default:
      return { ...state };
    case SET_EXPENSES: {
      action.payload.map((item) => (item.isEdit = false));
      return {
        ...state,
        expenses: action.payload,
      };
    }
    case TOGGGLE_EDIT: {
      return {
        ...state,
        isShown: !state.isShown,
        isAdd: !state.isAdd,
      };
    }
    case ADD_EXPENSE: {
      return {
        ...state,
        isShown: false,
        isAdd: !state.isAdd,
        expenses: [...state.expenses, action.payload],
      };
    }
    case SET_EDIT: {
      return {
        ...state,
        expenses: state.expenses.map((item, id) => {
          if (id === action.payload) {
            item.isEdit = true;
            return item;
          }
          return item;
        }),
      };
    }
    case REMOVE_EDIT: {
      return {
        ...state,
        expenses: state.expenses.map((item, id) => {
          if (id === action.payload) {
            item.isEdit = false;
            return item;
          }
          return item;
        }),
      };
    }
    case UPDATE: {
      return {
        ...state,
        expenses: state.expenses.map((item, id) => {
          if (id === action.payload.id) {
            item = action.payload.expense;
            return item;
          }
          return item;
        }),
      };
    }
    case DELETE: {
      return {
        ...state,
        expenses: state.expenses.filter((item, id) => id !== action.payload),
      };
    }
    case SET_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case REMOVE_LOADING: {
      return {
        ...state,
        loading: false,
      };
    }
    case REMOVE_TOKEN: {
      localStorage.removeItem("token");
      return {
        ...state,
        isAdd: false,
      };
    }
    case SET_PROPMT: {
      return {
        ...state,
        isPropmt: action.payload,
        isShown: action.payload,
      };
    }
    case TOGGLE_OVERLAY: {
      return {
        ...state,
        isAdd: state.isAdd ? !state.isAdd : state.isAdd,
        isPropmt: state.isPropmt ? !state.isPropmt : state.isPropmt,
        isShown: action.payload,
      };
    }
    case SET_TYPE: {
      return {
        ...state,
        type: action.payload.type,
        prompt: action.payload.msg,
      };
    }
    case SET_PAYLOAD: {
      return {
        ...state,
        payload: action.payload,
      };
    }
  }
};

export default ExpenseReducer;

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
        isAdd: !state.isAdd,
      };
    }
    case ADD_EXPENSE: {
      return {
        ...state,
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
  }
};

export default ExpenseReducer;

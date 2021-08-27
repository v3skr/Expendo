import { TOGGGLE_EDIT, ADD_EXPENSE } from "../../types";
const ExpenseReducer = (state, action) => {
  switch (action.type) {
    default:
      return { ...state };
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
        expenses: [action.payload, ...state.expenses],
      };
    }
  }
};

export default ExpenseReducer;

import { SET_ALERT, REMOVE_ALERT } from "../../types";
const AlertReducer = (state, action) => {
  switch (action.type) {
    default:
      return { ...state };
    case SET_ALERT: {
      return {
        ...state,
        Alerts: [...state.Alerts, action.payload],
      };
    }
    case REMOVE_ALERT: {
      return {
        ...state,
        Alerts: state.Alerts.filter((alert) => alert.id !== action.payload),
      };
    }
  }
};

export default AlertReducer;

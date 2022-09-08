import { ADD_DATA, GET_DATA } from "./auth-action";

export const authReducer = (state = null, action) => {
  switch (action.type) {
    case ADD_DATA:
      return action.data;

    case GET_DATA: {
      return action.data.data;
    }
    default:
      return state;
  }
};

import { GET_MODELS } from "./model-action";

export const modelReducer = (state = null, action) => {
  switch (action.type) {
    case GET_MODELS:
      return action.data.data;

    default:
      return state;
  }
};

export const GET_DATA = "GET_DATA";
export const ADD_DATA = "ADD_DATA";

export const getData = (data) => ({
  type: GET_DATA,
  data,
});
export const addData = (data) => ({
  type: ADD_DATA,
  data,
});

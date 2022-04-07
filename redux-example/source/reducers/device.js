import { FETCH_ALL_DATA, FETCH_SINGLE_DATA } from "../constants/app";

const initialState = {
  allDevices: [],
  device: {},
};

export const devices = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_DATA:
      return {
        ...state,
        allDevices: action.data,
      };
    case FETCH_SINGLE_DATA:
      return {
        ...state,
        device: action.data,
      };
    default:
      return state;
  }
};

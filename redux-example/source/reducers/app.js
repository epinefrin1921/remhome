import { FETCH_ALL_DATA } from "../constants/app";

const initialState = {
  data: [],
  daLiImaOvo: true,
};

export const app = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_DATA:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
};

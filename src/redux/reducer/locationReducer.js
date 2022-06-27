import {
  ADD_LOCATION,
  GET_LOCATION_DETAIL,
  GET_LOCATION_LIST,
} from "../type/locationType";

let initialState = {
  locationList: [],
  locationDetail: {},
};

export const locationReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_LOCATION_LIST: {
      state.locationList = payload;
      return { ...state };
    }
    case ADD_LOCATION: {
      let CloneArr = [...state.locationList];
      CloneArr.push(payload);
      state.locationList = CloneArr;
      return { ...state };
    }
    case GET_LOCATION_DETAIL: {
      state.locationDetail = payload;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

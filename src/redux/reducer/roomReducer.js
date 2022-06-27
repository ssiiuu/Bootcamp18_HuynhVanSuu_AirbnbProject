import { ADD_ROOM, GET_ROOM_DETAIL, GET_ROOM_LIST } from "../type/roomType";

const initialState = {
  roomList: [],
  roomDetail: {},
};

export const roomReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ROOM_LIST: {
      state.roomList = payload;
      return { ...state };
    }
    case ADD_ROOM: {
      let CloneArr = [...state.roomList];
      CloneArr.push(payload);
      state.roomList = CloneArr;
      return { ...state };
    }
    case GET_ROOM_DETAIL: {
      state.roomDetail = payload;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

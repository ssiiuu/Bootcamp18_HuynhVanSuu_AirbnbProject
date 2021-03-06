import localStorageServ from "../../Service/locaStorage.service";
import {
  GET_USER_LIST,
  LOGIN,
  SET_USER_ADMIN_LIST,
  SET_USER_DETAILS_INFOR,
  SET_USER_DETAILS_TICKET_INFOR,
} from "../type/userType";

let initialState = {
  userList: [],
  userInforDetails: {},
  userInforDetailsTickets: [],
  userLogin: localStorageServ.userLogin.get(),
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN: {
      state.userLogin = payload?.user;
      localStorageServ.userLogin.set(payload?.user);
      localStorageServ.tokenAdmin.set(payload?.token);
      return { ...state };
    }
    case GET_USER_LIST: {
      state.userList = payload;
      return { ...state };
    }
    case SET_USER_ADMIN_LIST: {
      let cloneArr = [...state.userList];
      cloneArr.push(payload);
      state.userList = cloneArr;
      return { ...state };
    }
    case SET_USER_DETAILS_INFOR: {
      state.userInforDetails = payload;
      return { ...state };
    }
    case SET_USER_DETAILS_TICKET_INFOR: {
      state.userInforDetailsTickets = payload;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

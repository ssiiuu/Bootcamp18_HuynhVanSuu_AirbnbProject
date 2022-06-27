// import { TOKEN_ADMIN, USER_LOGIN } from "../../configURL/constant";
import localStorageServ from "../../Service/locaStorage.service";
import {
  GET_USER_LIST,
  LOGIN,
  SET_USER_ADMIN_LIST,
  SET_USER_DETAILS_INFOR,
} from "../type/userType";

let initialState = {
  userList: [],
  userInforDetails: {},
  userLogin: localStorageServ.userLogin.get(),
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN: {
      state.userLogin = payload?.user;
      localStorageServ.userLogin.set(payload?.user);
      localStorageServ.tokenAdmin.set(payload?.token);
      // localStorage.setItem(USER_LOGIN, JSON.stringify(payload?.user));
      // localStorage.setItem(TOKEN_ADMIN, payload?.token);
      return { ...state };
    }
    case GET_USER_LIST: {
      state.userList = payload;
      return { ...state };
    }
    case SET_USER_ADMIN_LIST: {
      let cloneArr = [...state.userList];
      cloneArr.push(payload);
      // cloneArr = [payload, ...cloneArr];
      state.userList = cloneArr;
      return { ...state };
    }
    case SET_USER_DETAILS_INFOR: {
      state.userInforDetails = payload;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

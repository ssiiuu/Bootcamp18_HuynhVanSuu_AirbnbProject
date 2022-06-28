import { message } from "antd";
import { history } from "../../App";
import httpServ from "../../Service/http.service";
import { ADD_ROOM, GET_ROOM_DETAIL, GET_ROOM_LIST } from "../type/roomType";

export const getRoomListAction = (locationId = "") => {
  return (dispatch) => {
    httpServ
      .getRoomList(locationId)
      .then((res) => {
        // console.log("resRoomList", res);
        dispatch({
          type: GET_ROOM_LIST,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

export const addRoomAction = (data) => {
  return (dispatch) => {
    httpServ
      .addRoom(data)
      .then((res) => {
        message.success("Thêm thành công!");
        dispatch({
          type: ADD_ROOM,
          payload: res.data,
        });
        setTimeout(() => {
          history.push("/admin/room");
        }, 1000);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

export const getRoomDetailAction = (id) => {
  return (dispatch) => {
    httpServ
      .getRoomDetail(id)
      .then((res) => {
        dispatch({
          type: GET_ROOM_DETAIL,
          payload: res.data,
        });
        history.push("/admin/room/edit");
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

export const updateRoomDetailAction = (data, id) => {
  return (dispatch) => {
    httpServ
      .updateRoomDetail(data, id)
      .then((res) => {
        message.success("Cập nhật thành công!");
        setTimeout(() => {
          history.push("/admin/room");
        }, 1000);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

export const deleteRoomAction = (id) => {
  return (dispatch) => {
    httpServ
      .deleteRoom(id)
      .then((res) => {
        httpServ
          .getRoomList()
          .then((res) => {
            message.success("Xóa thành công!");
            dispatch({
              type: GET_ROOM_LIST,
              payload: res.data,
            });
          })
          .catch((err) => {
            console.log("err", err);
          });
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

export const updateImgRoomAction = (roomImg, id) => {
  return (dispatch) => {
    httpServ
      .updateImgRoom(roomImg, id)
      .then((res) => {
        message.success("Cập nhật ảnh thành công!");
        httpServ
          .getRoomList()
          .then((res) => {
            dispatch({
              type: GET_ROOM_LIST,
              payload: res.data,
            });
          })
          .catch((err) => {
            console.log("err", err);
          });
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

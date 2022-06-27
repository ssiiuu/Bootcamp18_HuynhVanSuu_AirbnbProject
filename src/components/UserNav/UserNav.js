import { Button } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { LOGIN } from "../../redux/type/userType";
import localStorageServ from "../../Service/locaStorage.service";

export default function UserNav() {
  const history = useHistory();
  let userLogin = useSelector((state) => state.userReducer.userLogin);
  // console.log({ userLogin });
  let dispatch = useDispatch();
  const handleLogout = () => {
    // localStorageServ.userLogin.remove();
    // localStorageServ.tokenAdmin.remove();
    localStorage.clear();
    dispatch({
      type: LOGIN,
      payload: null,
    });
    setTimeout(() => {
      history.push("/login");
    }, 1000);
  };
  return userLogin ? (
    <div className="flex justify-center items-center space-x-3">
      <span>{userLogin.name}</span>
      <img
        style={{ width: 50, height: 50, borderRadius: "100%" }}
        src={userLogin.avatar}
        alt="..."
      />
      <Button
        onClick={() => {
          if (window.confirm("Bạn có chắc muốn đăng xuất không?")) {
            handleLogout();
          }
        }}
        className="bg-red-600 text-white rounded cursor-pointer"
      >
        Đăng xuất
      </Button>
    </div>
  ) : (
    <div className="space-x-3">
      <NavLink to="/login">
        <Button className="bg-blue-600 text-white rounded cursor-pointer">
          Đăng nhập
        </Button>
      </NavLink>
      <NavLink to="/register">
        <Button className="bg-red-600 text-white rounded cursor-pointer">
          Đăng kí
        </Button>
      </NavLink>
    </div>
  );
}

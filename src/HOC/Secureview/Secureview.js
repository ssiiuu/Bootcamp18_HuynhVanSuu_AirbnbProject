import React from "react";
import { TOKEN_ADMIN, USER_LOGIN } from "../../configURL/constant";
import localStorageServ from "../../Service/locaStorage.service";

export default function Secureview({ Component }) {
  let userInfor = localStorageServ.userLogin.get();
  let token = localStorageServ.tokenAdmin.get();

  console.log("userInfor", userInfor);
  console.log("token", token);
  return token && userInfor?.type === "ADMIN"
    ? Component
    : // : window.location.assign("/login");
      Component;
}

import localStorageServ from "../../Service/locaStorage.service";

export default function Secureview({ Component }) {
  let userInfor = localStorageServ.userLogin.get();
  let token = localStorageServ.tokenAdmin.get();

  return token && userInfor?.type === "ADMIN"
    ? Component
    : window.location.assign("/login");
}

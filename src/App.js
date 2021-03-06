import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import Secureview from "./HOC/Secureview/Secureview";
import AdminAddLocation from "./Page/AdminLocations/AdminAddLocation/AdminAddLocation";
import AdminEditLocation from "./Page/AdminLocations/AdminEditLocation/AdminEditLocation";
import AdminLoaction from "./Page/AdminLocations/AdminLocations";
import AdminAddRoom from "./Page/AdminRooms/AdminAddRoom/AdminAddRoom";
import AdminEditRoom from "./Page/AdminRooms/AdminEditRoom/AdminEditRoom";
import AdminRooms from "./Page/AdminRooms/AdminRooms";
import AdminAddUsers from "./Page/AdminUsers/AdminAddUsers/AdminAddUsers";
import AdminEditUser from "./Page/AdminUsers/AdminEditUser/AdminEditUser";
import AdminUsers from "./Page/AdminUsers/AdminUsers";
import Login from "./Page/Login/Login";

import AdminTemplate from "./template/AdminTemplate/AdminTemplate";
import UserTemplate from "./template/UserTemplate/UserTemplate";
import { createBrowserHistory } from "history";
import Loading from "./components/Loading/Loading";
import AdminDashBoard from "./Page/AdminDashBoard/AdminDashBoard";
import AdminUserProfile from "./Page/AdminUsers/AdminUserProfile/AdminUserProfile";
import AdminLocationDetail from "./Page/AdminLocations/AdminLocationDetail/AdminLocationDetail";
import AdminRoomDetail from "./Page/AdminRooms/AdminRoomDetail/AdminRoomDetail";
import AdminValueate from "./Page/AdminValueate/AdminValueate";

export const history = createBrowserHistory();

export default function App() {
  return (
    <div>
      <Loading />
      <Router history={history}>
        <Switch>
          <Route
            exact
            path="/admin/dashboard"
            render={() => {
              return (
                <AdminTemplate Component={AdminDashBoard} />
                // <Secureview
                //   Component={<AdminTemplate Component={AdminUsers} />}
                // />
              );
            }}
          />
          <Route
            exact
            path="/login"
            render={() => {
              return <UserTemplate Component={Login} />;
            }}
          />
          <Route
            exact
            path="/admin/user"
            render={() => {
              return <AdminTemplate Component={AdminUsers} />;
            }}
          />
          <Route
            exact
            path="/admin/user/addnew"
            render={() => {
              return <AdminTemplate Component={AdminAddUsers} />;
            }}
          />
          <Route
            exact
            path="/admin/user/edit"
            render={() => {
              return <AdminTemplate Component={AdminEditUser} />;
            }}
          />
          <Route
            exact
            path="/admin/user/profile"
            render={() => {
              return <AdminTemplate Component={AdminUserProfile} />;
            }}
          />
          <Route
            exact
            path="/admin/location"
            render={() => {
              return <AdminTemplate Component={AdminLoaction} />;
            }}
          />
          <Route
            exact
            path="/admin/location/detail/:id"
            render={() => {
              return <AdminTemplate Component={AdminLocationDetail} />;
            }}
          />
          <Route
            exact
            path="/admin/location/addnew"
            render={() => {
              return <AdminTemplate Component={AdminAddLocation} />;
            }}
          />
          <Route
            exact
            path="/admin/location/edit"
            render={() => {
              return <AdminTemplate Component={AdminEditLocation} />;
            }}
          />
          <Route
            exact
            path="/admin/rooms/:locationId"
            render={() => {
              return <AdminTemplate Component={AdminRooms} />;
            }}
          />
          <Route
            exact
            path="/admin/rooms/detail/:id"
            render={() => {
              return <AdminTemplate Component={AdminRoomDetail} />;
            }}
          />
          <Route
            exact
            path="/admin/rooms/addnew/:locationId"
            render={() => {
              return <AdminTemplate Component={AdminAddRoom} />;
            }}
          />
          <Route
            exact
            path="/admin/rooms/edit/:locationId"
            render={() => {
              return <AdminTemplate Component={AdminEditRoom} />;
            }}
          />
          <Route
            exact
            path="/admin/reviewsByRoom/:roomId"
            render={() => {
              return <AdminTemplate Component={AdminValueate} />;
            }}
          />
        </Switch>
      </Router>
    </div>
  );
}

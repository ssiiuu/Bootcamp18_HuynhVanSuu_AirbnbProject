import React, { useEffect, useState } from "react";
import moment from "moment";
import { Button, Input, Tag } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUserAction,
  getUserInforAction,
  getUserListAction,
} from "../../redux/action/userAction";
import Column from "antd/lib/table/Column";
import { useHistory } from "react-router-dom";

const { Search } = Input;

export default function AdminUsers() {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserListAction());
  }, []);

  let { userList } = useSelector((state) => state.userReducer);

  const onSearch = (value) => {
    //call api layDanhSachNguoiDung
    dispatch(getUserListAction(value));
  };

  const onChange = (pagination, filters, sorter, extra) => {
    // console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <div className="">
      <h1 className="text-5xl text-blue-600">Quản lý người dùng</h1>
      <Button
        onClick={() => {
          history.push("/admin/user/addnew");
        }}
        size="large"
        className="my-5 bg-blue-600 text-white rounded-sm "
      >
        Thêm Quản trị viên
      </Button>

      <Search
        className="mb-5"
        placeholder="Tìm thành viên ..."
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      />

      <Table dataSource={userList.reverse()} onChange={onChange} rowKey={"_id"}>
        <Column title="User Name" dataIndex="name" key="name" />
        <Column title="Address" dataIndex="address" key="address" />
        <Column title="Email" dataIndex="email" key="email" />
        <Column title="Phone" dataIndex="phone" key="phone" />
        <Column
          title="Type"
          dataIndex="type"
          key="type"
          render={(type) => {
            return type === "ADMIN" ? (
              <Tag color={"red"}>Admin</Tag>
            ) : (
              <Tag color={"green"}>User</Tag>
            );
          }}
        />
        <Column
          title="Action"
          dataIndex="_id"
          key="action"
          render={(id, index) => {
            return (
              <>
                <button
                  onClick={() => {
                    dispatch(getUserInforAction(id));
                  }}
                  className="text-blue-600 text-2xl mr-2 cursor-pointer"
                >
                  <EditOutlined />
                </button>
                <button
                  onClick={() => {
                    if (
                      window.confirm(
                        "Bạn có chắc muốn xóa người dùng này không?"
                      )
                    ) {
                      dispatch(deleteUserAction(id));
                    }
                  }}
                  className="text-red-600 text-2xl cursor-pointer"
                >
                  <DeleteOutlined />
                </button>
              </>
            );
          }}
        />
      </Table>
    </div>
  );
}

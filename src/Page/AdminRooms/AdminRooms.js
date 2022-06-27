import React, { useEffect, useRef, useState } from "react";
import moment from "moment";
import { Button, Input } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  FileSearchOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Column from "antd/lib/table/Column";
import { useHistory } from "react-router-dom";
import {
  deleteRoomAction,
  getRoomDetailAction,
  getRoomListAction,
  updateImgRoomAction,
} from "../../redux/action/roomAction";

const { Search } = Input;

export default function AdminRooms() {
  const history = useHistory();
  const dispatch = useDispatch();
  const fileInput = useRef();

  const [selectedFile, setSelectedFile] = useState(null);
  useEffect(() => {
    dispatch(getRoomListAction());
  }, []);

  let { roomList } = useSelector((state) => state.roomReducer);
  const onSearch = (value) => {
    console.log(value);
    //call api layDanhSachNguoiDung
    // dispatch(getUserListAction(value));
  };

  const onChange = (pagination, filters, sorter, extra) => {
    // console.log("params", pagination, filters, sorter, extra);
  };

  const handleChangeFile = (e) => {
    //Lay file ra tu e
    let file = e.target.files[0];
    setSelectedFile(file);
  };
  return (
    <div className="">
      <h1 className="text-5xl text-blue-600">Quản lý thông tin phòng</h1>
      <Button
        onClick={() => {
          history.push("/admin/room/addnew");
        }}
        size="large"
        className="my-5 bg-blue-600 text-white rounded-sm "
      >
        Thêm phòng mới
      </Button>

      <Search
        className="mb-5"
        placeholder="Tìm phòng ..."
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      />

      <Table dataSource={roomList.reverse()} onChange={onChange} rowKey={"_id"}>
        <Column title="Name" dataIndex="name" key="name" width={300} />
        <Column
          title="Image"
          dataIndex="image"
          key="image"
          render={(img, id) => {
            return (
              <div className="flex justify-around items-center">
                <img
                  style={{ width: 50, height: 50, objectFit: "cover" }}
                  src={img}
                  alt="..."
                  onError={(e) => {
                    e.target.onError = null;
                    e.target.src = `https://picsum.photos/50/50`;
                  }}
                />

                {/* <input type="file" onChange={handleChangeFile} />
                <Button
                  onClick={() => {
                    dispatch(updateImgRoomAction(selectedFile));
                  }}
                >
                  Upload
                </Button> */}
              </div>
            );
          }}
        />
        <Column
          title="Update Img"
          dataIndex="_id"
          key="image"
          render={(id) => {
            return (
              <div>
                <input
                  style={{ display: "none" }}
                  type="file"
                  onChange={handleChangeFile}
                  ref={fileInput}
                />
                <Button
                  className="text-blue-600 mr-2"
                  onClick={() => {
                    fileInput.current.click();
                  }}
                >
                  Select file
                </Button>
                {selectedFile ? (
                  <Button
                    className="text-blue-600"
                    onClick={() => {
                      const formdata = new FormData();
                      formdata.append("room", selectedFile, selectedFile?.name);
                      setSelectedFile(null);
                      dispatch(updateImgRoomAction(formdata, id));
                    }}
                  >
                    Upload
                  </Button>
                ) : (
                  <Button disabled>Update</Button>
                )}
              </div>
            );
          }}
        />
        <Column
          title="Location"
          dataIndex={["locationId", "province"]}
          key="location"
        />
        <Column title="Guest Max" dataIndex="guests" key="guests" />
        <Column title="Price (VND)" dataIndex="price" key="price" />
        <Column
          title="Action"
          dataIndex="_id"
          key="action"
          render={(id, index) => {
            return (
              <>
                <button className="text-green-600 text-2xl mr-2 cursor-pointer">
                  <FileSearchOutlined />
                </button>
                <button
                  onClick={() => {
                    dispatch(getRoomDetailAction(id));
                  }}
                  className="text-blue-600 text-2xl mr-2 cursor-pointer"
                >
                  <EditOutlined />
                </button>
                <button
                  onClick={() => {
                    window.confirm("Bạn có chắc muốn xóa phòng này không?") &&
                      dispatch(deleteRoomAction(id));
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

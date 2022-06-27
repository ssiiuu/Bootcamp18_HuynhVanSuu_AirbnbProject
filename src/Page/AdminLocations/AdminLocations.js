import React, { useEffect, useRef, useState } from "react";
import moment from "moment";
import { Button, Input, Tag } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Column from "antd/lib/table/Column";
import { useHistory } from "react-router-dom";
import {
  deleteLocationAction,
  getLocationDetailAction,
  getLocationListAction,
  updateImgLocationAction,
} from "../../redux/action/locationAction";

const { Search } = Input;

export default function AdminLocation() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInput = useRef();

  useEffect(() => {
    dispatch(getLocationListAction());
  }, []);

  let { locationList } = useSelector((state) => state.locationReducer);
  const onSearch = (value) => {
    console.log(value);
    //call api layDanhSachNguoiDung
    // dispatch(getUserListAction(value));
  };

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const handleChangeFile = (e) => {
    //Lay file ra tu e
    let file = e.target.files[0];
    setSelectedFile(file);
  };
  return (
    <div className="">
      <h1 className="text-5xl text-blue-600">Quản lý thông tin vị trí</h1>
      <Button
        onClick={() => {
          history.push("location/addnew");
        }}
        size="large"
        className="my-5 bg-blue-600 text-white rounded-sm "
      >
        Thêm vị trí mới
      </Button>

      <Search
        className="mb-5"
        placeholder="Tìm vị trí ..."
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      />

      <Table
        dataSource={locationList.reverse()}
        onChange={onChange}
        rowKey={"_id"}
      >
        <Column title="Location-Id" dataIndex="_id" key="id" />
        <Column title="Name" dataIndex="name" key="name" />
        <Column title="Province" dataIndex="province" key="province" />
        <Column
          title="Image"
          dataIndex="image"
          key="image"
          render={(img, index) => {
            return (
              <div className="flex justify-around items-center">
                <img
                  style={{ width: 50, height: 50, objectFit: "cover" }}
                  src={img}
                  alt="..."
                />
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
                      formdata.append(
                        "location",
                        selectedFile,
                        selectedFile?.name
                      );
                      setSelectedFile(null);
                      dispatch(updateImgLocationAction(formdata, id));
                    }}
                  >
                    Upload
                  </Button>
                ) : (
                  <Button disabled>Upload</Button>
                )}
              </div>
            );
          }}
        />
        <Column title="Country" dataIndex="country" key="country" />
        <Column title="Valueate" dataIndex="valueate" key="valueate" />

        <Column
          title="Action"
          dataIndex="_id"
          key="action"
          render={(id, index) => {
            return (
              <>
                <button
                  onClick={() => {
                    dispatch(getLocationDetailAction(id));
                  }}
                  className="text-blue-600 text-2xl mr-2 cursor-pointer"
                >
                  <EditOutlined />
                </button>
                <button
                  onClick={() => {
                    window.confirm("Bạn có chắc muốn xóa vị trí này không?") &&
                      dispatch(deleteLocationAction(id));
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

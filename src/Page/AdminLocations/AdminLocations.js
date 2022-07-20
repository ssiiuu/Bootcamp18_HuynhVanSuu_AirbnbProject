import React, { useEffect, useRef, useState } from "react";
import { Button, Input, Tooltip } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  HomeOutlined,
  AppstoreAddOutlined,
  FileSearchOutlined,
} from "@ant-design/icons";
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
import UploadLocationImg from "./UploadLocationImg/UploadLocationImg";

const { Search } = Input;

export default function AdminLocation() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInput = useRef();
  const [page, setPage] = useState(1);
  useEffect(() => {
    dispatch(getLocationListAction());
  }, []);

  let { locationList } = useSelector((state) => state.locationReducer);

  const onChange = (pagination, filters, sorter, extra) => {
    // console.log("params", pagination, filters, sorter, extra);
  };

  const handleChangeFile = (e) => {
    //Lay file ra tu e
    let file = e.target.files[0];
    setSelectedFile(file);
  };
  return (
    <div>
      <Button
        onClick={() => {
          history.push("location/addnew");
        }}
        size="large"
        className="ml-5 mb-5 text-red-500 bg-white border-red-500 hover:bg-red-500 hover:text-white rounded"
      >
        Thêm vị trí mới
      </Button>

      <Table
        dataSource={locationList}
        onChange={onChange}
        rowKey={"_id"}
        pagination={{
          onChange(current) {
            setPage(current);
          },
        }}
      >
        <Column
          title="STT"
          key="stt"
          align="center"
          className="font-semibold"
          render={(value, item, index) => {
            return (page - 1) * 10 + index + 1;
          }}
        />
        <Column
          title="Edit"
          dataIndex="_id"
          key="edit"
          align="center"
          className="font-semibold"
          render={(id) => {
            return (
              <>
                <Tooltip title="Thêm phòng mới">
                  <button
                    onClick={() => {
                      history.push(`/admin/rooms/addnew/${id}`);
                    }}
                    className="text-yellow-600 text-2xl mr-4 cursor-pointer"
                  >
                    <AppstoreAddOutlined />
                  </button>
                </Tooltip>
                <Tooltip title="Xem danh sách các phòng">
                  <button
                    onClick={() => {
                      history.push(`/admin/rooms/${id}`);
                    }}
                    className="text-indigo-600 text-2xl mr-2 cursor-pointer"
                  >
                    <HomeOutlined />
                  </button>
                </Tooltip>
              </>
            );
          }}
        />
        <Column
          title="Name"
          dataIndex="name"
          align="center"
          className="font-semibold"
          key="name"
        />
        <Column
          title="Province"
          align="center"
          className="font-semibold"
          dataIndex="province"
          key="province"
        />
        <Column
          title="Country"
          align="center"
          className="font-semibold"
          dataIndex="country"
          key="country"
        />
        <Column
          title="Image"
          dataIndex="image"
          align="center"
          className="font-semibold"
          key="image"
          render={(img) => {
            return (
              // <div className="flex justify-around items-center">
              //   <img
              //     style={{ width: 50, height: 50, objectFit: "cover" }}
              //     src={img}
              //     alt="..."
              //   />
              // </div>
              <UploadLocationImg />
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
                    className="text-white bg-purple-400"
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
        <Column
          title="Valueate"
          align="center"
          className="font-semibold"
          dataIndex="valueate"
          key="valueate"
        />

        <Column
          title="Action"
          dataIndex="_id"
          key="action"
          align="center"
          className="font-semibold"
          render={(id) => {
            return (
              <>
                <Tooltip title="Xem chi tiết">
                  <button
                    onClick={() => {
                      dispatch(getLocationDetailAction(id));
                      history.push(`/admin/location/detail/${id}`);
                      // dispatch(getListTicketsByUserAction(id));
                    }}
                    className="text-green-600 text-2xl mr-4 cursor-pointer"
                  >
                    <FileSearchOutlined />
                  </button>
                </Tooltip>
                <Tooltip title="Sửa">
                  <button
                    onClick={() => {
                      dispatch(getLocationDetailAction(id));
                      history.push("/admin/location/edit");
                    }}
                    className="text-blue-600 text-2xl mr-4  cursor-pointer"
                  >
                    <EditOutlined />
                  </button>
                </Tooltip>
                <Tooltip title="Xóa">
                  <button
                    onClick={() => {
                      window.confirm(
                        "Bạn có chắc muốn xóa vị trí này không?"
                      ) && dispatch(deleteLocationAction(id));
                    }}
                    className="text-red-600 text-2xl cursor-pointer"
                  >
                    <DeleteOutlined />
                  </button>
                </Tooltip>
              </>
            );
          }}
        />
      </Table>
    </div>
  );
}

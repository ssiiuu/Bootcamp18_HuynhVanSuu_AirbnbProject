import React, { useEffect, useRef, useState } from "react";
import { Button, Input, Tooltip } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  FileSearchOutlined,
} from "@ant-design/icons";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Column from "antd/lib/table/Column";
import { useHistory, useParams } from "react-router-dom";
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
  const { locationId } = useParams();

  const fileInput = useRef();

  const [selectedFile, setSelectedFile] = useState(null);

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getRoomListAction(locationId));
  }, []);

  let { roomList } = useSelector((state) => state.roomReducer);
  let roomListData = roomList.filter((room) => {
    return room.locationId;
  });

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
      <Button
        onClick={() => {
          history.push(`/admin/rooms/addnew/${locationId}`);
        }}
        size="large"
        className="ml-5 mb-5 text-red-500 bg-white border-red-500 hover:bg-red-500 hover:text-white rounded"
      >
        Thêm phòng mới
      </Button>

      <Table
        dataSource={roomListData}
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
          title="Name"
          align="center"
          className="font-semibold"
          dataIndex="name"
          key="name"
          width={300}
        />

        <Column
          title="Location"
          dataIndex={["locationId", "province"]}
          key="location"
          align="center"
          className="font-semibold"
        />
        <Column
          title="Guest Max"
          align="center"
          className="font-semibold"
          dataIndex="guests"
          key="guests"
        />
        <Column
          title="Price (VND)"
          align="center"
          className="font-semibold"
          dataIndex="price"
          key="price"
        />
        <Column
          title="Image"
          dataIndex="image"
          align="center"
          className="font-semibold"
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
              </div>
            );
          }}
        />
        <Column
          title="Update Img"
          dataIndex="_id"
          key="image"
          align="center"
          className="font-semibold"
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
                      dispatch(getRoomDetailAction(id));
                      history.push(`/admin/rooms/detail/${id}`);
                    }}
                    className="text-green-600 text-2xl mr-4 cursor-pointer"
                  >
                    <FileSearchOutlined />
                  </button>
                </Tooltip>
                <Tooltip title="Sửa">
                  <button
                    onClick={() => {
                      dispatch(getRoomDetailAction(id, locationId));
                      history.push(`/admin/rooms/edit/${locationId}`);
                    }}
                    className="text-blue-600 text-2xl mr-4 cursor-pointer"
                  >
                    <EditOutlined />
                  </button>
                </Tooltip>
                <Tooltip title="Xóa">
                  <button
                    onClick={() => {
                      window.confirm("Bạn có chắc muốn xóa phòng này không?") &&
                        dispatch(deleteRoomAction(id, locationId));
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

import { Button } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { history } from "../../../App";
import { Rate } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

export default function AdminRoomDetail() {
  const { roomDetail } = useSelector((state) => state.roomReducer);
  console.log({ roomDetail });

  const { id } = useParams();

  let rateNumber = 0;
  if (roomDetail.locationId) {
    rateNumber = roomDetail.locationId.valueate;
  } else {
    rateNumber = 10;
  }
  return (
    <div className="p-10">
      <div className="grid grid-cols-12  ">
        <div className="col-span-7 flex justify-center items-center">
          <img
            style={{
              width: 600,
              height: 350,
              objectFit: "cover",
              borderRadius: 12,
            }}
            src={roomDetail.image}
            alt="Ảnh chưa được cập nhật..."
          />
        </div>
        <div className="col-span-5 flex items-center text-xl ">
          <div className="w-full">
            <h1 className="col-span-3 text-3xl text-red-500 font-bold">
              {roomDetail.name}
            </h1>
            <p>{/* {roomDetail.province}, {roomDetail.country} */}</p>
            <div className="flex">
              <Rate
                className="mb-3 pr-2 border-r-2"
                allowHalf
                value={rateNumber / 2}
              />
              <div className="space-x-3 ml-5  ">
                <a href="https://vi-vn.facebook.com" target="_blank">
                  <FacebookOutlined className="text-gray-500 hover:text-red-500 transition " />
                </a>
                <a href="https://twitter.com/?lang=vi" target="_blank">
                  <TwitterOutlined className="text-gray-500 hover:text-red-500 transition " />
                </a>
                <a href="https://www.youtube.com/" target="_blank">
                  <YoutubeOutlined className="text-gray-500 hover:text-red-500 transition " />
                </a>
              </div>
            </div>
            <div className="space-x-5 text-sm font-medium">
              <span>Bath: {roomDetail.bath}</span>
              <span>BedRoom: {roomDetail.bedRoom}</span>
              <span>Guests: {roomDetail.guests}</span>
            </div>

            {/* <Button
              onClick={() => {
                history.push(`/admin/rooms/${id}`);
              }}
              size="large"
              className="mt-5 text-red-500 bg-white border-red-500 hover:bg-red-500 hover:text-white rounded"
            >
              Xem danh sách các phòng
            </Button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

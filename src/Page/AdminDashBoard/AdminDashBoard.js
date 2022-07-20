import React from "react";
import {
  TeamOutlined,
  HomeOutlined,
  EnvironmentOutlined,
  LikeOutlined,
  TagOutlined,
} from "@ant-design/icons";
import "./AdminDashBoard.css";

export default function AdminDashBoard() {
  return (
    <section className="py-8" style={{ backgroundColor: "#f0f2f5" }}>
      <div className="px-8">
        <div className="flex flex-wrap ">
          <div style={{ width: "20%" }} className="px-2 ">
            <section className="box-shadow-section-item flex items-center justify-between bg-white p-4 rounded">
              <div>
                <h2
                  className="text-gray-400"
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    lineHeight: "1rem",
                    marginBottom: 0,
                  }}
                >
                  USERS
                </h2>
                <span
                  className="text-xl font-bold"
                  style={{ lineHeight: "1.75rem" }}
                >
                  887
                </span>
              </div>
              <div>
                <div
                  className="flex justify-center items-center text-white text-xl"
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: "100%",
                    backgroundColor: "#ff3e61",
                  }}
                >
                  <TeamOutlined />
                </div>
              </div>
            </section>
          </div>
          <div style={{ width: "20%" }} className="px-2 ">
            <section className="flex items-center justify-between box-shadow-section-item bg-white p-4 rounded">
              <div>
                <h2
                  className="text-gray-400"
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    lineHeight: "1rem",
                    marginBottom: 0,
                  }}
                >
                  ROOMS
                </h2>
                <span
                  className="text-xl font-bold"
                  style={{ lineHeight: "1.75rem" }}
                >
                  435
                </span>
              </div>
              <div>
                <div
                  className="flex justify-center items-center text-white text-xl"
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: "100%",
                    backgroundColor: "#f97316",
                  }}
                >
                  <HomeOutlined />
                </div>
              </div>
            </section>
          </div>
          <div style={{ width: "20%" }} className="px-2 ">
            <section className="box-shadow-section-item flex items-center justify-between bg-white p-4 rounded">
              <div>
                <h2
                  className="text-gray-400"
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    lineHeight: "1rem",
                    marginBottom: 0,
                  }}
                >
                  LOCATIONS
                </h2>
                <span
                  className="text-xl font-bold"
                  style={{ lineHeight: "1.75rem" }}
                >
                  24
                </span>
              </div>
              <div>
                <div
                  className="flex justify-center items-center text-white text-xl"
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: "100%",
                    backgroundColor: "#ec4899",
                  }}
                >
                  <EnvironmentOutlined />
                </div>
              </div>
            </section>
          </div>
          <div style={{ width: "20%" }} className="px-2 ">
            <section className="box-shadow-section-item flex items-center justify-between bg-white p-4 rounded">
              <div>
                <h2
                  className="text-gray-400"
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    lineHeight: "1rem",
                    marginBottom: 0,
                  }}
                >
                  VALUATION
                </h2>
                <span
                  className="text-xl font-bold"
                  style={{ lineHeight: "1.75rem" }}
                >
                  131
                </span>
              </div>
              <div>
                <div
                  className="flex justify-center items-center text-white text-xl"
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: "100%",
                    backgroundColor: "#3b82f6",
                  }}
                >
                  <LikeOutlined />
                </div>
              </div>
            </section>
          </div>
          <div style={{ width: "20%" }} className="px-2 ">
            <section className="box-shadow-section-item flex items-center justify-between bg-white p-4 rounded">
              <div>
                <h2
                  className="text-gray-400"
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    lineHeight: "1rem",
                    marginBottom: 0,
                  }}
                >
                  TICKETS
                </h2>
                <span
                  className="text-xl font-bold"
                  style={{ lineHeight: "1.75rem" }}
                >
                  1,376
                </span>
              </div>
              <div>
                <div
                  className="flex justify-center items-center text-white text-xl"
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: "100%",
                    backgroundColor: "#6b7280",
                  }}
                >
                  <TagOutlined />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

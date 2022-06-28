import React from "react";
import ReactLoading from "react-loading";
import { useSelector } from "react-redux";
export default function Loading() {
  let { isLoading } = useSelector((state) => state.loadingReducer);
  return isLoading ? (
    <div className="fixed bg-gray-900 flex justify-center items-center w-screen h-screen bg-opacity-40 z-10">
      <ReactLoading
        type={"spinningBubbles"}
        color={"blue"}
        height={200}
        width={200}
      />
    </div>
  ) : (
    <></>
  );
}

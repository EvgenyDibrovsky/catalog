"use client";
import { Puff } from "react-loader-spinner";

export default function LoadingCompany() {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <Puff
        height="80"
        width="80"
        radius={1}
        color="#38bdf8"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}

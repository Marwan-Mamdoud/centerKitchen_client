import React from "react";

const Loading = () => {
  return (
    <div className="!w-fit mx-auto h-full flex items-center justify-center">
      <div className="rounded-full w-10 h-10 border-4 mt-5 animate-spin border-black border-b-transparent"></div>
    </div>
  );
};

export default Loading;

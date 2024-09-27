// src/components/Loading.js
import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-base-300">
      <div className="animate-spin rounded-full h-20 w-20 border-b-4 border-accent"></div>
      <p className="mt-2 font-semibold"> Initializing...</p>
    </div>
  );
};

export default Loading;

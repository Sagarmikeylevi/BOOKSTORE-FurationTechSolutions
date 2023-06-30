import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";

const Error = ({ message, code }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-6xl text-red-500">
        <FaExclamationTriangle />
      </div>
      <div className="text-3xl text-gray-800 mb-4">{code}</div>
      <div className="text-xl text-gray-600">{message}</div>
    </div>
  );
};

export default Error;

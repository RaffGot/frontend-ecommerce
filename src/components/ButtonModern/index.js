import React from "react";

const ButtonModern = ({ children, color, className, ...props }) => {
  return (
    <button
      className={`px-4 py-2 rounded-full font-bold text-white ${
        color
          ? `bg-${color}-500 hover:bg-${color}-600`
          : "bg-gray-500 hover:bg-gray-600"
      } shadow-md transition duration-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
// ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700

export default ButtonModern;

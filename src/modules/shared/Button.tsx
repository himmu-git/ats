import React from "react";

const Button = ({ children, onClick = (e) => {}, id = "", type = "" }) => {
  return (
    <button
      type={type}
      id={id}
      onClick={onClick}
      className="bg-blue-600 text-white rounded-lg p-2 my-2"
    >
      {children}
    </button>
  );
};

export default Button;

import React from "react";

const Button = ({
  children,
  onClick = (e) => {},
  id = "",
  type = "",
  className,
}) => {
  return (
    <button
      type={type}
      id={id}
      onClick={onClick}
      className={`${className} bg-blue-600 text-white rounded-lg p-2 my-2 `}
    >
      {children}
    </button>
  );
};

export default Button;

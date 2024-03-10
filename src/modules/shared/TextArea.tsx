import React from "react";

type Props = {};

const TextArea = ({ id, showLabel = true, labelTxt, placeholder }: Props) => {
  return (
    <div className="flex  items-center ">
      {showLabel && (
        <label
          className="text-blue-950 w-[30%] text-xl font-normal leading-5	text-left	"
          htmlFor={id}
        >
          {labelTxt}
        </label>
      )}
      <textarea
        className="p-3 border-blue-100 border-[2px] rounded-lg w-[30%]"
        id={id}
        // type={type}
        placeholder={placeholder}
        // onChange={onChange}
      />
    </div>
  );
};

export default TextArea;

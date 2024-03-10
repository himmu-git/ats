import React from "react";

type Props = {};

const Input = ({
  type = "text",
  id,
  placeholder,
  showLabel = true,
  labelTxt,
  onChange,
  required,
}: Props) => {
  return (
    <div className="flex gap-4  items-center ">
      {showLabel && (
        <label
          className="text-blue-950 w-[30%] text-xl font-normal leading-5	text-left	"
          htmlFor={id}
        >
          {labelTxt}
        </label>
      )}
      <input
        className="p-3 border-blue-100 border-[2px] rounded-lg w-[30%]"
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        required={true}
      />
    </div>
  );
};

export default Input;

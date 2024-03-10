import React, { useState } from "react";
import Input from "./Input";

type Props = {};

const Radio = ({ radiosData = [], onChange }: Props) => {
  // const [selectedRadio, setSelectedRadio] = useState({});
  const handleChange = (e) => {
    // const { name, value } = e.target;
    onChange(e);
  };
  return (
    <>
      {radiosData.map(({ id, name, label, value, isChecked }) => {
        return (
          <div key={id} className="flex gap-2  items-center ">
            <input
              className="p-3 border-blue-100 border-[2px] rounded-lg"
              id={id}
              name={name}
              type={"radio"}
              value={value}
              // checked={isChecked}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <label
              className="text-blue-950 text-xl font-normal leading-5 text-left	"
              htmlFor={id}
            >
              {label}
            </label>
          </div>
        );
      })}
    </>
  );
};

export default Radio;

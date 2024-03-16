import { useRef } from "react";

type Props = {};
const Input = ({
  type = "text",
  id,
  placeholder,
  showLabel = true,
  labelTxt,
  onChange,
  required,
  errorMsg,
  className,
  ...restProps
}: Props) => {
  const inputRef = useRef();
  return (
    <div className="flex gap-4  items-center ">
      {showLabel && (
        <label
          className="text-blue-950 w-[30%] text-xl font-normal leading-5	text-left	flex-shrink-0"
          htmlFor={id}
        >
          {labelTxt}
        </label>
      )}
      <input
        ref={inputRef}
        className={`p-3 border-blue-100 border-[2px] rounded-lg w-[30%] flex-shrink-0 ${className}`}
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        required={true}
        onBlur={() => {
          inputRef.current.classList.add("touched");
        }}
        {...restProps}
      />
      <span className="flex-grow-0">{errorMsg}</span>
    </div>
  );
};

export default Input;

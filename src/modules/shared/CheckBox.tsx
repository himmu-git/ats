type Props = {};

const CheckBox = ({
  label,
  value,
  onChange,
  className,
  name,
  isChecked,
}: Props) => {
  return (
    <label className={className}>
      <input
        className={"p-2"}
        type="checkbox"
        name={name}
        value={value}
        checked={isChecked}
        onChange={onChange}
      />
      {label}
    </label>
  );
};

export default CheckBox;

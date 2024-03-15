type Props = {};

const Radio = ({ radiosData = [], onChange }: Props) => {
  const handleChange = (e) => {
    onChange(e);
  };
  return (
    <>
      {radiosData.map(({ id, name, label, value }) => {
        return (
          <div key={id} className="flex gap-2  items-center ">
            <input
              className="p-3 border-blue-100 border-[2px] rounded-lg"
              id={id}
              name={name}
              type={"radio"}
              value={value}
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
